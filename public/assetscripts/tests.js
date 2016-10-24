///////////
// TESTS //
///////////

var leverStatus = false;

function changeLever(){
    if(leverStatus == false){
        room.objects["lever-handle"].xdir = Vector(-1, 0, -0);
        room.objects["lever-handle"].ydir = Vector(0,0.7,0.7);
        room.objects["lever-handle"].zdir = Vector(0,0.7,-0.7);
        leverStatus = true;
    } else {
        room.objects["lever-handle"].xdir = Vector(-1, 0, -0);
        room.objects["lever-handle"].ydir = Vector(0,1,-0);
        room.objects["lever-handle"].zdir = Vector(0,-0,-1);
        leverStatus = false;
    };
}



/////////////////
// ROOM LEVERS //
/////////////////

var leverOneStatus = false,
    leverTwoStatus = false,
    leverThreeStatus = false;

function changeLeverOne(){
    if(leverOneStatus == false){
        room.objects["lever1"].xdir = Vector(0, 0, -1);
        room.objects["lever1"].ydir = Vector(-0.5, 0.8, 0);
        room.objects["lever1"].zdir = Vector(0.8, 0.5, 0);
        leverOneStatus = true;
    } else {
        room.objects["lever1"].xdir = Vector(0, 0, -1);
        room.objects["lever1"].ydir = Vector(-0.5, -0.8, 0);
        room.objects["lever1"].zdir = Vector(-0.8, 0.5, 0);
        leverOneStatus = false;
    };
}

function changeLeverTwo(){
    if(leverTwoStatus == false){
        room.objects["lever2"].xdir = Vector(0, 0, -1);
        room.objects["lever2"].ydir = Vector(-0.5, 0.8, 0);
        room.objects["lever2"].zdir = Vector(0.8, 0.5, 0);
        leverTwoStatus = true;
    } else {
        room.objects["lever2"].xdir = Vector(0, 0, -1);
        room.objects["lever2"].ydir = Vector(-0.5, -0.8, 0);
        room.objects["lever2"].zdir = Vector(-0.8, 0.5, 0);
        leverTwoStatus = false;
    };
}

function changeLeverThree(){
    if(leverThreeStatus == false){
        room.objects["lever3"].xdir = Vector(0, 0, -1);
        room.objects["lever3"].ydir = Vector(-0.5, 0.8, 0);
        room.objects["lever3"].zdir = Vector(0.8, 0.5, 0);
        leverThreeStatus = true;
    } else {
        room.objects["lever3"].xdir = Vector(0, 0, -1);
        room.objects["lever3"].ydir = Vector(-0.5, -0.8, 0);
        room.objects["lever3"].zdir = Vector(-0.8, 0.5, 0);
        leverThreeStatus = false;
    };
}



///////////
// SIREN //
///////////

var sirenOn = false;

function changeSiren(){
    if(sirenOn == false){
        room.objects["sirenID"].image_id = "http://vrapt.xyz/static/textures/siren_on_tex.png";
        sirenOn = true;
    } else {
        room.objects["sirenID"].image_id = "http://vrapt.xyz/static/textures/siren_off_tex.png";
        sirenOn = false;
    };
}



///////////////////////////////////
// ROOM ASSET CREATION FUNCTIONS //
///////////////////////////////////

//config
var roomCount = 30,
    spacing = 3.817,
    floorInit = 5.441,
    owsInit = 7.34,
    rcuInit = 5.57,
    rcuwsInit = 7.708,
    standInit = 5.56,
    sirenInit = 7.34,
    msgwsInit = 7.059,
    vwsInit = 7.313,
    cwsInit = 7.3,
    doorInit = 5.7;

//create floor function
function createFloor(){
    room.createObject("Object", {id: "vrapt_floor_v04", pos: Vector(0, floorInit, 19), xdir: Vector(1, 0, 0), ydir: Vector(0, 1, 0), zdir: Vector(0, 0, 1), scale: Vector(1, 1, 1), collision_id: "vrapt_floor_v04"});
};

//create outer websurface function
function createOWS(){
    room.createObject("Object", {id: "plane", pos: Vector(0, owsInit, 12), xdir: Vector(-1, 0, 0), ydir: Vector(0, 1, 0), zdir: Vector(0, 0, -1), scale: Vector(13.86, 3.8, 4), collision_id: "plane", websurface_id: "floor1ws"});
};

//create room control unit function
function createRCU(){
    //rcu model
    room.createObject("Object", {id: "room_control", pos: Vector(6.3, rcuInit, 23.64), xdir: Vector(1, 0, 0), ydir: Vector(0, 1, 0), zdir: Vector(0, 0, 1), scale: Vector(1.4, 1.4, 1.4), collision_id: "room_control"});
    //lever 1
    
    //lever 2
    
    //lever 3
    
    //rcu websurface
    room.createObject("Object", {id: "plane", pos: Vector( 5.92, rcuwsInit, 23.636 ), xdir: Vector( 0, 0, 1 ), ydir: Vector( 0, 1, 0 ), zdir: Vector( -1, 0, 0 ), scale: Vector( 1.669, 1, 1 ), collision_id: "plane", websurface_id: "status"});
};

