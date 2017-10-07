(function() {

  const tileQuery = '.MatchModeQuestionGridTile'
  const tiles = document.querySelectorAll(tileQuery)

  const tileTextDescMatch = /(?:adj\.)|(?:n\.)|(?:v\.)/g
  const tileTextExceptions = ["main factor affecting","the ability to laugh at things and see when something is funny","highly intelligent","be demanding","relationship which is not significant","remember something bad done to you","appear (about qualities)","honest in a way that might hurt","play a trick on","suppress all of your emotions","lose temper in a noisy and uncontrolled way","do not mind a joke being played on","make your friendship stronger","help or assist in an action or enterprise","do what one has promised","offend"]
  const tilesTextMap = {
    "adventurous": "adj. willing to take risks or to try out new methods, ideas, or experiences",
    "conscientious": "adj. wishing to do what is right",
    "hard-working": "adj. doing a job seriously and with a lot of effort",
    "reliable": "adj. trustworthy",
    "effect": "n. result",
    "plummet": "n. fall suddenly and steeply",
    "climb": "n. a rise or increase in value",
    "settle into": "v. adapt to",
    "draw on": "v. use last experiences",
    "ascertain": "v. find out definitely; determine",
    "key factor influencing": "main factor affecting",
    "artistic": "adj. creative, imaginative, capable of creative thinking",
    "chatty": "adj. fond of talking in an easy, informal way",
    "dynamic": "adj. full of energy or full of new and exciting ideas",
    "helpful": "adj. useful; willing to help",
    "sporty": "adj. fond of or good at sport",
    "supportive": "adj. providing encouragement or emotional help",
    "talkative": "adj. talking a lot",
    "wise": "adj. having or showing experience, knowledge, and good judgement",
    "respectful": "adj.feeling or showing deference and respect.",
    "respectable": "adj. regarded by society to be good, proper, or correct",
    "careful": "adj. giving serious attention to what you are doing",
    "ambitious": "adj. having or showing a strong desire and determination to succeed",
    "generous": "adj. willing to give and share",
    "loyal": "adj. faithful to one's country, a person, or an idea",
    "sense of humour": "the ability to laugh at things and see when something is funny",
    "sociable": "adj. interacting with others; friendly",
    "punctual": "adj. acting or arriving exactly at the time appointed; prompt.",
    "talented": "adj. having a natural ability to do something well",
    "emphasis": "n. special importance or significance",
    "lack": "n. the sate of not having enough of something",
    "need": "n. something essential for survival",
    "result": "n. outcome",
    "based on": "adj. founded on",
    "dip": "v. become lower or smaller, typically temporarily",
    "fluctuate": "v. vary",
    "erratic": "adj. not regular or consistent",
    "hit a low": "n. reach the lowest point",
    "hit a peak": "n. reach the highest point",
    "remain stable": "n. stabilize",
    "soar": "n. rise suddenly and rapidly",
    "decline": "n.a gradual fall",
    "increase": "n. a rise in the size, amount, or degree of something",
    "plunge": "n. a steep fall",
    "a razor-sharp mind": "highly intelligent",
    "set high standards (for)": "be demanding",
    "casual acquaintance": "relationship which is not significant",
    "bear a grudge": "remember something bad done to you",
    "give the impression of": "appear (about qualities)",
    "brutally honest": "honest in a way that might hurt",
    "play a joke on": "play a trick on",
    "swallow one's pride": "suppress all of your emotions",
    "throw a tantrum": "lose temper in a noisy and uncontrolled way",
    "take a joke": "do not mind a joke being played on",
    "cement a friendship": "make your friendship stronger",
    "give a hand": "help or assist in an action or enterprise",
    "keep one's word": "do what one has promised",
    "hurt one's feelings": "offend"
  }


  const utils = (function() {

    var isTileTerm = (text) => !text.match(tileTextDescMatch) && !tileTextExceptions.includes(text)

    var divideTiles = function(tiles) {
      let tilesTerm = [],
        tilesDesc = []

      tiles.forEach((tile) => isTileTerm(tile.textContent) ? tilesTerm.push(tile) : tilesDesc.push(tile))

      return [tilesTerm, tilesDesc]
    }

    var clickElems = function(...elems) {
      elems.forEach((elem) => elem.dispatchEvent(new Event('pointerdown')))
    }

    return {
      divideTiles,
      clickElems
    }
  })()

  const [tilesTerm, tilesDesc] = utils.divideTiles(tiles)

  tilesTerm.forEach((tileTerm) => {
    let desc = tilesTextMap[tileTerm.textContent]

    for (let tileDesc of tilesDesc) {
      let currentDesc = tileDesc.textContent
      if (currentDesc === desc) {
        utils.clickElems(tileTerm, tileDesc)
        break
      }
    }
  })

})()
