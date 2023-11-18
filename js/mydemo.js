// Java Script

  function savefile(){
    // Get the data from each element on the form.
    //const BatteryType = document.getElementById("batterytype");
    const Cud = document.getElementById("cud");
    const Cars = document.getElementById("cars");
    const Make = document.getElementById("make");
    const Model = document.getElementById("model");
    const SampleSize = document.getElementById("samplesize");
    const Range = document.getElementById("range");
    const Seats = document.getElementById("seats");
   // console.log("BatteryType  "+BatteryType.value);
    console.log("Operation Type: "+Cud.value);
    console.log("Car Type: "+Cars.value);
    console.log("Make:  "+Make.value);
    console.log("Model:  "+Model.value);
    console.log("SampleSize:  "+SampleSize.value);
    console.log("Range:  "+Range.value);
    console.log("Seats: "+Seats.value);
    document.getElementById("myForm").reset();
    document.getElementById("myH").innerHTML = "Thank you for submitting the data!";

};