//create message stand function
function createMS(){
    //stand
    room.createObject("Object", {id: "stand", pos: Vector( 6.4, standInit, 21.77), xdir: Vector( 0, 0, 1 ), ydir: Vector( 0, 1, 0 ), zdir: Vector( -1, 0, 0 ), scale: Vector( 1, 1, 1 ), collision_id: "stand"});
    //siren
    room.createObject("Object", {id: "siren", pos: Vector( 6.4, sirenInit, 21.77), xdir: Vector( 0, 0, 1 ), ydir: Vector( 0, 1, 0 ), zdir: Vector( -1, 0, 0 ), scale: Vector( 1.5, 1.5, 1.5 ), collision_id: "siren", onclick: "changeSiren()"});
    //message websurface
    room.createObject("Object", {id: "plane", pos: Vector( 6.309, msgwsInit, 21.769 ), xdir: Vector( 0, 0, 1 ), ydir: Vector( 0, 1, 0 ), zdir: Vector( -1, 0, 0 ), scale: Vector( 0.57, 0.456, 1 ), collision_id: "plane", websurface_id: "messages"});
};

//create vrapt websurface function
function createVWS(){
    room.createObject("Object", {id: "plane", pos: Vector( -0.4, vwsInit, 12.34), xdir: Vector( 1, 0, 0 ), ydir: Vector( 0, 1, 0 ), zdir: Vector( 0, 0, 1 ), scale: Vector( 4.7, 3.4, 1 ), collision_id: "plane", websurface_id: "vrapt"});
};




//create custom websurface 1 function
function createCWS1(){
    room.createObject("Object", {id: "plane", pos: Vector( -6.7, cwsInit, 23.2 ), xdir: Vector( 0, 0, -1 ), ydir: Vector( 0, 1, 0 ), zdir: Vector( 1, 0, 0 ), scale: Vector( 4.9, 3.3, 1 ), collision_id: "plane", websurface_id: "windowOne"});
};

//create custom websurface 2 function
function createCWS2(){
    room.createObject("Object", {id: "plane", pos: Vector( -6.7, cwsInit, 14.82 ), xdir: Vector( 0, 0, -1 ), ydir: Vector( 0, 1, 0 ), zdir: Vector( 1, 0, 0 ), scale: Vector( 4.9, 3.3, 1 ), collision_id: "plane", websurface_id: "windowTwo"});
};

//create custom websurface 3 function
function createCWS3(){
    room.createObject("Object", {id: "plane", pos: Vector( 6.7, cwsInit, 14.82 ), xdir: Vector( 0, 0, 1 ), ydir: Vector( 0, 1, 0 ), zdir: Vector( -1, 0, 0 ), scale: Vector( 4.9, 3.3, 1 ), collision_id: "plane", websurface_id: "windowThree"});
};                   
                
                      
                      
                      
//create door 1 function
function createDoor1(){
    room.createObject("Link", {url: "http://www.google.com", pos: Vector( -4, doorInit, 12.2 ), xdir: Vector( 1, 0, 0 ), ydir: Vector( 0, 1, 0 ), zdir: Vector( 0, 0, 1 ), scale: Vector( 1.8, 2.5, 1 ), col: "gray"});
};

//create door 2 function
function createDoor2(){
    room.createObject("Link", {url: "http://www.yahoo.com", pos: Vector( 3.5, doorInit, 12.2 ), xdir: Vector( 1, 0, 0 ), ydir: Vector( 0, 1, 0 ), zdir: Vector( 0, 0, 1 ), scale: Vector( 1.8, 2.5, 1 ), col: "gray"});
};                    

                      
                      


//////////
// MISC //
//////////

room.onLoad = function(){
    //loop through floor count
    for(i=0;i<roomCount;i++){
        //create floor
        createFloor();
        //create outer websurface
        createOWS();
        //create room control unit
        createRCU();
        //create message stand
        createMS();
        //create vrapt websurface
        createVWS();
        //create custom websurface 1
        createCWS1();
        //create custom websurface 2
        createCWS2();
        //create custom websurface 3
        createCWS3();
        //create door 1
        createDoor1();
        //create door 2
        createDoor2();
        
        //increment asset spacing
        floorInit += spacing;
        owsInit += spacing;
        rcuInit += spacing;
        rcuwsInit += spacing;
        standInit += spacing;
        sirenInit += spacing;
        msgwsInit += spacing;
        vwsInit += spacing;
        cwsInit += spacing;
        doorInit += spacing;
    }
}
room.onClick  = function(){}
room.update  = function(){}
