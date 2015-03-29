document.addEventListener("DOMContentReady", init);
function init() {
    document.addEventListener("deviceready");
}
            // device APIs are available
var conts = [];
               
 // Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

            // device APIs are available
function onDeviceReady() {
                // find all contacts with 'Bob' in any name field
    var options = new ContactFindOptions();
    options.filter = "";
    options.multiple = true;
    var fields = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);
}

            // onSuccess: Get a snapshot of the current contacts

        function onSuccess(contacts) {
            document.getElementById("contact1").innerHTML = 
                "Name: " + contacts[0].name.formatted;
                //+ "<br>" + "Phone #: " + contacts[0].phoneNumbers[0].value;

            document.getElementById("contact2").innerHTML = 
                "Name: " + contacts[1].name.formatted;
            
            document.getElementById("contact3").innerHTML = 
                "Name: " + contacts[2].name.formatted;
            
            document.getElementById("contact4").innerHTML = 
                "Name: " + contacts[3].name.formatted;
            
            document.getElementById("contact5").innerHTML = 
                "Name: " + contacts[4].name.formatted;
            
            document.getElementById("contact6").innerHTML = 
                "Name: " + contacts[5].name.formatted;
            
            document.getElementById("contact7").innerHTML = 
                "Name: " + contacts[6].name.formatted;
            
            document.getElementById("contact8").innerHTML = 
                "Name: " + contacts[7].name.formatted;
            
            document.getElementById("contact9").innerHTML = 
                "Name: " + contacts[8].name.formatted;
            
            document.getElementById("contact10").innerHTML = 
                "Name: " + contacts[9].name.formatted;
            
            
            var newcontact0 = {id: (contacts[0].id), 
                               name:(contacts[0].name.formatted),
                               number:(contacts[0].phoneNumbers[0].value), 
                               lat:"45.424007",lng:"-75.698371"};
            
            conts.push(newcontact0);
            var newcontact1 = {id: (contacts[1].id), 
                               name:(contacts[1].name.formatted),
                               number:(contacts[1].phoneNumbers[0].value), 
                               lat:"",lng:""};
            
            conts.push(newcontact1);
            var newcontact2 = {id: (contacts[2].id), 
                               name:(contacts[2].name.formatted),
                               number:(contacts[2].phoneNumbers[0].value), 
                               lat:"45.431002",lng:"-75.717890"};
            
            conts.push(newcontact2);
            var newcontact3 = {id: (contacts[3].id), 
                               name:(contacts[3].name.formatted),
                               number:(contacts[3].phoneNumbers[0].value), 
                               lat:"45.414007",lng:"-75.688371"};
            
            conts.push(newcontact3);
            var newcontact4 = {id: (contacts[4].id), 
                               name:(contacts[4].name.formatted),
                               number:(contacts[4].phoneNumbers[0].value), 
                               lat:"45.404007",lng:"-75.608371"};
            
            conts.push(newcontact4);
            var newcontact5 = {id: (contacts[5].id), 
                               name:(contacts[5].name.formatted),
                               number:(contacts[5].phoneNumbers[0].value), 
                               lat:"45.304007",lng:"-75.808371"};
            
            conts.push(newcontact5);
            var newcontact6 = {id: (contacts[6].id), 
                               name:(contacts[6].name.formatted),
                               number:(contacts[6].phoneNumbers[0].value), 
                               lat:"45.364007",lng:"-75.758371"};
            
            conts.push(newcontact6);
            var newcontact7 = {id: (contacts[7].id), 
                               name:(contacts[7].name.formatted),
                               number:(contacts[7].phoneNumbers[0].value), 
                               lat:"45.394007",lng:"-75.758371"};
            
            conts.push(newcontact7);
            var newcontact8 = {id: (contacts[8].id), 
                               name:(contacts[8].name.formatted),
                               number:(contacts[8].phoneNumbers[0].value), 
                               lat:"45.364007",lng:"-75.608371"};
            
            conts.push(newcontact8);
            var newcontact9 = {id: (contacts[9].id), 
                               name:(contacts[9].name.formatted),
                               number:(contacts[9].phoneNumbers[0].value), 
                               lat:"45.294007",lng:"-75.758371"};
            
            conts.push(newcontact9);
            
            
            
            localStorage.setItem("masl0016c", JSON.stringify(conts));
            
            console.log(conts)
            
            console.log(conts[0].id)
            
            console.log(conts[9].id)
            
/////////////////////////////////////////////////////////////////
             
            document.getElementById("n1").innerHTML = contacts[0].name.formatted;
            document.getElementById("#1").innerHTML = 
                "Phone #: " + contacts[0].phoneNumbers[0].value;
            document.getElementById("loc1").innerHTML = "Lat: " + conts[0].lat + "<br>" + "Lng: " + conts[0].lng;
            
            document.getElementById("n2").innerHTML = contacts[1].name.formatted;
            document.getElementById("#2").innerHTML = 
                "Phone #: " + contacts[1].phoneNumbers[0].value;
            document.getElementById("loc2").innerHTML = "Lat: " + conts[0].lat + "<br>" + "Lng: " + conts[0].lng;
            
            document.getElementById("n3").innerHTML = contacts[2].name.formatted;
            document.getElementById("#3").innerHTML = 
                "Phone #: " + contacts[2].phoneNumbers[0].value;
            document.getElementById("loc3").innerHTML = "Lat: " + conts[0].lat + "<br>" + "Lng: " + conts[0].lng;
            
            document.getElementById("n4").innerHTML = contacts[3].name.formatted;
            document.getElementById("#4").innerHTML = 
                "Phone #: " + contacts[3].phoneNumbers[0].value;
            document.getElementById("loc4").innerHTML = "Lat: " + conts[0].lat + "<br>" + "Lng: " + conts[0].lng;
            
            document.getElementById("n5").innerHTML = contacts[4].name.formatted;
            document.getElementById("#5").innerHTML = 
                "Phone #: " + contacts[4].phoneNumbers[0].value;
            document.getElementById("loc5").innerHTML = "Lat: " + conts[0].lat + "<br>" + "Lng: " + conts[0].lng;
            
            document.getElementById("n6").innerHTML = contacts[5].name.formatted;
            document.getElementById("#6").innerHTML = 
                "Phone #: " + contacts[5].phoneNumbers[0].value;
            document.getElementById("loc6").innerHTML = "Lat: " + conts[0].lat + "<br>" + "Lng: " + conts[0].lng;
            
            document.getElementById("n7").innerHTML = contacts[6].name.formatted;
            document.getElementById("#7").innerHTML = 
                "Phone #: " + contacts[6].phoneNumbers[0].value;
            document.getElementById("loc7").innerHTML = "Lat: " + conts[0].lat + "<br>" + "Lng: " + conts[0].lng;
            
            document.getElementById("n8").innerHTML = contacts[7].name.formatted;
            document.getElementById("#8").innerHTML = 
                "Phone #: " + contacts[7].phoneNumbers[0].value;
            document.getElementById("loc8").innerHTML = "Lat: " + conts[0].lat + "<br>" + "Lng: " + conts[0].lng;
            
            document.getElementById("n9").innerHTML = contacts[8].name.formatted;
            document.getElementById("#9").innerHTML = 
                "Phone #: " + contacts[8].phoneNumbers[0].value;
            document.getElementById("loc9").innerHTML = "Lat: " + conts[0].lat + "<br>" + "Lng: " + conts[0].lng;
            
            document.getElementById("n10").innerHTML = contacts[9].name.formatted;
            document.getElementById("#10").innerHTML = 
                "Phone #: " + contacts[9].phoneNumbers[0].value;
            document.getElementById("loc10").innerHTML = "Lat: " + conts[0].lat + "<br>" + "Lng: " + conts[0].lng;
            

        }

            
            // onError: Failed to get the contacts

            function onError(contactError) {
                alert('onError!');
            }












///////////////////////////////////////////////////



/////////////////////MY HAMMER JS ATTEMPT//////////////////////////////////////

//var contfunc = document.getElementsByClassName('condiv');
//
//// We create a manager object, which is the same as Hammer(), but without the presetted recognizers. 
//var mc = new Hammer.Manager(contfunc);
//
//
//// Tap recognizer with minimal 2 taps
//mc.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) );
//// Single tap recognizer
//mc.add( new Hammer.Tap({ event: 'singletap' }) );
//
//
//// we want to recognize this simulatenous, so a quadrupletap will be detected even while a tap has been recognized.
//mc.get('doubletap').recognizeWith('singletap');
//// we only want to trigger a tap, when we don't have detected a doubletap
//mc.get('singletap').requireFailure('doubletap');
//
//
//mc.on("singletap doubletap", function(ev) {
//    contfunc.textContent += ev.type +" ";
//});
//    
//
//
//document.getElementsByClassName("condiv1").addEventListener("singletap", touchHandler, false);
//document.getElementsByClassName("condiv1").addEventListener("doubletap", touchHandler, false);
//
//
//function touchHandler(e) {
//  if (e.type == "singletap") {
//    
//  } 
//    else if (e.type == "doubletap") {
//    
//  } 
//  }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    




















