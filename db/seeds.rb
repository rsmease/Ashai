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
Task.destroy_all

jon_snow = User.create(name: "Jon Snow", email: "jsnow@thewall.got", password: "jonsnowcorgicorgi", profile_image_url: "https://i.imgur.com/vqXRTKt.jpg", bio: "elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut")
dany_targaryen = User.create(name: "Danaerys Targaryen", email: "dtargaryen@dragonstone.got", password: "danaerystargaryencorgicorgi", profile_image_url: "https://i.imgur.com/EIW9JXm.jpg", bio: "ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget")
varys = User.create(name: "Lord Varys", email: "lvarys@dragonstone.got", password: "lordvaryscorgicorgi", profile_image_url: "https://i.imgur.com/fhWyUJA.jpg", bio: "sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin")
tyrion = User.create(name: "Tyrion Lannister", email: "tlannister@dragonstone.got", password: "tyrionlanniestercorgicorgi", profile_image_url: "https://i.imgur.com/sfcdAg8.jpg", bio: "nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae")
khal_drogo = User.create(name: "Khal Drogo", email: "kdrogo@dragonstone.got", password: "khaldrogocorgicorgi", profile_image_url: "https://i.imgur.com/wKyodBS.jpg", bio: "eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus")
grey_worm = User.create(name: "Grey Worm", email: "gworm@dragonstone.got", password: "greywormcorgicorgi", profile_image_url: "https://i.imgur.com/P41c8tM.jpg", bio: "erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer")
jorah_mormont = User.create(name: "Jorah Mormont", email: "jmormont@dragonstone.got", password: "jmormontcorgicorgi", profile_image_url: "https://i.imgur.com/ejznV7Y.jpg", bio: "dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac")
drogon = User.create(name: "Drogon", email: "drogon@dragonstone.got", password: "drogoncorgicorgi", profile_image_url: "https://i.imgur.com/asafPVn.jpg", bio: "malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare")
ellaria_sand = User.create(name: "Ellaria Sand", email: "esand@dragonstone.got", password: "ellariasandcorgicorgi", profile_image_url: "https://i.imgur.com/NjdH3F4.jpg", bio: "purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque")

jon_snow_task1 = Task.create(assigner_id: jon_snow.id, assignee_id: jon_snow.id, title: "Fight with Lannisters", completion_status: false);
jon_snow_task2 = Task.create(assigner_id: jon_snow.id, assignee_id: jon_snow.id, title: "Explore the woods", completion_status: false);
jon_snow_task3 = Task.create(assigner_id: jon_snow.id, assignee_id: jon_snow.id, title: "Submit pond permitting paperwork", completion_status: false);

dany_targaryen_task1 = Task.create(assigner_id: dany_targaryen.id, assignee_id: dany_targaryen.id, title: "Watch fewer Netflix documentaries", completion_status: false)
dany_targaryen_task2 = Task.create(assigner_id: dany_targaryen.id, assignee_id: dany_targaryen.id, title: "Remind Drogon to brush his teeth", completion_status: false)
dany_targaryen_task3 = Task.create(assigner_id: dany_targaryen.id, assignee_id: dany_targaryen.id, title: "Review architectural proposals for creation of new loft at Dragonstone", completion_status: false)

