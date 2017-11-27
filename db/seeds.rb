# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Team.destroy_all
Project.destroy_all
TeamMembership.destroy_all
ProjectMembership.destroy_all

user1 = User.create(name: "Jon Snow", email: "jsnow@thewall.got", password: "jonsnowcorgicorgi", profile_image_url: "https://i.imgur.com/vqXRTKt.jpg", bio: "elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut")
user2 = User.create(name: "Danaerys Targaryen", email: "dtargaryen@dragonstone.got", password: "danaerystargaryencorgicorgi", profile_image_url: "https://i.imgur.com/EIW9JXm.jpg", bio: "ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget")
user3 = User.create(name: "Lord Varys", email: "lvarys@dragonstone.got", password: "lordvaryscorgicorgi", profile_image_url: "https://i.imgur.com/fhWyUJA.jpg", bio: "sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin")
user4 = User.create(name: "Tyrion Lannister", email: "tlannister@dragonstone.got", password: "tyrionlanniestercorgicorgi", profile_image_url: "https://i.imgur.com/sfcdAg8.jpg", bio: "nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae")
user5 = User.create(name: "Khal Drogo", email: "kdrogo@dragonstone.got", password: "khaldrogocorgicorgi", profile_image_url: "https://i.imgur.com/wKyodBS.jpg", bio: "eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus")
user6 = User.create(name: "Grey Worm", email: "gworm@dragonstone.got", password: "greywormcorgicorgi", profile_image_url: "https://i.imgur.com/P41c8tM.jpg", bio: "erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer")
user7 = User.create(name: "Jorah Mormont", email: "jmormont@dragonstone.got", password: "jmormontcorgicorgi", profile_image_url: "https://i.imgur.com/ejznV7Y.jpg", bio: "dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac")
drogon = User.create(name: "Drogon", email: "drogon@dragonstone.got", password: "drogoncorgicorgi", profile_image_url: "https://i.imgur.com/asafPVn.jpg", bio: "malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare")
ellaria_sand = User.create(name: "Ellaria Sand", email: "esand@dragonstone.got", password: "ellariasandcorgicorgi", profile_image_url: "https://i.imgur.com/NjdH3F4.jpg", bio: "purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque")

user8 = User.create(name: "Lord Baelish", email: "lfinger@winterfell.got", password: "lordbaelishcorgicorgi", profile_image_url: "https://i.imgur.com/UNrY92q.jpg", bio: "amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis")
user9 = User.create(name: "Melisandre", email: "melisandre@winterfell.got", password: "melisandrecorgicorgi", profile_image_url: "https://i.imgur.com/jO1PFgM.jpg", bio: "malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare")
user10 = User.create(name: "Sansa Stark", email: "sstark@winterfell.got", password: "sansastarkcorgicorgi", profile_image_url: "https://i.imgur.com/ogNploS.jpg", bio: "habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique")
user11 = User.create(name: "Arya Stark", email: "astark@winterfell.got", password: "aryastarkcorgicorgi", profile_image_url: "https://i.imgur.com/gr2c1u8.jpg", bio: "at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere")
user12 = User.create(name: "Ned Stark", email: "nstark@winterfell.got", password: "nedstarkcorgicorgi", profile_image_url: "https://i.imgur.com/MPUttaL.jpg", bio: "posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit")
user13 = User.create(name: "Catelyn Stark", email: "cstark@winterfell.got", password: "catelynstarkcorgicorgi", profile_image_url: "https://i.imgur.com/LX2Nk3C.jpg", bio: "purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque")
user14 = User.create(name: "Robb Stark", email: "rstark@winterfell.got", password: "robstarkcorgicorgi", profile_image_url: "https://i.imgur.com/GkqTAdI.jpg", bio: "malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac")
brienne = User.create(name: "Lady Brienne", email: "brienne@winterfell.got", password: "ladybriennecorgicorgi", profile_image_url: "https://i.imgur.com/3VpqlkY.jpg", bio: "lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum")

