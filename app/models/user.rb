class User < ApplicationRecord
  attr_reader :password

  validates :email, :name, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { in: 8..30 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :owned_teams,
    class_name: 'Team',
    foreign_key: :team_owner_id,
    primary_key: :id

  has_many :team_memberships,
    class_name: 'TeamMembership',
    foreign_key: :member_id,
    primary_key: :id

  has_many :teams, through: :team_memberships, source: :team

  has_many :owned_projects,
    class_name: 'Project',
    foreign_key: :project_owner_id,
    primary_key: :id

  has_many :project_memberships,
    class_name: 'ProjectMembership',
    foreign_key: :member_id,
    primary_key: :id

  has_many :projects, through: :project_memberships, source: :project

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  def self.search_results(query, current_user_id)
    param = '%' + query.downcase + '%'
    User.where.not(id: current_user_id)
      .where('lower(name) LIKE ? or lower(email) LIKE ?', param, param)
      .limit(5)
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def generate_unique_session_token
    self.session_token = generate_session_token
    until User.find_by(session_token: self.session_token).nil?
      self.session_token = generate_session_token
    end
    self.session_token
  end
end