baelish = User.create(name: "Lord Baelish", email: "lfinger@winterfell.got", password: "lordbaelishcorgicorgi", profile_image_url: "https://i.imgur.com/UNrY92q.jpg", bio: "amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis")
melisandre = User.create(name: "Melisandre", email: "melisandre@winterfell.got", password: "melisandrecorgicorgi", profile_image_url: "https://i.imgur.com/jO1PFgM.jpg", bio: "malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare")
sansa = User.create(name: "Sansa Stark", email: "sstark@winterfell.got", password: "sansastarkcorgicorgi", profile_image_url: "https://i.imgur.com/ogNploS.jpg", bio: "habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique")
arya = User.create(name: "Arya Stark", email: "astark@winterfell.got", password: "aryastarkcorgicorgi", profile_image_url: "https://i.imgur.com/gr2c1u8.jpg", bio: "at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere")
ned_stark = User.create(name: "Ned Stark", email: "nstark@winterfell.got", password: "nedstarkcorgicorgi", profile_image_url: "https://i.imgur.com/MPUttaL.jpg", bio: "posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit")
catelyn = User.create(name: "Catelyn Stark", email: "cstark@winterfell.got", password: "catelynstarkcorgicorgi", profile_image_url: "https://i.imgur.com/LX2Nk3C.jpg", bio: "purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque")
robb = User.create(name: "Robb Stark", email: "rstark@winterfell.got", password: "robstarkcorgicorgi", profile_image_url: "https://i.imgur.com/GkqTAdI.jpg", bio: "malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac")
brienne = User.create(name: "Lady Brienne", email: "brienne@winterfell.got", password: "ladybriennecorgicorgi", profile_image_url: "https://i.imgur.com/3VpqlkY.jpg", bio: "lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum")

cersei = User.create(name: "Cersei Lannister", email: "cersei@kingslanding.got", password: "cerseilannistercorgicorgi", profile_image_url: "https://i.imgur.com/8fjPIqt.jpg", bio:"lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum")
jaime = User.create(name: "Jamie Lannister", email: "jlannister@kingslanding.got", password: "jamielannistercorgicorgi", profile_image_url: "https://i.imgur.com/LmtOiEN.jpg", bio:"aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed")
tywin = User.create(name: "Tywin Lannister", email: "tlannister@kingslanding.got", password: "tywinlannistercorgicorgi", profile_image_url: "https://i.imgur.com/cdmDgGO.jpg", bio:"sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor")
joffrey = User.create(name: "Joffrey Baratheon", email: "jbaratheon@kingslanding.got", password: "joffreybaratheoncorgicorgi", profile_image_url: "https://i.imgur.com/GqhOAGb.jpg", bio:"ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et")
tommen = User.create(name: "Tommen Baratheon", email: "tbaratheon@kingslanding.got", password: "tommenbaratheoncorgicorgi", profile_image_url: "https://i.imgur.com/Nvu6bQS.jpg", bio:"sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et")
the_mountain = User.create(name: "Gregor Clegane", email: "gclegane@kingslanding.got", password: "gregorcleganecorgicorgi", profile_image_url: "https://i.imgur.com/VcvnWWJ.jpg", bio:"eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque")
euron_greyjoy = User.create(name: "Euron Greyjoy", email: "egreyjoy@kingslanding.got", password: "eurongreyjoycorgicorgi", profile_image_url: "https://i.imgur.com/VPlSK6r.jpg", bio:"auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam")
qyburn = User.create(name: "Maester Qyburn", email: "qyburn@kingslanding.got", password: "maesterqyburncorgicorgi", profile_image_url: "https://i.imgur.com/191cQqG.jpg", bio: "posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit")
ramsay_bolton = User.create(name: "Ramsay Bolton", email: "rbolton@kingslanding.got", password: "ramsayboltoncorgicorgi", profile_image_url: "https://i.imgur.com/kwskzVe.jpg", bio: "eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus")

jeor_mormont = User.create(name: "Jeor Mormont", email: "jmormont@thewall.got", password: "ramsayboltoncorgicorgi", profile_image_url: "https://i.imgur.com/eG4JWMc.jpg", bio: "purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque")
sam_tarly = User.create(name: "Sam Tarly", email: "starly@thewall.got", password: "samtarlycorgicorgi", profile_image_url: "https://i.imgur.com/iJcz60e.jpg", bio: "habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique")
alliser_thorne = User.create(name: "Alliser Thorne", email: "athorne@thewall.got", password: "allisterthornecorgicorgi", profile_image_url: "https://i.imgur.com/6M2IRgx.jpg", bio: "sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor")
ygritte = User.create(name: "Ygritte", email: "ygritte@thewall.got", password: "ygrittecorgicorgi", profile_image_url: "https://i.imgur.com/4HmFSyj.jpg", bio: "at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere")
aemon = User.create(name: "Maester Aemon", email: "maemon@thewall.got", password: "maesteraemoncorgicorgi", profile_image_url: "https://i.imgur.com/cLxmxDJ.jpg", bio: "lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum")

