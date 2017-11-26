# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Team.destroy_all

user1 = User.create(name: "Jon Snow", email: "jsnow@thewall.got", password: "jonsnowcorgicorgi", profile_image_url: "https://i.imgur.com/vqXRTKt.jpg")
user2 = User.create(name: "Danaerys Targaryen", email: "dtargaryen@dragonstone.got", password: "danaerystargaryencorgicorgi", profile_image_url: "https://i.imgur.com/EIW9JXm.jpg")
user3 = User.create(name: "Lord Varys", email: "lvarys@dragonstone.got", password: "lordvaryscorgicorgi", profile_image_url: "https://i.imgur.com/9oCvNdL.jpg")
user4 = User.create(name: "Tyrion Lannister", email: "tlannister@dragonstone.got", password: "tyrionlanniestercorgicorgi", profile_image_url: "https://i.imgur.com/6DjiNFi.jpg")
user5 = User.create(name: "Khal Drogo", email: "kdrogo@dragonstone.got", password: "khaldrogocorgicorgi", profile_image_url: "https://i.imgur.com/6DjiNFi.jpg")
user6 = User.create(name: "Grey Worm", email: "gworm@dragonstone.got", password: "greywormcorgicorgi", profile_image_url: "https://i.imgur.com/6DjiNFi.jpg")
user7 = User.create(name: "Jorah Mormont", email: "jmormont@dragonstone.got", password: "jmormontorgicorgi", profile_image_url: "https://i.imgur.com/6DjiNFi.jpg")

user8 = User.create(name: "Lord Baelish", email: "lfinger@winterfell.got", password: "lordbaelishcorgicorgi", profile_image_url: "https://i.imgur.com/qbGYwf0.jpg")
user9 = User.create(name: "Melisandre", email: "melisandre@winterfell.got", password: "melisandrecorgicorgi", profile_image_url: "https://i.imgur.com/DZMQgB5.jpg")
user10 = User.create(name: "Sansa Stark", email: "sstark@winterfell.got", password: "sansastarkcorgicorgi", profile_image_url: "https://i.imgur.com/DZMQgB5.jpg")
user11 = User.create(name: "Arya Stark", email: "astark@winterfell.got", password: "aryastarkcorgicorgi", profile_image_url: "https://i.imgur.com/DZMQgB5.jpg")
user12 = User.create(name: "Ned Stark", email: "nstark@winterfell.got", password: "nedstarkcorgicorgi", profile_image_url: "https://i.imgur.com/DZMQgB5.jpg")
user13 = User.create(name: "Catelyn Start", email: "cstark@winterfell.got", password: "catelynstarkcorgicorgi", profile_image_url: "https://i.imgur.com/DZMQgB5.jpg")
user14 = User.create(name: "Robb Start", email: "rstark@winterfell.got", password: "robstarkcorgicorgi", profile_image_url: "https://i.imgur.com/DZMQgB5.jpg")

user15 = User.create(name: "Cersei Lannister", email: "cersei@kingslanding.got", password: "cerseilannistercorgicorgi", profile_image_url: "https://i.imgur.com/8fjPIqt.jpg")
user16 = User.create(name: "Jamie Lannister", email: "jlannister@kingslanding.got", password: "jamielannistercorgicorgi", profile_image_url: "https://i.imgur.com/LmtOiEN.jpg")
user17 = User.create(name: "Tywin Lannister", email: "tlannister@kingslanding.got", password: "tywinlannistercorgicorgi", profile_image_url: "https://i.imgur.com/cdmDgGO.jpg")
user18 = User.create(name: "Joffrey Baratheon", email: "jbaratheon@kingslanding.got", password: "joffreybaratheoncorgicorgi", profile_image_url: "https://i.imgur.com/GqhOAGb.jpg")
user19 = User.create(name: "Tommen Baratheon", email: "tbaratheon@kingslanding.got", password: "tommenbaratheoncorgicorgi", profile_image_url: "https://i.imgur.com/Nvu6bQS.jpg")
user20 = User.create(name: "Gregor Clegane", email: "gclegane@kingslanding.got", password: "gregorcleganecorgicorgi", profile_image_url: "https://i.imgur.com/VcvnWWJ.jpg")
user21 = User.create(name: "Euron Greyjoy", email: "egreyjoy@kingslanding.got", password: "eurongreyjoycorgicorgi", profile_image_url: "https://i.imgur.com/VPlSK6r.jpg")

team1 = Team.create(team_owner_id: user1.id, name: "House Targaryen", description: "Welcome to House Targaryen");
team2 = Team.create(team_owner_id: user8.id, name: "House Stark", description: "Welcome to House Stark")
team3 = Team.create(team_owner_id: user15.id, name: "House Lannister", description: "Welcome to House Lannister");

team_membership1 = TeamMembership.create(member_id: user1.id, team_id: team1.id)
team_membership2 = TeamMembership.create(member_id: user2.id, team_id: team1.id)
team_membership3 = TeamMembership.create(member_id: user3.id, team_id: team1.id)
team_membership4 = TeamMembership.create(member_id: user4.id, team_id: team1.id)
team_membership5 = TeamMembership.create(member_id: user5.id, team_id: team1.id)
team_membership6 = TeamMembership.create(member_id: user6.id, team_id: team1.id)
team_membership7 = TeamMembership.create(member_id: user7.id, team_id: team1.id)

team_membership8 = TeamMembership.create(member_id: user8.id, team_id: team2.id)
team_membership9 = TeamMembership.create(member_id: user9.id, team_id: team2.id)
team_membership10 = TeamMembership.create(member_id: user10.id, team_id: team2.id)
team_membership11 = TeamMembership.create(member_id: user11.id, team_id: team2.id)
team_membership12 = TeamMembership.create(member_id: user12.id, team_id: team2.id)
team_membership13 = TeamMembership.create(member_id: user13.id, team_id: team2.id)
team_membership14 = TeamMembership.create(member_id: user14.id, team_id: team2.id)

team_membership15 = TeamMembership.create(member_id: user15.id, team_id: team3.id)
team_membership16 = TeamMembership.create(member_id: user16.id, team_id: team3.id)
team_membership17 = TeamMembership.create(member_id: user17.id, team_id: team3.id)
team_membership18 = TeamMembership.create(member_id: user18.id, team_id: team3.id)
team_membership19 = TeamMembership.create(member_id: user19.id, team_id: team3.id)
team_membership20 = TeamMembership.create(member_id: user20.id, team_id: team3.id)
team_membership21 = TeamMembership.create(member_id: user21.id, team_id: team3.id)
