import { LevelData } from '../types';
import veniceImg from '../assets/images/venice_canal_market_1789483195834.jpg';
import mysticImg from '../assets/images/mystic_river_haven_1789483212609.jpg';
import woodlandImg from '../assets/images/woodland_workshop_1789483226144.jpg';

export const LEVELS: LevelData[] = [
  // LEVEL 1: Venice Canal Market (Screenshot 1)
  {
    id: 'venice',
    name: 'Venice Canal Market',
    titlePrefix: 'Explore the',
    titleHighlight: 'Map!',
    subtitle: 'Find all the hidden market treasures along the canal',
    themeColor: '#38bdf8',
    backgroundImage: veniceImg,
    totalItems: 30,
    categories: [
      {
        id: 'orange_bowl',
        name: 'Orange Bowls',
        description: 'Carved wooden bowls brimming with sun-ripened oranges',
        iconId: 'orange_bowl',
        totalCount: 5,
      },
      {
        id: 'venetian_mask',
        name: 'Carnival Masks',
        description: 'Ornate gold and turquoise Venetian masquerade masks',
        iconId: 'venetian_mask',
        totalCount: 7,
      },
      {
        id: 'blue_jug',
        name: 'Ceramic Jugs',
        description: 'Glazed Mediterranean porcelain pitchers with folk art',
        iconId: 'blue_jug',
        totalCount: 8,
      },
      {
        id: 'bead_bracelet',
        name: 'Bead Bracelets',
        description: 'Handcrafted glass bead jewelry with polished gemstones',
        iconId: 'bead_bracelet',
        totalCount: 5,
      },
      {
        id: 'rolled_rug',
        name: 'Persian Rugs',
        description: 'Finely woven silk carpets rolled with fringe tassels',
        iconId: 'rolled_rug',
        totalCount: 5,
      },
    ],
    items: [
      // Bowls of Oranges (5)
      { id: 'v_orange_1', categoryId: 'orange_bowl', x: 38.5, y: 33.2, scale: 1.05, label: 'Market Stall' },
      { id: 'v_orange_2', categoryId: 'orange_bowl', x: 39.2, y: 58.0, scale: 1.0, label: 'Main Walkway' },
      { id: 'v_orange_3', categoryId: 'orange_bowl', x: 90.8, y: 49.5, scale: 1.05, label: 'Fountain Table' },
      { id: 'v_orange_4', categoryId: 'orange_bowl', x: 20.5, y: 26.5, scale: 0.9, label: 'Fruit Stand' },
      { id: 'v_orange_5', categoryId: 'orange_bowl', x: 67.4, y: 44.2, scale: 0.95, label: 'Fountain Rim' },

      // Venetian Masks (7)
      { id: 'v_mask_1', categoryId: 'venetian_mask', x: 26.8, y: 65.4, scale: 1.1, rotation: -10, label: 'Canal Steps' },
      { id: 'v_mask_2', categoryId: 'venetian_mask', x: 84.2, y: 78.5, scale: 1.0, rotation: 8, label: 'Craft Table' },
      { id: 'v_mask_3', categoryId: 'venetian_mask', x: 14.6, y: 44.0, scale: 0.95, label: 'Merchant Crate' },
      { id: 'v_mask_4', categoryId: 'venetian_mask', x: 57.5, y: 23.8, scale: 0.9, label: 'Upper Balcony' },
      { id: 'v_mask_5', categoryId: 'venetian_mask', x: 74.0, y: 63.2, scale: 1.0, rotation: -5, label: 'Flower Pot' },
      { id: 'v_mask_6', categoryId: 'venetian_mask', x: 8.5, y: 29.8, scale: 0.9, label: 'Canopy Post' },
      { id: 'v_mask_7', categoryId: 'venetian_mask', x: 48.2, y: 73.0, scale: 1.05, rotation: 12, label: 'Mooring Pier' },

      // Blue Ceramic Jugs (8)
      { id: 'v_jug_1', categoryId: 'blue_jug', x: 47.8, y: 40.2, scale: 1.0, label: 'Fountain Terrace' },
      { id: 'v_jug_2', categoryId: 'blue_jug', x: 56.4, y: 66.8, scale: 1.05, label: 'Canal Edge' },
      { id: 'v_jug_3', categoryId: 'blue_jug', x: 86.2, y: 61.2, scale: 0.95, label: 'Pottery Stand' },
      { id: 'v_jug_4', categoryId: 'blue_jug', x: 12.0, y: 36.5, scale: 0.9, label: 'Olive Oil Shelf' },
      { id: 'v_jug_5', categoryId: 'blue_jug', x: 78.5, y: 31.0, scale: 0.85, label: 'Upper Tier' },
      { id: 'v_jug_6', categoryId: 'blue_jug', x: 23.6, y: 52.5, scale: 1.0, label: 'Stacked Barrels' },
      { id: 'v_jug_7', categoryId: 'blue_jug', x: 92.5, y: 70.4, scale: 0.95, label: 'Bazaar Table' },
      { id: 'v_jug_8', categoryId: 'blue_jug', x: 62.1, y: 48.5, scale: 0.9, label: 'Cobblestone Shelf' },

      // Bead Bracelets (5)
      { id: 'v_bead_1', categoryId: 'bead_bracelet', x: 89.2, y: 42.6, scale: 1.0, label: 'Jewelry Box' },
      { id: 'v_bead_2', categoryId: 'bead_bracelet', x: 25.5, y: 52.0, scale: 1.0, label: 'Cloth Crate' },
      { id: 'v_bead_3', categoryId: 'bead_bracelet', x: 66.8, y: 69.5, scale: 0.95, label: 'Stone Bench' },
      { id: 'v_bead_4', categoryId: 'bead_bracelet', x: 44.5, y: 22.0, scale: 0.85, label: 'Spice Shelf' },
      { id: 'v_bead_5', categoryId: 'bead_bracelet', x: 78.0, y: 84.0, scale: 1.0, label: 'Pavement Table' },

      // Rolled Persian Rugs (5)
      { id: 'v_rug_1', categoryId: 'rolled_rug', x: 45.2, y: 53.5, scale: 1.1, rotation: 25, label: 'Walkway Carpet' },
      { id: 'v_rug_2', categoryId: 'rolled_rug', x: 50.8, y: 61.2, scale: 1.0, rotation: -15, label: 'Red Runner' },
      { id: 'v_rug_3', categoryId: 'rolled_rug', x: 5.5, y: 55.4, scale: 1.0, rotation: 40, label: 'Canal Railing' },
      { id: 'v_rug_4', categoryId: 'rolled_rug', x: 60.5, y: 22.8, scale: 0.9, rotation: -30, label: 'Loom Storage' },
      { id: 'v_rug_5', categoryId: 'rolled_rug', x: 88.0, y: 25.5, scale: 0.85, rotation: 15, label: 'Upper Crate' },
    ],
  },

  // LEVEL 2: Mystic River Haven (Screenshot 2)
  {
    id: 'mystic_river',
    name: 'Mystic River Haven',
    titlePrefix: 'No Time,',
    titleHighlight: 'No Rush!',
    subtitle: 'Relax and discover magical relics by the twilight river',
    themeColor: '#3b82f6',
    backgroundImage: mysticImg,
    totalItems: 30,
    categories: [
      {
        id: 'wooden_totem',
        name: 'Wooden Totems',
        description: 'Smiling ancient guardians carved from enchanted oak',
        iconId: 'wooden_totem',
        totalCount: 5,
      },
      {
        id: 'green_frog',
        name: 'River Frogs',
        description: 'Cute friendly frogs resting on lilypads and river stones',
        iconId: 'green_frog',
        totalCount: 6,
      },
      {
        id: 'magic_scrolls',
        name: 'Magic Scrolls',
        description: 'Ancient spellbooks and parchment scrolls tied in ribbon',
        iconId: 'magic_scrolls',
        totalCount: 6,
      },
      {
        id: 'hanging_lantern',
        name: 'Fairy Lanterns',
        description: 'Luminescent blue fairy fire contained in glass lanterns',
        iconId: 'hanging_lantern',
        totalCount: 7,
      },
      {
        id: 'rune_stones',
        name: 'Rune Stones',
        description: 'Smooth river stones inscribed with ancient glowing glyphs',
        iconId: 'rune_stones',
        totalCount: 6,
      },
    ],
    items: [
      // Wooden Totems (5)
      { id: 'm_totem_1', categoryId: 'wooden_totem', x: 37.5, y: 64.5, scale: 1.05, label: 'Mossy Path' },
      { id: 'm_totem_2', categoryId: 'wooden_totem', x: 18.2, y: 41.5, scale: 0.9, label: 'Cottage Porch' },
      { id: 'm_totem_3', categoryId: 'wooden_totem', x: 89.5, y: 62.0, scale: 0.95, label: 'River Shore' },
      { id: 'm_totem_4', categoryId: 'wooden_totem', x: 52.0, y: 79.5, scale: 1.0, label: 'Lakeside Dock' },
      { id: 'm_totem_5', categoryId: 'wooden_totem', x: 41.0, y: 42.5, scale: 0.85, label: "Wizard's Bench" },

      // Green River Frogs (6)
      { id: 'm_frog_1', categoryId: 'green_frog', x: 76.0, y: 64.0, scale: 1.1, label: 'River Shallows' },
      { id: 'm_frog_2', categoryId: 'green_frog', x: 14.5, y: 29.5, scale: 0.85, label: 'Chimney Roof' },
      { id: 'm_frog_3', categoryId: 'green_frog', x: 22.0, y: 58.5, scale: 0.9, label: 'Stone Stairs' },
      { id: 'm_frog_4', categoryId: 'green_frog', x: 62.5, y: 68.0, scale: 0.95, label: 'Lilypad Pond' },
      { id: 'm_frog_5', categoryId: 'green_frog', x: 88.0, y: 75.0, scale: 0.9, label: 'Pebble Stack' },
      { id: 'm_frog_6', categoryId: 'green_frog', x: 48.5, y: 69.5, scale: 0.9, label: "Water's Edge" },

      // Magic Scrolls (6)
      { id: 'm_scroll_1', categoryId: 'magic_scrolls', x: 38.0, y: 33.8, scale: 1.1, rotation: -20, label: 'Treehouse String' },
      { id: 'm_scroll_2', categoryId: 'magic_scrolls', x: 41.5, y: 50.2, scale: 0.95, label: 'Stair Landing' },
      { id: 'm_scroll_3', categoryId: 'magic_scrolls', x: 69.8, y: 58.5, scale: 1.0, label: 'Rowboat Hull' },
      { id: 'm_scroll_4', categoryId: 'magic_scrolls', x: 94.5, y: 68.5, scale: 0.9, label: 'Message Bottle' },
      { id: 'm_scroll_5', categoryId: 'magic_scrolls', x: 11.5, y: 46.5, scale: 0.95, label: 'Rune Board' },
      { id: 'm_scroll_6', categoryId: 'magic_scrolls', x: 84.5, y: 57.5, scale: 0.85, label: 'Anchor Shelf' },

      // Fairy Lanterns (7)
      { id: 'm_lantern_1', categoryId: 'hanging_lantern', x: 49.0, y: 29.2, scale: 1.0, label: 'Bridge Post' },
      { id: 'm_lantern_2', categoryId: 'hanging_lantern', x: 65.5, y: 27.8, scale: 0.95, label: 'Festoon Ropes' },
      { id: 'm_lantern_3', categoryId: 'hanging_lantern', x: 95.8, y: 36.2, scale: 0.9, label: 'Canopy Branch' },
      { id: 'm_lantern_4', categoryId: 'hanging_lantern', x: 36.2, y: 39.5, scale: 0.85, label: 'Cottage Sconce' },
      { id: 'm_lantern_5', categoryId: 'hanging_lantern', x: 68.8, y: 50.5, scale: 1.0, label: 'Bridge Vault' },
      { id: 'm_lantern_6', categoryId: 'hanging_lantern', x: 78.0, y: 28.5, scale: 0.9, label: 'Starry Tree' },
      { id: 'm_lantern_7', categoryId: 'hanging_lantern', x: 13.5, y: 71.5, scale: 0.95, label: 'Gnome Barrel' },

      // Rune Stones (6)
      { id: 'm_rune_1', categoryId: 'rune_stones', x: 12.5, y: 48.0, scale: 1.0, label: 'Rune Board' },
      { id: 'm_rune_2', categoryId: 'rune_stones', x: 25.8, y: 55.5, scale: 0.9, label: 'Rope Coil' },
      { id: 'm_rune_3', categoryId: 'rune_stones', x: 51.5, y: 62.5, scale: 1.05, label: 'Riverbed' },
      { id: 'm_rune_4', categoryId: 'rune_stones', x: 76.5, y: 51.8, scale: 0.95, label: 'Under Bridge' },
      { id: 'm_rune_5', categoryId: 'rune_stones', x: 88.5, y: 61.5, scale: 1.0, label: 'Rock Cairn' },
      { id: 'm_rune_6', categoryId: 'rune_stones', x: 46.5, y: 24.5, scale: 0.85, label: 'Arch Gate' },
    ],
  },

  // LEVEL 3: Enchanted Forest Workshop (Screenshot 3)
  {
    id: 'woodland',
    name: 'Enchanted Forest Workshop',
    titlePrefix: 'Collect All',
    titleHighlight: 'the Items!',
    subtitle: 'Search the gnome alchemist workshop in the mossy woods',
    themeColor: '#22c55e',
    backgroundImage: woodlandImg,
    totalItems: 30,
    categories: [
      {
        id: 'mushroom_potion',
        name: 'Mushroom Potions',
        description: 'Glass flasks filled with purple elixir capped with red mushrooms',
        iconId: 'mushroom_potion',
        totalCount: 6,
      },
      {
        id: 'potted_sprout',
        name: 'Magic Sprouts',
        description: 'Fresh enchanted seedlings sprouting in terracotta pots',
        iconId: 'potted_sprout',
        totalCount: 6,
      },
      {
        id: 'gem_sack',
        name: 'Gem Pouches',
        description: 'Burlap pouches filled with shining rubies and emeralds',
        iconId: 'gem_sack',
        totalCount: 7,
      },
      {
        id: 'treasure_chest',
        name: 'Treasure Chests',
        description: 'Iron-banded oak chests holding secret alchemical secrets',
        iconId: 'treasure_chest',
        totalCount: 5,
      },
      {
        id: 'magic_staff',
        name: 'Druid Staffs',
        description: 'Twisted wooden staffs entwined with ivy and power orbs',
        iconId: 'magic_staff',
        totalCount: 6,
      },
    ],
    items: [
      // Mushroom Potions (6)
      { id: 'w_potion_1', categoryId: 'mushroom_potion', x: 13.0, y: 37.5, scale: 1.1, label: 'Cauldron Stand' },
      { id: 'w_potion_2', categoryId: 'mushroom_potion', x: 82.5, y: 31.8, scale: 1.1, label: 'Treehouse Door' },
      { id: 'w_potion_3', categoryId: 'mushroom_potion', x: 35.8, y: 68.2, scale: 1.15, label: 'Tree Stump Table' },
      { id: 'w_potion_4', categoryId: 'mushroom_potion', x: 26.5, y: 26.5, scale: 0.9, label: 'Apothecary Shelf' },
      { id: 'w_potion_5', categoryId: 'mushroom_potion', x: 44.8, y: 38.5, scale: 0.95, label: 'Wood Mortar' },
      { id: 'w_potion_6', categoryId: 'mushroom_potion', x: 67.5, y: 62.0, scale: 1.0, label: 'Fruit Stump' },

      // Magic Sprouts (6)
      { id: 'w_sprout_1', categoryId: 'potted_sprout', x: 5.5, y: 29.5, scale: 0.95, label: 'Herbal Cauldron' },
      { id: 'w_sprout_2', categoryId: 'potted_sprout', x: 94.5, y: 46.5, scale: 1.0, label: 'Canopy Planter' },
      { id: 'w_sprout_3', categoryId: 'potted_sprout', x: 57.5, y: 42.5, scale: 0.9, label: 'Berry Basket' },
      { id: 'w_sprout_4', categoryId: 'potted_sprout', x: 74.0, y: 52.8, scale: 1.05, label: 'Feast Table' },
      { id: 'w_sprout_5', categoryId: 'potted_sprout', x: 19.5, y: 62.5, scale: 0.95, label: 'Moss Lawn' },
      { id: 'w_sprout_6', categoryId: 'potted_sprout', x: 48.0, y: 58.5, scale: 1.0, label: 'Picnic Log' },

      // Gem Pouches (7)
      { id: 'w_gem_1', categoryId: 'gem_sack', x: 13.5, y: 48.5, scale: 1.05, label: 'Spilled Gems' },
      { id: 'w_gem_2', categoryId: 'gem_sack', x: 31.5, y: 51.5, scale: 1.0, label: 'Green Gem Ring' },
      { id: 'w_gem_3', categoryId: 'gem_sack', x: 67.0, y: 47.8, scale: 0.95, label: 'Wicker Hamper' },
      { id: 'w_gem_4', categoryId: 'gem_sack', x: 59.2, y: 62.8, scale: 1.0, label: 'Tea Crate' },
      { id: 'w_gem_5', categoryId: 'gem_sack', x: 88.0, y: 49.0, scale: 0.9, label: 'Crystal Cluster' },
      { id: 'w_gem_6', categoryId: 'gem_sack', x: 42.0, y: 49.5, scale: 0.9, label: 'Mushroom Patch' },
      { id: 'w_gem_7', categoryId: 'gem_sack', x: 74.5, y: 73.5, scale: 0.95, label: 'Workshop Bench' },

      // Treasure Chests (5)
      { id: 'w_chest_1', categoryId: 'treasure_chest', x: 60.5, y: 33.5, scale: 1.0, label: 'Tree Hollow' },
      { id: 'w_chest_2', categoryId: 'treasure_chest', x: 50.8, y: 47.5, scale: 0.95, label: 'Apple Box' },
      { id: 'w_chest_3', categoryId: 'treasure_chest', x: 6.8, y: 61.5, scale: 1.05, label: 'Forest Basket' },
      { id: 'w_chest_4', categoryId: 'treasure_chest', x: 95.0, y: 68.0, scale: 0.9, label: 'Wood Shed' },
      { id: 'w_chest_5', categoryId: 'treasure_chest', x: 38.5, y: 28.0, scale: 0.85, label: 'Apothecary Rack' },

      // Druid Staffs (6)
      { id: 'w_staff_1', categoryId: 'magic_staff', x: 73.0, y: 34.0, scale: 1.05, rotation: 25, label: 'Tree Trunk' },
      { id: 'w_staff_2', categoryId: 'magic_staff', x: 10.0, y: 68.5, scale: 1.0, rotation: -40, label: 'Brass Lantern' },
      { id: 'w_staff_3', categoryId: 'magic_staff', x: 51.5, y: 73.0, scale: 0.95, rotation: 15, label: 'Log Bench' },
      { id: 'w_staff_4', categoryId: 'magic_staff', x: 84.5, y: 70.0, scale: 1.0, rotation: -15, label: 'Herb Stand' },
      { id: 'w_staff_5', categoryId: 'magic_staff', x: 29.5, y: 48.0, scale: 0.9, rotation: 30, label: 'Forest Trail' },
      { id: 'w_staff_6', categoryId: 'magic_staff', x: 40.0, y: 22.5, scale: 0.85, rotation: -20, label: 'Roof Post' },
    ],
  },
];
