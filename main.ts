enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    nextcard3 = myShoe.nextCard
    mysprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mysprite4.setImage(myShoe.getCardImage(nextcard3, CardSpriteSize.ThirtyTwoByThirtyTwo))
    mysprite4.sayText(nextcard3.name)
    pause(2000)
    total = nextCard.faceValue + (nextcard2.faceValue + nextcard3.faceValue)
    info.setScore(total)
    if (total > 21) {
        game.over(false)
    } else if (total == 21) {
        game.over(true)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    nextCard = myShoe.nextCard
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite2.setImage(myShoe.getCardImage(nextCard, CardSpriteSize.ThirtyTwoByThirtyTwo))
    mySprite2.sayText(nextCard.name)
    pause(2000)
    mySprite2.sayText("Hit or Stand? ")
    total = nextCard.faceValue
    info.setScore(total)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 3; index++) {
        nextcard4 = myShoe.nextCard
        mysprite5 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        mysprite5.setImage(myShoe.getCardImage(nextcard4, CardSpriteSize.ThirtyTwoByThirtyTwo))
        mysprite5.sayText("Dealers hand")
        pause(2000)
        mysprite5.sayText(nextcard4.name)
    }
    dealertotal = nextcard4.faceValue
    if (dealertotal < total) {
        game.over(true, effects.confetti)
    } else if (dealertotal > total) {
        game.over(false, effects.dissolve)
    } else if (dealertotal == total) {
        game.splash("Draw! Press B to restart")
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    nextcard2 = myShoe.nextCard
    mysprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mysprite3.setImage(myShoe.getCardImage(nextcard2, CardSpriteSize.ThirtyTwoByThirtyTwo))
    mysprite3.sayText(nextcard2.name)
    pause(2000)
    mysprite3.sayText("Hit or Stand? ")
    pause(5000)
})
let mysprite3: Sprite = null
let dealertotal = 0
let mysprite5: Sprite = null
let nextcard4: Card = null
let mySprite2: Sprite = null
let nextcard2: Card = null
let nextCard: Card = null
let total = 0
let mysprite4: Sprite = null
let nextcard3: Card = null
let myShoe: Shoe = null
info.setScore(0)
myShoe = playingCards.createPokerDeck()
myShoe.shuffle()
let mySprite = sprites.create(img`
    ..............ccccccccc........
    ............cc555555555cc......
    ...........c5555555555555c.....
    ..........c55555555555555dc....
    .........c555555555555b5bdc....
    .........555bc1555555555bdcccc.
    ........c555ccc55555555bbdccddc
    ........c555bcb5555555ccddcdddc
    .......c555555555551ccccddbdddc
    .......c555555b555c1cccbddbbdbc
    .......c5555555bbc33333ddddbcc.
    .......c555555555bc333555ddbc..
    .......c5555555555555555555c...
    .......cd555555555555cccc555c..
    .......cd55555555555c555c555c..
    .......cdd555555555b5555b555c..
    .......cddd55555ddbb555bb555c..
    .......cdddd55555555555b5555c..
    .......cddddd5555555ddb5555dc..
    c......cdddddd555555555555dcc..
    cc...ccddddddd555555555555dc...
    cdccccdddddd555555d55555ddcc...
    cdddddddddbd5555555ddddddccccc.
    ccdddddddbb55555555bddddccbddc.
    .ccddddddbd55555555bdddccdddc..
    ..cccddddbd5555555cddcccddbc...
    ....ccccccd555555bcccc.cccc....
    .........cc555555bc............
    .........cc55555555c...........
    ..........cccccccccc...........
    `, SpriteKindLegacy.Player)
mySprite.say("Welcome to Blackjack!")
pause(2000)
effects.clearParticles(mySprite)
mySprite.say("Press A to start")
effects.clearParticles(mySprite)
pause(1000)
mySprite.destroy()
