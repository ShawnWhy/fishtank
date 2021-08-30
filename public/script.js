

window.addEventListener("DOMContentLoaded",function(){
    var canvas= document.getElementById("canvas")
    var engine = new BABYLON.Engine(canvas,true);

    var createScene = function(){
        var scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color3(0,1,1);
        // var camera = new BABYLON.FreeCamera("camera1", 
        // new BABYLON.Vector3(6,10,-20),scene);
        // camera.setTarget(BABYLON.Vector3.Zero());
        // camera.attachControl(canvas,true);
        // camera.keysUp.push(87);
        // camera.keysDown.push(83);
        // camera.keysLeft.push(65);
        // camera.keysRight.push(68);
        var camera = new BABYLON.UniversalCamera("UniversalCamera",
        
        BABYLON.Vector3(0,0,0),scene);
        camera.position = new BABYLON.Vector3(0, 10, 40);
        // camera.rotation.x -= Math.PI/5;
        camera.rotation.y += Math.PI;
        // camera.rotation.y -= Math.PI/5;

 
        camera.attachControl(canvas,true);

        engine.enableOfflineSupport = false;
        BABYLON.SceneLoader.ImportMesh("","","LORDROBOT.gltf",scene,
        
        function(newMeshes){
            
            $(".loading").addClass("invisibleP")
            // scene.stopAllAnimations()
            scene.animationGroups.forEach(animation=>{
                animation.pause()})
            
            

            $('.box').mousemove(event=>{
                // event.stopPropagation();
                // event.preventDefault();
                 scene.animationGroups.forEach(animation=>{
                                animation.play(true)})
                              
            })
            $('.box').mousemove(event=>{
                clearTimeout(stopanimation);
                var stopanimation = setTimeout(
                    function(){
                        scene.animationGroups.forEach(animation=>{
                            animation.pause()})
                    }, 500);

            })

            $('.box').mouseleave(event=>{
                scene.animationGroups.forEach(animation=>{
                                animation.pause()})


            })

       
         



        //  foodText.actionManager = new BABYLON.ActionManager(scene);
        //  foodText.actionManager.registerAction(
        //      new BABYLON.ExecuteCodeAction(
        //          {
        //          trigger: BABYLON.ActionManager.OnPickTrigger,
        //          parameter:""
        //          },
        //          function(){
        //                   scene.animationGroups.forEach(animation=>{
        //              animation.play(false);
        //          })
                   
                     
        //          }

        //      ))

        })
        var light = new BABYLON.PointLight("pointLight",new BABYLON.Vector3(0,50,60),scene);

        // light.parent = camera2;
        light.intensity=5000;
        light.range=100;

        var light2 = new BABYLON.PointLight("pointLight2",new BABYLON.Vector3(-50,0,-50),scene);

        // light.parent = camera2;
        light2.intensity=500;
        light2.range=100;    
        light2.diffuse = new BABYLON.Color3(.2, .3, 1);
	    light2.specular = new BABYLON.Color3(.2, .3, 1);





       return scene;
    }

 var scene= createScene();
 engine.runRenderLoop(function(){     
     scene.render();

 });

})

function changecolor(event){
    $(event.target).html("");
    let colorsquare = $("<div>");
    colorsquare.addClass("colorsquare")
    let red = Math.random()*225;
    let green = Math.random()*225;
    let blue = Math.random()*225;
    let color = "rgb("+red+","+green+","+ blue+")"
    colorsquare.css("background-color", color);
    $(event.target).append(colorsquare)

}
function changecolor2(event){
    // $(event.target).parent().html("");
    let colorsquare = $("<div>");
    colorsquare.addClass("colorsquare")
    let red = Math.random()*225;
    let green = Math.random()*225;
    let blue = Math.random()*225;
    let color = "rgb("+red+","+green+","+ blue+")"
    colorsquare.css("background-color", color);
    $(event.target).parent().append(colorsquare)

}


$(".square").mouseover(event=>{
    event.stopPropagation();
    event.preventDefault();
    changecolor(event);

})

$(".colorsquare").mouseover(event=>{
    event.stopPropagation();
    event.preventDefault();
    changecolor2(event);

})

function tilt(event){
    maxdegree= 45;
    var coord = $(".boxcontainer").offset()
    var topmin = coord.top;
    var leftmin = coord.left;
    var mousetop = event.clientY;
    var mouseleft = event.clientX;
    var positionOnDivX = mouseleft-leftmin;
    var positionOnDivY = mousetop - topmin;
    var positionXPercent = positionOnDivX/300;
    var positionYPercent = positionOnDivY/300;
    console.log(positionXPercent)
    console.log(positionYPercent)
    // $(".box").css("transform","rotate3d(-"+positionXPercent+","+positionYPercent+",0,35deg)")
    $(".box").css("transform","rotateX("+(positionYPercent*15-30)+"deg)rotateY("+(positionXPercent*25)+"deg)")



    // console.log(mousetop)
}

$(".boxcontainer").mousemove(event=>{
    event.preventDefault();
    event.stopPropagation();
    tilt(event);
    
})

$('.square').click(event=>{
    
    $(event.target).html("")
    $(event.target).closest(".square").html("")
  
})

// $(".boxcontainer").mouseout(event=>{
//     event.preventDefault();
//     event.stopPropagation();
//     $(".box").css("transform","translateZ(200px)rotate3d(-1,0, 0,10deg)")

    
    
// })
