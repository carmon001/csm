controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    moving_left = true
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    moving_left = false
})
let projectile2: Sprite = null
let moving_left = false
moving_left = false
game.onUpdateInterval(500, function () {
    if (moving_left) {
        projectile2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 1 1 1 1 . . . . . . . 
. . . . . 1 1 f f f f f f f f f f f f 1 1 1 f f 1 . . . . . . . 
. . . . . 1 f 8 8 8 8 8 8 8 8 8 8 8 8 f f f 8 f 1 . . . . . . . 
. . . . . 1 1 f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 1 . . . . . . . 
. . . . . . 1 1 f 8 8 8 f 4 8 8 8 8 8 8 8 8 8 f 1 . . . . . . . 
. . . . . . . 1 1 f 8 8 f 4 4 8 8 8 8 8 8 8 8 f 1 1 . . . . . . 
. . . . . . . . 1 1 f 8 f 4 8 8 8 8 8 8 8 8 8 8 f 1 . . . . . . 
. . . . . . . 1 1 f 8 8 8 8 8 8 8 1 1 1 8 8 8 8 f 1 . . . . . . 
. . . . . . 1 1 f 8 8 8 8 8 8 8 1 1 1 1 1 8 8 8 f 1 . . . . . . 
. . . . . 1 1 f 8 8 8 8 8 8 8 8 1 1 1 1 f 8 1 f 1 1 . . . . . . 
. . . . . 1 f f f f f f 8 8 8 8 1 1 1 1 f 8 1 f 1 1 . . . . . . 
. . . . . 1 1 1 1 1 f 8 8 8 8 8 8 1 1 1 f 1 f f f 1 . . . . . . 
. . . . . . . 1 1 f 8 8 8 8 8 4 4 1 1 1 4 4 4 f 1 1 . . . . . . 
. . . . . . 1 1 f 8 8 8 8 8 8 4 4 4 4 4 4 4 4 f 1 . . . . . . . 
. . . . . . 1 f f f f f f f f f 4 4 4 4 4 4 f f 1 . . . . . . . 
. . . . . . 1 1 1 1 1 1 1 1 f 4 f f f f . f f f 1 1 . . . . . . 
. . . . . . . . . . . 1 1 f 4 f f 8 4 4 4 f f f f 1 . . . . . . 
. . . . . . . . . . . 1 f 4 f 1 1 f 4 4 4 f 1 1 f 1 . . . . . . 
. . . . . . . . . . . 1 f f 1 1 1 1 f 4 4 f 1 1 f 1 . . . . . . 
. . . . . . . . . . . 1 1 f 1 1 1 1 f f 4 f 1 f 1 1 . . . . . . 
. . . . . . . . . . . . 1 1 f 1 1 f f 8 f f f f 1 . . . . . . . 
. . . . . . . . . . . . . 1 1 f f 8 f f f 1 1 1 1 . . . . . . . 
. . . . . . . . . . . . . 1 1 f f 8 f 2 2 f f 1 1 1 . . . . . . 
. . . . . . . . . . . . . 1 f f 2 2 f f 2 2 1 f f 1 . . . . . . 
. . . . . . . . . . . . . 1 f 2 2 2 1 2 f f 2 2 2 f . 1 . . . . 
. . . . . . . . . . . . . 1 f 2 2 1 2 2 2 2 f 2 2 2 f 1 . . . . 
. . . . . . . . . . . . . 1 f f f f f f f f f f f f f 1 . . . . 
. . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, Math.randomRange(0, 100), 100)
    } else {
        projectile2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 1 1 1 1 . . . . . . . 
. . . . . 1 1 f f f f f f f f f f f f 1 1 1 f f 1 . . . . . . . 
. . . . . 1 f 8 8 8 8 8 8 8 8 8 8 8 8 f f f 8 f 1 . . . . . . . 
. . . . . 1 1 f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 1 . . . . . . . 
. . . . . . 1 1 f 8 8 8 f 4 8 8 8 8 8 8 8 8 8 f 1 . . . . . . . 
. . . . . . . 1 1 f 8 8 f 4 4 8 8 8 8 8 8 8 8 f 1 1 . . . . . . 
. . . . . . . . 1 1 f 8 f 4 8 8 8 8 8 8 8 8 8 8 f 1 . . . . . . 
. . . . . . . 1 1 f 8 8 8 8 8 8 8 1 1 1 8 8 8 8 f 1 . . . . . . 
. . . . . . 1 1 f 8 8 8 8 8 8 8 1 1 1 1 1 8 8 8 f 1 . . . . . . 
. . . . . 1 1 f 8 8 8 8 8 8 8 8 1 1 1 1 f 8 1 f 1 1 . . . . . . 
. . . . . 1 f f f f f f 8 8 8 8 1 1 1 1 f 8 1 f 1 1 . . . . . . 
. . . . . 1 1 1 1 1 f 8 8 8 8 8 8 1 1 1 f 1 f f f 1 . . . . . . 
. . . . . . . 1 1 f 8 8 8 8 8 4 4 1 1 1 4 4 4 f 1 1 . . . . . . 
. . . . . . 1 1 f 8 8 8 8 8 8 4 4 4 4 4 4 4 4 f 1 . . . . . . . 
. . . . . . 1 f f f f f f f f f 4 4 4 4 4 4 f f 1 . . . . . . . 
. . . . . . 1 1 1 1 1 1 1 1 f 4 f f f f . f f f 1 1 . . . . . . 
. . . . . . . . . . . 1 1 f 4 f f 8 4 4 4 f f f f 1 . . . . . . 
. . . . . . . . . . . 1 f 4 f 1 1 f 4 4 4 f 1 1 f 1 . . . . . . 
. . . . . . . . . . . 1 f f 1 1 1 1 f 4 4 f 1 1 f 1 . . . . . . 
. . . . . . . . . . . 1 1 f 1 1 1 1 f f 4 f 1 f 1 1 . . . . . . 
. . . . . . . . . . . . 1 1 f 1 1 f f 8 f f f f 1 . . . . . . . 
. . . . . . . . . . . . . 1 1 f f 8 f f f 1 1 1 1 . . . . . . . 
. . . . . . . . . . . . . 1 1 f f 8 f 2 2 f f 1 1 1 . . . . . . 
. . . . . . . . . . . . . 1 f f 2 2 f f 2 2 1 f f 1 . . . . . . 
. . . . . . . . . . . . . 1 f 2 2 2 1 2 f f 2 2 2 f . 1 . . . . 
. . . . . . . . . . . . . 1 f 2 2 1 2 2 2 2 f 2 2 2 f 1 . . . . 
. . . . . . . . . . . . . 1 f f f f f f f f f f f f f 1 . . . . 
. . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, Math.randomRange(0, -100), 100)
    }
})
