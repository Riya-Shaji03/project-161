AFRAME.registerComponent("ball",{
    init: function(){
        this.throwBall()
    },

    throwBall: function () {
        window.addEventListener("keydown", (e) => {
            if (e.key === "q") {
                var bowlingBall = document.createElement("a-entity")
                
                bowlingBall.setAttribute("geometry", {
                    primitive: "sphere",
                    radius: 0.4
                })

                bowlingBall.setAttribute("material", "color", "black")

                var cam = document.querySelector("#camera")

                position = cam.getAttribute("position")

                bowlingBall.setAttribute("position", {
                    x : position.x,
                    y : position.y,
                    z : position.z
                })

                var camera = document.querySelector("#camera").object3D

                var direction = new THREE.Vector3()
                camera.getWorldDirection(direction)

                bowlingBall.setAttribute("velocity", direction.multiplyScalar(-10))

                var scene = document.querySelector("#scene")
                scene.appendChild(bowlingBall)
            }
        })
    }
})