user15 = User.create(name: "Cersei Lannister", email: "cersei@kingslanding.got", password: "cerseilannistercorgicorgi", profile_image_url: "https://i.imgur.com/8fjPIqt.jpg", bio:"lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum")
user16 = User.create(name: "Jamie Lannister", email: "jlannister@kingslanding.got", password: "jamielannistercorgicorgi", profile_image_url: "https://i.imgur.com/LmtOiEN.jpg", bio:"aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed")
user17 = User.create(name: "Tywin Lannister", email: "tlannister@kingslanding.got", password: "tywinlannistercorgicorgi", profile_image_url: "https://i.imgur.com/cdmDgGO.jpg", bio:"sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor")
user18 = User.create(name: "Joffrey Baratheon", email: "jbaratheon@kingslanding.got", password: "joffreybaratheoncorgicorgi", profile_image_url: "https://i.imgur.com/GqhOAGb.jpg", bio:"ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et")
user19 = User.create(name: "Tommen Baratheon", email: "tbaratheon@kingslanding.got", password: "tommenbaratheoncorgicorgi", profile_image_url: "https://i.imgur.com/Nvu6bQS.jpg", bio:"sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et")
user20 = User.create(name: "Gregor Clegane", email: "gclegane@kingslanding.got", password: "gregorcleganecorgicorgi", profile_image_url: "https://i.imgur.com/VcvnWWJ.jpg", bio:"eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque")
user21 = User.create(name: "Euron Greyjoy", email: "egreyjoy@kingslanding.got", password: "eurongreyjoycorgicorgi", profile_image_url: "https://i.imgur.com/VPlSK6r.jpg", bio:"auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam")
qyburn = User.create(name: "Maester Qyburn", email: "qyburn@kingslanding.got", password: "maesterqyburncorgicorgi", profile_image_url: "https://i.imgur.com/191cQqG.jpg", bio: "posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit")
ramsay_bolton = User.create(name: "Ramsay Bolton", email: "rbolton@kingslanding.got", password: "ramsayboltoncorgicorgi", profile_image_url: "https://i.imgur.com/kwskzVe.jpg", bio: "eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus")

jeor_mormont = User.create(name: "Jeor Mormont", email: "jmormont@thewall.got", password: "ramsayboltoncorgicorgi", profile_image_url: "https://i.imgur.com/eG4JWMc.jpg", bio: "purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque")
sam_tarly = User.create(name: "Sam Tarly", email: "starly@thewall.got", password: "samtarlycorgicorgi", profile_image_url: "https://i.imgur.com/iJcz60e.jpg", bio: "habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique")
alliser_thorne = User.create(name: "Alliser Thorne", email: "athorne@thewall.got", password: "allisterthornecorgicorgi", profile_image_url: "https://i.imgur.com/6M2IRgx.jpg", bio: "sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor")
ygritte = User.create(name: "Ygritte", email: "ygritte@thewall.got", password: "ygrittecorgicorgi", profile_image_url: "https://i.imgur.com/4HmFSyj.jpg", bio: "at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere")
aemon = User.create(name: "Maester Aemon", email: "maemon@thewall.got", password: "maesteraemoncorgicorgi", profile_image_url: "https://i.imgur.com/cLxmxDJ.jpg", bio: "lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum")

team1 = Team.create(team_owner_id: user1.id, name: "House Targaryen", description: "Welcome to House Targaryen");
team2 = Team.create(team_owner_id: user8.id, name: "House Stark", description: "Welcome to House Stark")
team3 = Team.create(team_owner_id: user15.id, name: "House Lannister", description: "Welcome to House Lannister");
team4 = Team.create(team_owner_id: user1.id, name: "The Night's Watch", description: "Welcome to the Night's Watch");

team_membership1 = TeamMembership.create(member_id: user1.id, team_id: team1.id)
team_membership2 = TeamMembership.create(member_id: user2.id, team_id: team1.id)
team_membership3 = TeamMembership.create(member_id: user3.id, team_id: team1.id)
team_membership4 = TeamMembership.create(member_id: user4.id, team_id: team1.id)
team_membership5 = TeamMembership.create(member_id: user5.id, team_id: team1.id)
team_membership6 = TeamMembership.create(member_id: user6.id, team_id: team1.id)
team_membership7 = TeamMembership.create(member_id: user7.id, team_id: team1.id)
team_membership_8 = TeamMembership.create(member_id: ellaria_sand.id, team_id: team1.id)
team_membership_9 = TeamMembership.create(member_id: drogon.id, team_id: team1.id)


team_membership8 = TeamMembership.create(member_id: user8.id, team_id: team2.id)
team_membership9 = TeamMembership.create(member_id: user9.id, team_id: team2.id)
team_membership10 = TeamMembership.create(member_id: user10.id, team_id: team2.id)
team_membership11 = TeamMembership.create(member_id: user11.id, team_id: team2.id)
team_membership12 = TeamMembership.create(member_id: user12.id, team_id: team2.id)
team_membership13 = TeamMembership.create(member_id: user13.id, team_id: team2.id)
team_membership14 = TeamMembership.create(member_id: user14.id, team_id: team2.id)
team_membership_15 = TeamMembership.create(member_id: user1.id, team_id: team2.id)
team_membership_16 = TeamMembership.create(member_id: brienne.id, team_id: team2.id)

team_membership15 = TeamMembership.create(member_id: user15.id, team_id: team3.id)
team_membership16 = TeamMembership.create(member_id: user16.id, team_id: team3.id)
team_membership17 = TeamMembership.create(member_id: user17.id, team_id: team3.id)
team_membership18 = TeamMembership.create(member_id: user18.id, team_id: team3.id)
team_membership19 = TeamMembership.create(member_id: user19.id, team_id: team3.id)
team_membership20 = TeamMembership.create(member_id: user20.id, team_id: team3.id)
team_membership21 = TeamMembership.create(member_id: user21.id, team_id: team3.id)
team_membership_21 = TeamMembership.create(member_id: qyburn.id, team_id: team3.id)
team_membership_22 = TeamMembership.create(member_id: ramsay_bolton.id, team_id: team3.id)