house_targaryen = Team.create(team_owner_id: jon_snow.id, name: "House Targaryen", description: "Welcome to House Targaryen");
house_start = Team.create(team_owner_id: robb.id, name: "House Stark", description: "Welcome to House Stark")
house_lannister = Team.create(team_owner_id: cersei.id, name: "House Lannister", description: "Welcome to House Lannister");
nights_watch = Team.create(team_owner_id: jon_snow.id, name: "The Night's Watch", description: "Welcome to the Night's Watch");

team_membership1 = TeamMembership.create(member_id: jon_snow.id, team_id: house_targaryen.id)
team_membership2 = TeamMembership.create(member_id: dany_targaryen.id, team_id: house_targaryen.id)
team_membership3 = TeamMembership.create(member_id: varys.id, team_id: house_targaryen.id)
team_membership4 = TeamMembership.create(member_id: tyrion.id, team_id: house_targaryen.id)
team_membership5 = TeamMembership.create(member_id: khal_drogo.id, team_id: house_targaryen.id)
team_membership6 = TeamMembership.create(member_id: grey_worm.id, team_id: house_targaryen.id)
team_membership7 = TeamMembership.create(member_id: jorah_mormont.id, team_id: house_targaryen.id)
team_membership_8 = TeamMembership.create(member_id: ellaria_sand.id, team_id: house_targaryen.id)
team_membership_9 = TeamMembership.create(member_id: drogon.id, team_id: house_targaryen.id)

team_membership8 = TeamMembership.create(member_id: baelish.id, team_id: house_start.id)
team_membership9 = TeamMembership.create(member_id: melisandre.id, team_id: house_start.id)
team_membership10 = TeamMembership.create(member_id: sansa.id, team_id: house_start.id)
team_membership11 = TeamMembership.create(member_id: arya.id, team_id: house_start.id)
team_membership12 = TeamMembership.create(member_id: ned_stark.id, team_id: house_start.id)
team_membership13 = TeamMembership.create(member_id: catelyn.id, team_id: house_start.id)
team_membership14 = TeamMembership.create(member_id: robb.id, team_id: house_start.id)
team_membership_15 = TeamMembership.create(member_id: jon_snow.id, team_id: house_start.id)
team_membership_16 = TeamMembership.create(member_id: brienne.id, team_id: house_start.id)

team_membership15 = TeamMembership.create(member_id: cersei.id, team_id: house_lannister.id)
team_membership16 = TeamMembership.create(member_id: jaime.id, team_id: house_lannister.id)
team_membership17 = TeamMembership.create(member_id: tywin.id, team_id: house_lannister.id)
team_membership18 = TeamMembership.create(member_id: joffrey.id, team_id: house_lannister.id)
team_membership19 = TeamMembership.create(member_id: tommen.id, team_id: house_lannister.id)
team_membership20 = TeamMembership.create(member_id: the_mountain.id, team_id: house_lannister.id)
team_membership21 = TeamMembership.create(member_id: euron_greyjoy.id, team_id: house_lannister.id)
team_membership_21 = TeamMembership.create(member_id: qyburn.id, team_id: house_lannister.id)
team_membership_22 = TeamMembership.create(member_id: ramsay_bolton.id, team_id: house_lannister.id)

team_membership23 = TeamMembership.create(member_id: aemon.id, team_id: nights_watch.id)
team_membership24 = TeamMembership.create(member_id: ygritte.id, team_id: nights_watch.id)
team_membership25 = TeamMembership.create(member_id: alliser_thorne.id, team_id: nights_watch.id)
team_membership26 = TeamMembership.create(member_id: sam_tarly.id, team_id: nights_watch.id)
team_membership27 = TeamMembership.create(member_id: jeor_mormont.id, team_id: nights_watch.id)
team_membership28 = TeamMembership.create(member_id: jon_snow.id, team_id: nights_watch.id)

