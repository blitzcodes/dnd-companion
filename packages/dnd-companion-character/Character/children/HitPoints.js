/*
 "hitPoints": {
 "maxHP": 32,
 "bloodied": 16,
 "surgeValue": 8,
 "surgesPerDay": 10,
 "secondWindUsed": false,
 "savingThroughMods": [],
 "resistances": [],
 "currentConditionsAndEffects": []
 },
 */
HitPoints = AmpersandModel.extend({
  props: {
    "maxHP": "number",
    "bloodied": "number",
    "surgeValue": "number",
    "surgesPerDay": "number",
    "secondWindUsed": {"type": "boolean", "default": false},
    "savingThroughMods": "array",
    "resistances": "array",
    "currentConditionsAndEffects": "array"
  },
  derived: {}
});