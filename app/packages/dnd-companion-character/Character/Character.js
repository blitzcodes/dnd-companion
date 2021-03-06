import AmpersandModel from 'ampersand-model';
import Initiative from './children/Initiative';
import Defenses from './children/Defences';
import Movement from './children/Movement';
import Senses from './children/Senses';
import AbilityStores from './children/AbilityScores';
import HitPoints from './children/HitPoints';
import Skills from './children/Skills';

import Leveling from './leveling';
import Options from './options';

let Character = AmpersandModel.extend({
  props: {
    "name": "string",
    "level": "number",
    "class": "string",
    "paragonPath": "string",
    "epicDestiny": "string",
    "totalXP": "number",
    "race": "string",
    "size": "string",
    "age": "number",
    "gender": "string",
    "height": "string",
    "weight": "string",
    "alignment": "string",
    "deity": "string",
    "adventuringCompany": "string",
    "actionPoints": "number",
    "raceFeatures": "array",
    "classFeatures": "array",
    "pathFeatures": "array",
    "destinyFeatures": "array",
    "languagesKnown": "array",
    "feats": "array",
    "baseAttacks": "array",
    "powers": "object",
    "magicItems": "array",
    "personalityTraits": "array",
    "mannerisms": "array",
    "appearance": "array",
    "characterBackground": "array",
    "companionsAndAllies": "array",
    "otherEquipment": "array",
    "rituals": "array",
    "sessionAndCampaignNotes": "array",
    "coinsAndOtherWealth": "array"
  },
  children: {
    "initiative": Initiative,
    "defenses": Defenses,
    "movement": Movement,
    "senses": Senses,
    "abilityStores": AbilityStores,
    "hitPoints": HitPoints,
    "skills": Skills
  },
  derived: {
    halfLevel: {
      deps: ['level'],
      fn: function () {
        return parseInt(this.level / 2);
      }
    },
    tenPlusHalfLevel: {
      deps: ['level'],
      fn: function () {
        return parseInt(this.level / 2) + 10;
      }
    }
  }
});

export default Character;