robb_wedding = Project.create(project_owner_id: catelyn.id, name: "Wedding for Robb", description: "Tiger team for planning Robb's wedding. So proud!")
jousting = Project.create(project_owner_id: the_mountain.id, name: "Jousting Tournament", description: "Planning committee for Jousting Tournament at King's Landing.")
book_club = Project.create(project_owner_id: tyrion.id, name: "Weekly Book Club", description: "Logistics and planning for Seven Kingdom's Weekly Book Club.")
bear_fur = Project.create(project_owner_id: brienne.id, name: "Bear Fur Market Analysis", description: "Ongoing market analysis of bear fur in the seven kingdoms.")
onion_juice = Project.create(project_owner_id: qyburn.id, name: "Pharmacological Study - Onion Juice", description: "Research into medical and weapons applications of onion juice.")
dragon_birthday = Project.create(project_owner_id: jon_snow.id, name: "Birthday Party for Drogon", description: "Logistics and planning for Drogon's birthday party.")
gazebo = Project.create(project_owner_id: alliser_thorne.id, name: "Walltop Gazebo and Hottub", description: "Project management of walltop gazebo and hottub construction.")

project_membership1 = ProjectMembership.create(member_id: jon_snow.id, project_id: robb_wedding.id)
project_membership2 = ProjectMembership.create(member_id: sansa.id, project_id: robb_wedding.id)
project_membership3 = ProjectMembership.create(member_id: ned_stark.id, project_id: robb_wedding.id)
project_membership4 = ProjectMembership.create(member_id: catelyn.id, project_id: robb_wedding.id)

wedding_task1 = Task.create(assigner_id: jon_snow.id, assignee_id: sansa.id, title: "Bake cakes", completion_status: false, project_id: robb_wedding.id);
wedding_task2 = Task.create(assigner_id: jon_snow.id, assignee_id: ned_stark.id, title: "Return from dead", completion_status: false, project_id: robb_wedding.id);
wedding_task3 = Task.create(assigner_id: jon_snow.id, assignee_id: catelyn.id, title: "Invite family", completion_status: false, project_id: robb_wedding.id);

project_membership5 = ProjectMembership.create(member_id: baelish.id, project_id: jousting.id)
project_membership6 = ProjectMembership.create(member_id: khal_drogo.id, project_id: jousting.id)
project_membership7 = ProjectMembership.create(member_id: the_mountain.id, project_id: jousting.id)
project_membership8 = ProjectMembership.create(member_id: euron_greyjoy.id, project_id: jousting.id)
project_membership9 = ProjectMembership.create(member_id: jaime.id, project_id: jousting.id)

jousting_task1 = Task.create(assigner_id: baelish.id, assignee_id: khal_drogo.id, title: "Introduce Queen to blood riders", completion_status: false, project_id: jousting.id);
jousting_task2 = Task.create(assigner_id: baelish.id, assignee_id: the_mountain.id, title: "Give pedicures to horses", completion_status: false, project_id: jousting.id);
jousting_task3 = Task.create(assigner_id: jaime.id, assignee_id: jaime.id, title: "Pay catering company", completion_status: false, project_id: jousting.id);

project_membership10 = ProjectMembership.create(member_id: varys.id, project_id: book_club.id)
project_membership12 = ProjectMembership.create(member_id: tyrion.id, project_id: book_club.id)
project_membership13 = ProjectMembership.create(member_id: baelish.id, project_id: book_club.id)
project_membership14 = ProjectMembership.create(member_id: tommen.id, project_id: book_club.id)

