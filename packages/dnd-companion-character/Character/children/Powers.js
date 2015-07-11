/*
 {
 type: 'Encounter',
 damageType: ['Acid', 'Cold', 'Fire', 'Lightning', 'Poison'],
 actionRequired: 'Minor',
 range: 'Close Blast 3',
 targets: 'All creatures in area',
 attachWith: ['str', 'con', 'dex'],
 attackAndDamage: {
 1: {
 attack: {
 modifier: 2,
 against: 'ac'
 },
 damage: {
 dice: '1d6',
 modifier: 'con'
 }
 },
 11: {
 attack: {
 modifier: 4,
 against: 'ac'
 },
 damage: {
 dice: '2d6',
 modifier: 'con'
 }
 },
 21: {
 attack: {
 modifier: 6,
 against: 'ac'
 },
 damage: {
 dice: '3d6',
 modifier: 'con'
 }
 }
 }
 }
 */
PowerEffectAttack = AmpersandModel.extend({
  props: {
    modifier: 2,
    against: 'ac'
  }
});
PowerEffectDamage = AmpersandModel.extend({
  props: {
    dice: '1d6',
    modifier: 'con'
  }
});
PowerEffect = AmpersandModel.extend({
  props: {
    effect: "string"
  },
  children: {
    attack: PowerEffectAttack,
    damage: PowerEffectDamage
  }
});

PowerEffectCollection = AmpersandCollection.extend({
  model: PowerEffect
});

Power = AmpersandModel.extend({
  props: {
    type: "string",
    damageType: "array",
    actionRequired: "string",
    range: "string",
    targets: "string",
    attackWith: "array"
  },
  derived: {},
  children: {
    effect: PowerEffect
  }
});

PowerCollection = AmpersandCollection.extend({});

Powers = AmpersandModel.extend({
  children: {
    "atWill": PowerCollection,
    "encounter": PowerCollection,
    "daily": PowerCollection,
    "utility": PowerCollection
  }
});