team_membership23 = TeamMembership.create(member_id: aemon.id, team_id: team4.id)
team_membership24 = TeamMembership.create(member_id: ygritte.id, team_id: team4.id)
team_membership25 = TeamMembership.create(member_id: alliser_thorne.id, team_id: team4.id)
team_membership26 = TeamMembership.create(member_id: sam_tarly.id, team_id: team4.id)
team_membership27 = TeamMembership.create(member_id: jeor_mormont.id, team_id: team4.id)
team_membership28 = TeamMembership.create(member_id: user1.id, team_id: team4.id)

project1 = Project.create(project_owner_id: user13.id, name: "Wedding for Robb", description: "Tiger team for planning Robb's wedding. So proud!")
project2 = Project.create(project_owner_id: user20.id, name: "Jousting Tournament", description: "Planning committee for Jousting Tournament at King's Landing.")
project3 = Project.create(project_owner_id: user4.id, name: "Weekly Book Club", description: "Logistics and planning for Seven Kingdom's Weekly Book Club.")
project4 = Project.create(project_owner_id: brienne.id, name: "Bear Fur Market Analysis", description: "Ongoing market analysis of bear fur in the seven kingdoms.")
project5 = Project.create(project_owner_id: qyburn.id, name: "Pharmacological Study - Onion Juice", description: "Research into medical and weapons applications of onion juice.")
project6 = Project.create(project_owner_id: user1.id, name: "Birthday Party for Drogon", description: "Logistics and planning for Drogon's birthday party.")
project7 = Project.create(project_owner_id: alliser_thorne.id, name: "Walltop Gazebo and Hottub", description: "Project management of walltop gazebo and hottub construction.")

project_membership1 = ProjectMembership.create(member_id: user1.id, project_id: project1.id)
project_membership2 = ProjectMembership.create(member_id: user10.id, project_id: project1.id)
project_membership3 = ProjectMembership.create(member_id: user12.id, project_id: project1.id)
project_membership4 = ProjectMembership.create(member_id: user13.id, project_id: project1.id)

project_membership5 = ProjectMembership.create(member_id: user8.id, project_id: project2.id)
project_membership6 = ProjectMembership.create(member_id: user5.id, project_id: project2.id)
project_membership7 = ProjectMembership.create(member_id: user20.id, project_id: project2.id)
project_membership8 = ProjectMembership.create(member_id: user21.id, project_id: project2.id)
project_membership9 = ProjectMembership.create(member_id: user16.id, project_id: project2.id)

project_membership10 = ProjectMembership.create(member_id: user3.id, project_id: project3.id)
project_membership12 = ProjectMembership.create(member_id: user4.id, project_id: project3.id)
project_membership13 = ProjectMembership.create(member_id: user8.id, project_id: project3.id)
project_membership14 = ProjectMembership.create(member_id: user19.id, project_id: project3.id)

project_membership15 = ProjectMembership.create(member_id: brienne.id, project_id: project4.id)
project_membership16 = ProjectMembership.create(member_id: user1.id, project_id: project4.id)
project_membership17 = ProjectMembership.create(member_id: jeor_mormont.id, project_id: project4.id)
project_membership18 = ProjectMembership.create(member_id: user14.id, project_id: project4.id)

project_membership19 = ProjectMembership.create(member_id: qyburn.id, project_id: project5.id)
project_membership20 = ProjectMembership.create(member_id: aemon.id, project_id: project5.id)
project_membership21 = ProjectMembership.create(member_id: sam_tarly.id, project_id: project5.id)
project_membership22 = ProjectMembership.create(member_id: user4.id, project_id: project5.id)

project_membership23 = ProjectMembership.create(member_id: user1.id, project_id: project6.id)
project_membership24 = ProjectMembership.create(member_id: user2.id, project_id: project6.id)
project_membership25 = ProjectMembership.create(member_id: user10.id, project_id: project6.id)
project_membership26 = ProjectMembership.create(member_id: sam_tarly.id, project_id: project6.id)

project_membership27 = ProjectMembership.create(member_id: user1.id, project_id: project7.id)
project_membership28 = ProjectMembership.create(member_id: ygritte.id, project_id: project7.id)
project_membership29 = ProjectMembership.create(member_id: aemon.id, project_id: project7.id)
project_membership30 = ProjectMembership.create(member_id: jeor_mormont.id, project_id: project7.id)
project_membership31 = ProjectMembership.create(member_id: alliser_thorne.id, project_id: project7.id)
project_membership32 = ProjectMembership.create(member_id: sam_tarly.id, project_id: project7.id)