book_club_task1 = Task.create(assigner_id: varys.id, assignee_id: varys.id, title: "Choose next book", completion_status: false, project_id: book_club.id);
book_club_task2 = Task.create(assigner_id: varys.id, assignee_id: tommen.id, title: "Learn to read", completion_status: false, project_id: book_club.id);
book_club_task3 = Task.create(assigner_id: varys.id, assignee_id: tyrion.id, title: "Discover plot twist in unexpected chapter of inconspicuous book", completion_status: false, project_id: book_club.id);

project_membership15 = ProjectMembership.create(member_id: brienne.id, project_id: bear_fur.id)
project_membership16 = ProjectMembership.create(member_id: jon_snow.id, project_id: bear_fur.id)
project_membership17 = ProjectMembership.create(member_id: jeor_mormont.id, project_id: bear_fur.id)
project_membership18 = ProjectMembership.create(member_id: robb.id, project_id: bear_fur.id)

bear_fur_task1 = Task.create(assigner_id: brienne.id, assignee_id: jon_snow.id, title: "Submit report on market trends in Dorne", completion_status: false, project_id: bear_fur.id);
bear_fur_task2 = Task.create(assigner_id: brienne.id, assignee_id: jeor_mormont.id, title: "Meet with traders from the North", completion_status: false, project_id: bear_fur.id);

project_membership19 = ProjectMembership.create(member_id: qyburn.id, project_id: onion_juice.id)
project_membership20 = ProjectMembership.create(member_id: aemon.id, project_id: onion_juice.id)
project_membership21 = ProjectMembership.create(member_id: sam_tarly.id, project_id: onion_juice.id)
project_membership22 = ProjectMembership.create(member_id: tyrion.id, project_id: onion_juice.id)

onion_juice_task1 = Task.create(assigner_id: aemon.id, assignee_id: qyburn.id, title: "Sample yellow onion skins", completion_status: false, project_id: onion_juice.id);
onion_juice_task2 = Task.create(assigner_id: aemon.id, assignee_id: sam_tarly.id, title: "Publish last quarter's report in Vegetable Physiology Journal", completion_status: false, project_id: onion_juice.id);
onion_juice_task3 = Task.create(assigner_id: tyrion.id, assignee_id: qyburn.id, title: "Gargle mouthwash, your breath is terrible", completion_status: false, project_id: onion_juice.id);

project_membership23 = ProjectMembership.create(member_id: jon_snow.id, project_id: dragon_birthday.id)
project_membership24 = ProjectMembership.create(member_id: dany_targaryen.id, project_id: dragon_birthday.id)
project_membership25 = ProjectMembership.create(member_id: sansa.id, project_id: dragon_birthday.id)
project_membership26 = ProjectMembership.create(member_id: sam_tarly.id, project_id: dragon_birthday.id)

dragon_birthday_task1 = Task.create(assigner_id: jon_snow.id, assignee_id: sam_tarly.id, title: "Find out what kind of meat Drogon wants in his cake", completion_status: false, project_id: dragon_birthday.id);
dragon_birthday_task2 = Task.create(assigner_id: jon_snow.id, assignee_id: dany_targaryen.id, title: "Send invitations to other dragons", completion_status: false, project_id: dragon_birthday.id);
dragon_birthday_task3 = Task.create(assigner_id: dany_targaryen.id, assignee_id: sansa.id, title: "Remove flammable objects from convention center", completion_status: false, project_id: dragon_birthday.id);

project_membership27 = ProjectMembership.create(member_id: jon_snow.id, project_id: gazebo.id)
project_membership28 = ProjectMembership.create(member_id: ygritte.id, project_id: gazebo.id)
project_membership29 = ProjectMembership.create(member_id: aemon.id, project_id: gazebo.id)
project_membership30 = ProjectMembership.create(member_id: jeor_mormont.id, project_id: gazebo.id)
project_membership31 = ProjectMembership.create(member_id: alliser_thorne.id, project_id: gazebo.id)
project_membership32 = ProjectMembership.create(member_id: sam_tarly.id, project_id: gazebo.id)

wedding_task1 = Task.create(assigner_id: jon_snow.id, assignee_id: sansa.id, title: "Bake Cakes", completion_status: false, project_id: robb_wedding.id);
