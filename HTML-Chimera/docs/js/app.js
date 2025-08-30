// Global constants
const META_SKILLS = { STRENGTH: 'Strength', INTELLECT: 'Intellect', STEWARDSHIP: 'Stewardship', RESILIENCE: 'Resilience', ARTISTRY: 'Artistry' };
const TASK_CATEGORIES = { FITNESS: META_SKILLS.STRENGTH, STUDY: META_SKILLS.INTELLECT, CHORES: META_SKILLS.STEWARDSHIP, SELF_CARE: META_SKILLS.RESILIENCE, CREATIVE: META_SKILLS.ARTISTRY };

document.addEventListener('DOMContentLoaded', () => {

    // Inclusive real-life task templates for Homestead
    const HOMESTEAD_TASKS = {
        [META_SKILLS.STRENGTH]: {
            name: "Strength",
            icon: "💪",
            color: "text-red-400",
            tasks: [
                // Micro movements (accessible to all)
                { name: "Take 5 deep breaths", stamina: 5, xp: 8, duration: "1 min", difficulty: "micro", gold: 2 },
                { name: "Stretch your arms overhead", stamina: 8, xp: 12, duration: "2 min", difficulty: "micro", gold: 3 },
                { name: "Roll your shoulders 10 times", stamina: 6, xp: 10, duration: "1 min", difficulty: "micro", gold: 2 },
                { name: "Gentle neck stretches", stamina: 7, xp: 11, duration: "2 min", difficulty: "micro", gold: 3 },
                { name: "Wiggle fingers and toes", stamina: 4, xp: 6, duration: "30 sec", difficulty: "micro", gold: 1 },
                
                // Light activities
                { name: "Walk to another room", stamina: 10, xp: 15, duration: "2 min", difficulty: "light", gold: 6 },
                { name: "Stand up and sit down 3 times", stamina: 12, xp: 18, duration: "2 min", difficulty: "light", gold: 7 },
                { name: "Walk for 5 minutes", stamina: 15, xp: 22, duration: "5 min", difficulty: "light", gold: 8 },
                { name: "Do wall push-ups (3-5 reps)", stamina: 18, xp: 26, duration: "3 min", difficulty: "light", gold: 9 },
                { name: "Dance to one song", stamina: 20, xp: 30, duration: "3-4 min", difficulty: "light", gold: 10 },
                
                // Moderate activities  
                { name: "Take a 15-minute walk", stamina: 25, xp: 40, duration: "15 min", difficulty: "moderate", gold: 15 },
                { name: "Do bodyweight exercises (10 min)", stamina: 30, xp: 50, duration: "10 min", difficulty: "moderate", gold: 18 },
                { name: "Yoga or stretching session", stamina: 28, xp: 45, duration: "15 min", difficulty: "moderate", gold: 16 },
                { name: "Active cleaning (vacuuming, etc)", stamina: 35, xp: 55, duration: "20 min", difficulty: "moderate", gold: 20 },
                
                // Vigorous activities
                { name: "30-minute workout", stamina: 50, xp: 80, duration: "30 min", difficulty: "vigorous", gold: 30 },
                { name: "Go for a run/bike ride", stamina: 55, xp: 90, duration: "30+ min", difficulty: "vigorous", gold: 35 },
                { name: "Sports or intense activity", stamina: 60, xp: 100, duration: "45 min", difficulty: "vigorous", gold: 40 }
            ]
        },
        [META_SKILLS.RESILIENCE]: {
            name: "Resilience", 
            icon: "🌱",
            color: "text-green-400",
            tasks: [
                // Micro wellness
                { name: "Drink a glass of water", stamina: 5, xp: 8, duration: "1 min", difficulty: "micro", gold: 2 },
                { name: "Look away from screen for 20 seconds", stamina: 4, xp: 6, duration: "20 sec", difficulty: "micro", gold: 1 },
                { name: "Name 3 things you can see", stamina: 6, xp: 9, duration: "1 min", difficulty: "micro", gold: 2 },
                { name: "Send a kind text to someone", stamina: 8, xp: 12, duration: "2 min", difficulty: "micro", gold: 3 },
                { name: "Pet an animal or hug someone", stamina: 10, xp: 15, duration: "1 min", difficulty: "micro", gold: 4 },
                
                // Light self-care
                { name: "Brush your teeth", stamina: 12, xp: 18, duration: "3 min", difficulty: "light", gold: 6 },
                { name: "Wash your face", stamina: 10, xp: 15, duration: "3 min", difficulty: "light", gold: 5 },
                { name: "Apply moisturizer or lip balm", stamina: 8, xp: 12, duration: "2 min", difficulty: "light", gold: 4 },
                { name: "Change into comfortable clothes", stamina: 10, xp: 15, duration: "3 min", difficulty: "light", gold: 5 },
                { name: "5-minute mindfulness/meditation", stamina: 15, xp: 25, duration: "5 min", difficulty: "light", gold: 8 },
                { name: "Write down 3 things you're grateful for", stamina: 12, xp: 20, duration: "5 min", difficulty: "light", gold: 6 },
                
                // Moderate self-care
                { name: "Take a shower", stamina: 25, xp: 40, duration: "15 min", difficulty: "moderate", gold: 15 },
                { name: "Prepare and eat a healthy meal", stamina: 30, xp: 50, duration: "30 min", difficulty: "moderate", gold: 18 },
                { name: "Call a friend or family member", stamina: 20, xp: 35, duration: "15 min", difficulty: "moderate", gold: 12 },
                { name: "Go outside for fresh air", stamina: 18, xp: 30, duration: "10 min", difficulty: "moderate", gold: 10 },
                { name: "Practice hobby for 20 minutes", stamina: 25, xp: 40, duration: "20 min", difficulty: "moderate", gold: 15 },
                
                // Deep wellness
                { name: "Take a relaxing bath", stamina: 35, xp: 60, duration: "30 min", difficulty: "vigorous", gold: 25 },
                { name: "Hour of self-care activities", stamina: 50, xp: 85, duration: "60 min", difficulty: "vigorous", gold: 35 },
                { name: "Nature walk or outdoor time", stamina: 40, xp: 70, duration: "45 min", difficulty: "vigorous", gold: 30 }
            ]
        },
        [META_SKILLS.STEWARDSHIP]: {
            name: "Stewardship",
            icon: "🏠", 
            color: "text-blue-400",
            tasks: [
                // Micro organization
                { name: "Put one item back where it belongs", stamina: 5, xp: 8, duration: "1 min", difficulty: "micro", gold: 2 },
                { name: "Clear a small surface (desk corner)", stamina: 8, xp: 12, duration: "3 min", difficulty: "micro", gold: 3 },
                { name: "Make your bed", stamina: 10, xp: 15, duration: "3 min", difficulty: "micro", gold: 4 },
                { name: "Put dishes in dishwasher", stamina: 8, xp: 12, duration: "3 min", difficulty: "micro", gold: 3 },
                { name: "Sort mail or papers for 5 min", stamina: 10, xp: 15, duration: "5 min", difficulty: "micro", gold: 4 },
                
                // Light housework
                { name: "Wipe down one counter", stamina: 12, xp: 18, duration: "5 min", difficulty: "light", gold: 6 },
                { name: "Take out trash", stamina: 10, xp: 15, duration: "5 min", difficulty: "light", gold: 5 },
                { name: "Load/unload dishwasher", stamina: 15, xp: 22, duration: "10 min", difficulty: "light", gold: 7 },
                { name: "Organize one drawer", stamina: 18, xp: 28, duration: "10 min", difficulty: "light", gold: 8 },
                { name: "Quick tidy of living space", stamina: 20, xp: 30, duration: "10 min", difficulty: "light", gold: 9 },
                
                // Moderate chores
                { name: "Do a load of laundry", stamina: 25, xp: 40, duration: "20 min", difficulty: "moderate", gold: 15 },
                { name: "Clean one room thoroughly", stamina: 35, xp: 55, duration: "30 min", difficulty: "moderate", gold: 20 },
                { name: "Grocery shopping", stamina: 30, xp: 50, duration: "45 min", difficulty: "moderate", gold: 18 },
                { name: "Meal prep for tomorrow", stamina: 35, xp: 55, duration: "30 min", difficulty: "moderate", gold: 22 },
                
                // Major projects
                { name: "Deep clean kitchen", stamina: 50, xp: 85, duration: "60 min", difficulty: "vigorous", gold: 35 },
                { name: "Organize entire closet", stamina: 60, xp: 100, duration: "90 min", difficulty: "vigorous", gold: 40 },
                { name: "Major home project", stamina: 65, xp: 110, duration: "2+ hours", difficulty: "vigorous", gold: 45 }
            ]
        },
        [META_SKILLS.INTELLECT]: {
            name: "Intellect",
            icon: "📚",
            color: "text-purple-400", 
            tasks: [
                // Micro learning
                { name: "Read one paragraph of something interesting", stamina: 5, xp: 8, duration: "2 min", difficulty: "micro", gold: 2 },
                { name: "Look up one word definition", stamina: 4, xp: 6, duration: "1 min", difficulty: "micro", gold: 1 },
                { name: "Watch an educational video (5 min)", stamina: 8, xp: 12, duration: "5 min", difficulty: "micro", gold: 3 },
                { name: "Practice 5 words in a foreign language", stamina: 10, xp: 15, duration: "5 min", difficulty: "micro", gold: 4 },
                { name: "Do one math problem or puzzle", stamina: 8, xp: 12, duration: "3 min", difficulty: "micro", gold: 3 },
                
                // Light learning
                { name: "Read for 15 minutes", stamina: 15, xp: 25, duration: "15 min", difficulty: "light", gold: 7 },
                { name: "Listen to educational podcast", stamina: 12, xp: 20, duration: "20 min", difficulty: "light", gold: 6 },
                { name: "Practice a skill for 10 minutes", stamina: 18, xp: 30, duration: "10 min", difficulty: "light", gold: 8 },
                { name: "Review notes or flashcards", stamina: 15, xp: 25, duration: "15 min", difficulty: "light", gold: 7 },
                { name: "Write in a journal", stamina: 12, xp: 20, duration: "10 min", difficulty: "light", gold: 6 },
                
                // Moderate study
                { name: "Study session (30 minutes)", stamina: 30, xp: 50, duration: "30 min", difficulty: "moderate", gold: 16 },
                { name: "Complete online course module", stamina: 35, xp: 60, duration: "45 min", difficulty: "moderate", gold: 18 },
                { name: "Work on personal project", stamina: 25, xp: 45, duration: "30 min", difficulty: "moderate", gold: 14 },
                { name: "Research a topic thoroughly", stamina: 28, xp: 48, duration: "40 min", difficulty: "moderate", gold: 16 },
                
                // Intensive learning
                { name: "Deep study session (1+ hours)", stamina: 50, xp: 85, duration: "60+ min", difficulty: "vigorous", gold: 30 },
                { name: "Write an article or essay", stamina: 55, xp: 95, duration: "90 min", difficulty: "vigorous", gold: 35 },
                { name: "Learn new complex skill", stamina: 60, xp: 100, duration: "2+ hours", difficulty: "vigorous", gold: 40 }
            ]
        },
        [META_SKILLS.ARTISTRY]: {
            name: "Artistry",
            icon: "🎨",
            color: "text-yellow-400",
            tasks: [
                // Micro creativity
                { name: "Doodle for 3 minutes", stamina: 6, xp: 10, duration: "3 min", difficulty: "micro", gold: 2 },
                { name: "Take one creative photo", stamina: 5, xp: 8, duration: "2 min", difficulty: "micro", gold: 2 },
                { name: "Hum or sing for 2 minutes", stamina: 4, xp: 6, duration: "2 min", difficulty: "micro", gold: 1 },
                { name: "Write one sentence creatively", stamina: 6, xp: 10, duration: "2 min", difficulty: "micro", gold: 2 },
                { name: "Arrange something aesthetically", stamina: 8, xp: 12, duration: "5 min", difficulty: "micro", gold: 3 },
                
                // Light creativity
                { name: "Free write for 10 minutes", stamina: 15, xp: 25, duration: "10 min", difficulty: "light", gold: 7 },
                { name: "Sketch or draw something", stamina: 18, xp: 30, duration: "15 min", difficulty: "light", gold: 8 },
                { name: "Play an instrument briefly", stamina: 12, xp: 20, duration: "10 min", difficulty: "light", gold: 6 },
                { name: "Try a new recipe variation", stamina: 20, xp: 35, duration: "20 min", difficulty: "light", gold: 9 },
                { name: "Rearrange or decorate space", stamina: 15, xp: 25, duration: "15 min", difficulty: "light", gold: 7 },
                
                // Moderate creativity
                { name: "Work on art project (30 min)", stamina: 30, xp: 50, duration: "30 min", difficulty: "moderate", gold: 16 },
                { name: "Write creatively for 45 minutes", stamina: 35, xp: 60, duration: "45 min", difficulty: "moderate", gold: 18 },
                { name: "Cook something new and creative", stamina: 40, xp: 65, duration: "45 min", difficulty: "moderate", gold: 20 },
                { name: "Learn new creative technique", stamina: 32, xp: 55, duration: "40 min", difficulty: "moderate", gold: 17 },
                
                // Deep creativity
                { name: "Immersive creative session (1+ hours)", stamina: 50, xp: 85, duration: "60+ min", difficulty: "vigorous", gold: 30 },
                { name: "Complete a creative project", stamina: 60, xp: 100, duration: "2+ hours", difficulty: "vigorous", gold: 40 },
                { name: "Create and share something", stamina: 55, xp: 95, duration: "90 min", difficulty: "vigorous", gold: 35 }
            ]
        }
    };

// Global game data
const GAME_DATA = {
        SKILLS: {
                    woodcutting: { name: 'Woodcutting', type: 'gathering', icon: '🌳', theme: 'woodcutting' },
        mining: { name: 'Mining', type: 'gathering', icon: '⛏️', theme: 'mining' },
        fishing: { name: 'Fishing', type: 'gathering', icon: '🎣', theme: 'fishing' },
        farming: { name: 'Farming', type: 'gathering', icon: '🌾', theme: 'farming' },
        hunter: { name: 'Hunter', type: 'gathering', icon: '🏹', theme: 'hunter' },
        archaeology: { name: 'Archaeology', type: 'gathering', icon: '🏺', theme: 'archaeology' },
        divination: { name: 'Divination', type: 'gathering', icon: '🔮', theme: 'divination' },
        firemaking: { name: 'Firemaking', type: 'artisan', icon: '🔥', theme: 'firemaking' },
        smithing: { name: 'Smithing', type: 'artisan', icon: '⚒️', theme: 'smithing' },
        cooking: { name: 'Cooking', type: 'artisan', icon: '🍳', theme: 'cooking' },
        runecrafting: { name: 'Runecrafting', type: 'artisan', icon: '🔮', theme: 'smithing' },
        woodworking: { name: 'Woodworking', type: 'artisan', icon: '🪵', theme: 'woodcutting' },
        herblore: { name: 'Herblore', type: 'artisan', icon: '🌿', theme: 'farming' },
        crafting: { name: 'Crafting', type: 'artisan', icon: '💍', theme: 'mining' },
        },
        ITEMS: {
            // Core resources
            logs: { name: 'Logs', icon: '🪵' }, oak_logs: { name: 'Oak Logs', icon: '🪵' },
            yew_logs: { name: 'Yew Logs', icon: '🪵' },
            magic_logs: { name: 'Magic Logs', icon: '🪵' },
            copper_ore: { name: 'Copper Ore', icon: '🪨' }, tin_ore: { name: 'Tin Ore', icon: '🪨' }, iron_ore: { name: 'Iron Ore', icon: '🟤' },
            gems: { name: 'Gems', icon: '💎' },
            bronze_bar: { name: 'Bronze Bar', icon: '🟧' }, bronze_dagger: { name: 'Bronze Dagger', icon: '🗡️', damage: 4 }, bronze_helmet: { name: 'Bronze Helmet', icon: '⛑️', hp_bonus: 15 },
            raw_shrimp: { name: 'Raw Shrimp', icon: '🦐' }, raw_sardine: { name: 'Raw Sardine', icon: '🐟' },
            raw_tuna: { name: 'Raw Tuna', icon: '🐟' },
            raw_lobster: { name: 'Raw Lobster', icon: '🦞' },
            shrimp: { name: 'Shrimp', icon: '🍤', heals: 20 }, sardine: { name: 'Sardine', icon: '🐠', heals: 30 },
            tuna: { name: 'Tuna', icon: '🍣', heals: 50 },
            lobster: { name: 'Lobster', icon: '🦞', heals: 80 },
            bird_nest: { name: 'Bird Nest', icon: '🪺' },

            // New artisan items
            bronze_sword: { name: 'Bronze Sword', icon: '⚔️', type: 'weapon', dps_bonus: 0.5 },
            iron_ore: { name: 'Iron Ore', icon: '🪨' },
            iron_bar: { name: 'Iron Bar', icon: '⬜' },
            iron_helmet: { name: 'Iron Helmet', icon: '🪖', type: 'armor', hp_bonus: 10 },
            arrow_shafts: { name: 'Arrow Shafts', icon: '🏹' },
            arrows: { name: 'Arrows', icon: '🏹', type: 'ammunition' },
            feathers: { name: 'Feathers', icon: '🪶' },

            // Shop & chest items mirrored from native dataset
            seed_vigor: { name: 'Seed of Vigor', icon: '🌱' },
            seed_clarity: { name: 'Seed of Clarity', icon: '🌱' },
            seed_inspiration: { name: 'Seed of Inspiration', icon: '🌱' },
            material_joyful_ember: { name: 'Joyful Ember', icon: '🔥' },
            material_sunstone_shard: { name: 'Sunstone Shard', icon: '🔶' },
            material_essence: { name: 'Raw Essence', icon: '✨' },
            item_ancient_key: { name: 'Ancient Key', icon: '🗝️' },
            tree_ironwood: { name: 'Ironwood Sapling', icon: '🌳' },

            item_elixir_strength: { name: 'Elixir of Strength', icon: '🧪' },
            item_scroll_fortune: { name: 'Scroll of Fortune', icon: '📜' },

            // Glyphs
            glyph_swiftness: { name: 'Glyph of Swiftness', icon: '⚡', description: 'Reduces expedition duration by 15% and increases mining speed by 10%' },
            glyph_vitality: { name: 'Glyph of Vitality', icon: '💚', description: 'Your army gains +15% HP and +10% HP regeneration during expeditions' },
            glyph_precision: { name: 'Glyph of Precision', icon: '🎯', description: 'Your Archers deal +20% damage and woodcutting yields +15% more logs' },
            glyph_enduring_strength: { name: 'Glyph of Enduring Strength', icon: '🛡️', description: 'Your Knights gain +25% HP and smithing actions are 20% faster' },
            glyph_explosive_power: { name: 'Glyph of Explosive Power', icon: '💥', description: 'Your Wizards\' first attack deals triple damage and cooking actions give +25% XP' },
            glyph_legendary_strength: { name: 'Glyph of Legendary Strength', icon: '⚔️', description: 'Your entire army gains +30% damage, +30% HP, and all gathering skills are 25% faster' },
            glyph_time_manipulation: { name: 'Glyph of Time Manipulation', icon: '⏰', description: 'Reduces expedition duration by 40%, grants +75% XP, and artisan skills craft 30% faster' },
            glyph_elemental_mastery: { name: 'Glyph of Elemental Mastery', icon: '🔥', description: 'Your Wizards gain access to powerful elemental spells and archaeology finds 40% more artifacts' },
            glyph_immortality: { name: 'Glyph of Immortality', icon: '💎', description: 'Your army cannot die during expeditions and all skill actions give +50% XP permanently' },
            glyph_reality_bend: { name: 'Glyph of Reality Bending', icon: '🌀', description: 'Automatically completes expeditions with maximum rewards and permanently increases all future gains by +25%' },
            glyph_eternal_glory: { name: 'Glyph of Eternal Glory', icon: '👑', description: 'Permanently increases all expedition rewards by +20%, all skill XP by +30%, and unlocks legendary crafting recipes' },
            
            // Empire utility resources
            rations: { name: 'Rations', icon: '🍞' },
            tools: { name: 'Tools', icon: '🛠️' },
            premium_rations: { name: 'Premium Rations', icon: '🥖', description: 'High-quality food that boosts army morale and expedition stamina' },
            specialized_tools: { name: 'Specialized Tools', icon: '⚒️', description: 'Expert-crafted tools for specific worker types' },
            
            // Basic cooking ingredients
            flour: { name: 'Flour', icon: '🌾', description: 'Ground wheat flour for baking' },
            water: { name: 'Water', icon: '💧', description: 'Clean water for cooking and drinking' },
            
            // General store items
            bread: { name: 'Bread', icon: '🍞', description: 'Fresh baked bread for sustenance' },
            rope: { name: 'Rope', icon: '🪢', description: 'Strong rope for various uses' },
            torch: { name: 'Torch', icon: '🔥', description: 'Provides light in dark places' },
            bandage: { name: 'Bandage', icon: '🩹', description: 'Basic medical supplies' },
            compass: { name: 'Compass', icon: '🧭', description: 'Helps with navigation' },
            
            // New gathering outputs
            potato: { name: 'Potato', icon: '🥔' },
            wheat: { name: 'Wheat', icon: '🌾' },
            flax: { name: 'Flax', icon: '🪢' },
            
            // New Rare Gathering Drops (for Masterwork crafting)
            ancient_root: { name: 'Ancient Root', icon: '🌳', description: 'A rare, gnarled root from a petrified tree.' },
            stardust_ore: { name: 'Stardust Ore', icon: '✨', description: 'A fragment of a fallen star, pulsing with energy.' },
            deep_pearl: { name: 'Deep Pearl', icon: '⚪', description: 'A flawless pearl from the crushing depths of the ocean.' },
            raw_bird_meat: { name: 'Raw Bird Meat', icon: '🍖' },
            animal_pelt: { name: 'Animal Pelt', icon: '🦫' },
            artifact_fragment: { name: 'Artifact Fragment', icon: '🗿' },
            ancient_relic: { name: 'Ancient Relic', icon: '🏺' },
            pale_energy: { name: 'Pale Energy', icon: '✨' },
            flickering_energy: { name: 'Flickering Energy', icon: '🔮' },
            feather: { name: 'Feather', icon: '🪶' },
            rune_essence: { name: 'Rune Essence', icon: '💎' },
            
            // Runes
            air_rune: { name: 'Air Rune', icon: '💨' },
            mind_rune: { name: 'Mind Rune', icon: '🧠' },
            water_rune: { name: 'Water Rune', icon: '💧' },
            earth_rune: { name: 'Earth Rune', icon: '🌍' },
            fire_rune: { name: 'Fire Rune', icon: '🔥' },
            body_rune: { name: 'Body Rune', icon: '👤' },
            cosmic_rune: { name: 'Cosmic Rune', icon: '🌌' },
            chaos_rune: { name: 'Chaos Rune', icon: '🌀' },
            nature_rune: { name: 'Nature Rune', icon: '🌿' },
            law_rune: { name: 'Law Rune', icon: '⚖️' },
            death_rune: { name: 'Death Rune', icon: '💀' },
            blood_rune: { name: 'Blood Rune', icon: '🩸' },

            // New Ores & Bars
            coal: { name: 'Coal', icon: '⚫' },
            mithril_ore: { name: 'Mithril Ore', icon: '🔵' },
            mithril_bar: { name: 'Mithril Bar', icon: '🟦' },
            adamantite_ore: { name: 'Adamantite Ore', icon: '🟢' },
            adamantite_bar: { name: 'Adamantite Bar', icon: '🟩' },

            // New Herbs (for a new Herblore skill)
            herb_common: { name: 'Common Herb', icon: '🌿' },
            herb_rare: { name: 'Rare Herb', icon: '🌱' },
            potion_base: { name: 'Potion Base', icon: '💧' },

            // New Potions (consumables with temporary buffs)
            potion_gathering: { name: 'Gatherer\'s Potion', icon: '🧪', type: 'potion', description: 'Increases gathering yields by 15% for 5 minutes.' },
            potion_artisan: { name: 'Artisan\'s Potion', icon: '🧪', type: 'potion', description: 'Reduces artisan recipe time by 10% for 5 minutes.' },
            potion_xp: { name: 'Potion of Wisdom', icon: '🧪', type: 'potion', description: 'Increases all skill XP gain by 10% for 10 minutes.' },

            // New Equipment (to expand Army gear)
            bronze_shield: { name: 'Bronze Shield', icon: '🛡️', type: 'shield', hp_bonus: 25 },
            mithril_helmet: { name: 'Mithril Helmet', icon: '🪖', type: 'armor', hp_bonus: 50 },
            mithril_sword: { name: 'Mithril Sword', icon: '🗡️', type: 'weapon', dps_bonus: 1.5 },
            
            // New Craftable Skill-Boosting Gear
            bronze_axe: { name: 'Bronze Axe', icon: '🪓', type: 'tool', bonus: 'woodcutting_speed_5', description: '+5% Woodcutting speed.' },
            mithril_axe: { name: 'Mithril Axe', icon: '🪓', type: 'tool', bonus: 'woodcutting_speed_10', description: '+10% Woodcutting speed.' },
            bronze_pickaxe: { name: 'Bronze Pickaxe', icon: '⛏️', type: 'tool', bonus: 'mining_speed_5', description: '+5% Mining speed.' },
            mithril_pickaxe: { name: 'Mithril Pickaxe', icon: '⛏️', type: 'tool', bonus: 'mining_speed_10', description: '+10% Mining speed.' },
            fishing_rod_strong: { name: 'Strong Fishing Rod', icon: '🎣', type: 'tool', bonus: 'fishing_yield_5', description: '+5% chance for double fish.' },

            // New Jewelry (using existing gems)
            ring_gold: { name: 'Gold Ring', icon: '💍', type: 'ring' },
            amulet_gold: { name: 'Gold Amulet', icon: '📿', type: 'amulet' },
            amulet_of_gathering: { name: 'Amulet of Gathering', icon: '📿', type: 'amulet', bonus: 'gathering_yield_5' }, // Example bonus
            ring_of_mastery: { name: 'Ring of Mastery', icon: '💍', type: 'ring', bonus: 'artisan_xp_5' } // Example bonus
        },
        ACTIONS: {
            woodcutting: [
                { id: 'normal_tree', name: 'Normal Trees', level: 1, xp: 10, output: { itemId: 'logs', quantity: 1 }, baseTime: 3000, rareDrop: { itemId: 'bird_nest', chance: 1 } },
                { id: 'oak_tree', name: 'Oak Trees', level: 15, xp: 25, output: { itemId: 'oak_logs', quantity: 1 }, baseTime: 5000, rareDrop: { itemId: 'bird_nest', chance: 1.5 } },
                { id: 'yew_tree', name: 'Yew Trees', level: 35, xp: 60, output: { itemId: 'yew_logs', quantity: 1 }, baseTime: 7000, rareDrop: { itemId: 'ancient_root', chance: 1 } },
                { id: 'magic_tree', name: 'Magic Trees', level: 50, xp: 100, output: { itemId: 'magic_logs', quantity: 1 }, baseTime: 10000, rareDrop: { itemId: 'ancient_root', chance: 2 } },
            ],
            mining: [
                { id: 'copper_rock', name: 'Copper Rock', level: 1, xp: 12, output: { itemId: 'copper_ore', quantity: 1 }, baseTime: 3500 },
                { id: 'tin_rock', name: 'Tin Rock', level: 1, xp: 12, output: { itemId: 'tin_ore', quantity: 1 }, baseTime: 3500, rareDrop: { itemId: 'coal', chance: 20 } },
                { id: 'iron_rock', name: 'Iron Rock', level: 15, xp: 35, output: { itemId: 'iron_ore', quantity: 1 }, baseTime: 4500 },
                { id: 'gem_vein', name: 'Gem Vein', level: 10, xp: 25, output: { itemId: 'gems', quantity: 1 }, baseTime: 6000 },
                { id: 'coal_vein', name: 'Coal Vein', level: 20, xp: 40, output: { itemId: 'coal', quantity: 1 }, baseTime: 7000 },
                { id: 'mithril_rock', name: 'Mithril Rock', level: 30, xp: 50, output: { itemId: 'mithril_ore', quantity: 1 }, baseTime: 8000 },
                { id: 'adamantite_rock', name: 'Adamantite Rock', level: 40, xp: 70, output: { itemId: 'adamantite_ore', quantity: 1 }, baseTime: 9000, rareDrop: { itemId: 'stardust_ore', chance: 1 } },
            ],
            farming: [
                { id: 'potato_patch', name: 'Potato Patch', level: 1, xp: 7, output: { itemId: 'potato', quantity: 1 }, baseTime: 4500 },
                { id: 'wheat_field', name: 'Wheat Field', level: 5, xp: 10, output: { itemId: 'wheat', quantity: 1 }, baseTime: 5000 },
                { id: 'flax_field', name: 'Flax Field', level: 10, xp: 14, output: { itemId: 'flax', quantity: 1 }, baseTime: 5200 },
                { id: 'herb_patch_common', name: 'Common Herb Patch', level: 8, xp: 12, output: { itemId: 'herb_common', quantity: 1 }, baseTime: 4000, rareDrop: { itemId: 'potion_base', chance: 25 } },
                { id: 'herb_patch_rare', name: 'Rare Herb Patch', level: 25, xp: 30, output: { itemId: 'herb_rare', quantity: 1 }, baseTime: 7000 },
                { id: 'grind_wheat', name: 'Grind Wheat to Flour', level: 3, xp: 20, baseTime: 6000, input: [{ itemId: 'wheat', quantity: 2 }], output: { itemId: 'flour', quantity: 1 } },
            ],
            hunter: [
                { id: 'bird_snare', name: 'Bird Snaring', level: 1, xp: 9, output: { itemId: 'raw_bird_meat', quantity: 1 }, baseTime: 4200, rareDrop: { itemId: 'feathers', chance: 25 } },
                { id: 'rabbit_trap', name: 'Rabbit Trapping', level: 7, xp: 14, output: { itemId: 'animal_pelt', quantity: 1 }, baseTime: 5200 },
                { id: 'herb_foraging', name: 'Herb Foraging', level: 12, xp: 18, output: { itemId: 'herb_common', quantity: 1 }, baseTime: 5500, rareDrop: { itemId: 'herb_rare', chance: 20 } },
            ],
            archaeology: [
                { id: 'surface_excavation', name: 'Surface Excavation', level: 1, xp: 6, output: { itemId: 'artifact_fragment', quantity: 1 }, baseTime: 4800 },
                { id: 'ancient_digsite', name: 'Ancient Digsite', level: 20, xp: 18, output: { itemId: 'ancient_relic', quantity: 1 }, baseTime: 8000 },
            ],
            divination: [
                { id: 'pale_wisp', name: 'Pale Wisp', level: 1, xp: 5, output: { itemId: 'pale_energy', quantity: 1 }, baseTime: 3000 },
                { id: 'flickering_wisp', name: 'Flickering Wisp', level: 10, xp: 8, output: { itemId: 'flickering_energy', quantity: 1 }, baseTime: 3600 },
            ],
            fishing: [
                { id: 'shrimp_spot', name: 'Shrimp Spot', level: 1, xp: 8, output: { itemId: 'raw_shrimp', quantity: 1 }, baseTime: 4000 },
                { id: 'sardine_spot', name: 'Sardine Spot', level: 5, xp: 15, output: { itemId: 'raw_sardine', quantity: 1 }, baseTime: 4500 },
                { id: 'tuna_spot', name: 'Tuna Spot', level: 30, xp: 55, output: { itemId: 'raw_tuna', quantity: 1 }, baseTime: 6500 },
                { id: 'lobster_pot', name: 'Lobster Pot', level: 45, xp: 85, output: { itemId: 'raw_lobster', quantity: 1 }, baseTime: 9000, rareDrop: { itemId: 'deep_pearl', chance: 1.5 } },
            ],
        },
        RECIPES: {
            smithing: [
                { id: 'bronze_bar', name: 'Bronze Bar', level: 1, xp: 15, input: [{ itemId: 'copper_ore', quantity: 1 }, { itemId: 'tin_ore', quantity: 1 }], output: { itemId: 'bronze_bar', quantity: 1 }, baseTime: 4000 },
                { id: 'bronze_dagger', name: 'Bronze Dagger', level: 5, xp: 25, input: [{ itemId: 'bronze_bar', quantity: 1 }], output: { itemId: 'bronze_dagger', quantity: 1 }, baseTime: 5000 },
                { id: 'iron_bar', name: 'Smelt Iron Bar', level: 10, xp: 20, input: [{ itemId: 'iron_ore', quantity: 2 }], output: { itemId: 'iron_bar', quantity: 1 }, baseTime: 5000 },
                { id: 'bronze_sword', name: 'Forge Bronze Sword', level: 5, xp: 30, input: [{ itemId: 'bronze_bar', quantity: 2 }], output: { itemId: 'bronze_sword', quantity: 1 }, baseTime: 6000 },
                { id: 'bronze_helmet', name: 'Forge Bronze Helmet', level: 8, xp: 35, input: [{ itemId: 'bronze_bar', quantity: 2 }], output: { itemId: 'bronze_helmet', quantity: 1 }, baseTime: 6500 },
                { id: 'iron_helmet', name: 'Forge Iron Helmet', level: 15, xp: 50, input: [{ itemId: 'iron_bar', quantity: 3 }], output: { itemId: 'iron_helmet', quantity: 1 }, baseTime: 8000 },
                
                // New advanced smithing recipes
                { id: 'mithril_bar', name: 'Smelt Mithril Bar', level: 30, xp: 60, input: [{ itemId: 'mithril_ore', quantity: 2 }, { itemId: 'coal', quantity: 4 }], output: { itemId: 'mithril_bar', quantity: 1 }, baseTime: 10000 },
                { id: 'mithril_sword', name: 'Forge Mithril Sword', level: 35, xp: 100, input: [{ itemId: 'mithril_bar', quantity: 3 }], output: { itemId: 'mithril_sword', quantity: 1 }, baseTime: 12000 },
                { id: 'bronze_shield', name: 'Forge Bronze Shield', level: 8, xp: 40, input: [{ itemId: 'bronze_bar', quantity: 3 }], output: { itemId: 'bronze_shield', quantity: 1 }, baseTime: 7000 },
                
                // New tool crafting recipes
                { id: 'adamantite_bar', name: 'Smelt Adamantite Bar', level: 40, xp: 80, input: [{ itemId: 'adamantite_ore', quantity: 2 }, { itemId: 'coal', quantity: 6 }], output: { itemId: 'adamantite_bar', quantity: 1 }, baseTime: 14000 },
                { id: 'bronze_axe', name: 'Forge Bronze Axe', level: 7, xp: 35, input: [{ itemId: 'bronze_bar', quantity: 3 }, { itemId: 'logs', quantity: 5 }], output: { itemId: 'bronze_axe', quantity: 1 }, baseTime: 6500 },
                { id: 'mithril_axe', name: 'Forge Mithril Axe', level: 32, xp: 75, input: [{ itemId: 'mithril_bar', quantity: 3 }, { itemId: 'yew_logs', quantity: 5 }], output: { itemId: 'mithril_axe', quantity: 1 }, baseTime: 11000 },
                { id: 'bronze_pickaxe', name: 'Forge Bronze Pickaxe', level: 4, xp: 30, input: [{ itemId: 'bronze_bar', quantity: 2 }, { itemId: 'logs', quantity: 5 }], output: { itemId: 'bronze_pickaxe', quantity: 1 }, baseTime: 6000 },
                { id: 'mithril_pickaxe', name: 'Forge Mithril Pickaxe', level: 31, xp: 70, input: [{ itemId: 'mithril_bar', quantity: 2 }, { itemId: 'yew_logs', quantity: 5 }], output: { itemId: 'mithril_pickaxe', quantity: 1 }, baseTime: 10000 },
            ],
            firemaking: [
                { id: 'bonfire_logs', name: 'Bonfire (Logs)', level: 1, xp: 20, input: [{ itemId: 'logs', quantity: 10 }], output: {}, baseTime: 20000 },
            ],
            cooking: [
                { id: 'cook_shrimp', name: 'Cook Shrimp', level: 1, xp: 10, input: [{ itemId: 'raw_shrimp', quantity: 1 }], output: { itemId: 'shrimp', quantity: 1 }, baseTime: 3000 },
                { id: 'cook_sardine', name: 'Cook Sardine', level: 5, xp: 18, input: [{ itemId: 'raw_sardine', quantity: 1 }], output: { itemId: 'sardine', quantity: 1 }, baseTime: 3500 },
                { id: 'cook_rations', name: 'Cook Rations', level: 8, xp: 25, input: [{ itemId: 'flour', quantity: 1 }, { itemId: 'water', quantity: 1 }], output: { itemId: 'rations', quantity: 3 }, baseTime: 8000 },
                { id: 'cook_tuna', name: 'Cook Tuna', level: 30, xp: 60, input: [{ itemId: 'raw_tuna', quantity: 1 }], output: { itemId: 'tuna', quantity: 1 }, baseTime: 4000 },
                { id: 'cook_lobster', name: 'Cook Lobster', level: 45, xp: 95, input: [{ itemId: 'raw_lobster', quantity: 1 }], output: { itemId: 'lobster', quantity: 1 }, baseTime: 5500 },
            ],
            runecrafting: [
                { id: 'air_rune', name: 'Air Altar (Air Rune)', level: 1, xp: 5, input: [{ itemId: 'rune_essence', quantity: 1 }], output: { itemId: 'air_rune', quantity: 1 }, baseTime: 2500 },
                { id: 'mind_rune', name: 'Mind Altar (Mind Rune)', level: 2, xp: 5, input: [{ itemId: 'rune_essence', quantity: 1 }], output: { itemId: 'mind_rune', quantity: 1 }, baseTime: 2600 },
                { id: 'water_rune', name: 'Water Altar (Water Rune)', level: 5, xp: 6, input: [{ itemId: 'rune_essence', quantity: 1 }], output: { itemId: 'water_rune', quantity: 1 }, baseTime: 2700 },
                { id: 'earth_rune', name: 'Earth Altar (Earth Rune)', level: 9, xp: 6, input: [{ itemId: 'rune_essence', quantity: 1 }], output: { itemId: 'earth_rune', quantity: 1 }, baseTime: 2800 },
                { id: 'fire_rune', name: 'Fire Altar (Fire Rune)', level: 14, xp: 7, input: [{ itemId: 'rune_essence', quantity: 1 }], output: { itemId: 'fire_rune', quantity: 1 }, baseTime: 2900 },
                { id: 'body_rune', name: 'Body Altar (Body Rune)', level: 20, xp: 7, input: [{ itemId: 'rune_essence', quantity: 1 }], output: { itemId: 'body_rune', quantity: 1 }, baseTime: 3000 },
                { id: 'cosmic_rune', name: 'Cosmic Altar (Cosmic Rune)', level: 27, xp: 8, input: [{ itemId: 'rune_essence', quantity: 1 }], output: { itemId: 'cosmic_rune', quantity: 1 }, baseTime: 3200 },
                { id: 'chaos_rune', name: 'Chaos Altar (Chaos Rune)', level: 35, xp: 9, input: [{ itemId: 'rune_essence', quantity: 1 }], output: { itemId: 'chaos_rune', quantity: 1 }, baseTime: 3400 },
                { id: 'nature_rune', name: 'Nature Altar (Nature Rune)', level: 44, xp: 10, input: [{ itemId: 'rune_essence', quantity: 1 }], output: { itemId: 'nature_rune', quantity: 1 }, baseTime: 3600 },
                { id: 'law_rune', name: 'Law Altar (Law Rune)', level: 54, xp: 11, input: [{ itemId: 'rune_essence', quantity: 1 }], output: { itemId: 'law_rune', quantity: 1 }, baseTime: 3800 },
                { id: 'death_rune', name: 'Death Altar (Death Rune)', level: 65, xp: 12, input: [{ itemId: 'rune_essence', quantity: 1 }], output: { itemId: 'death_rune', quantity: 1 }, baseTime: 4000 },
                { id: 'blood_rune', name: 'Blood Altar (Blood Rune)', level: 77, xp: 13, input: [{ itemId: 'rune_essence', quantity: 1 }], output: { itemId: 'blood_rune', quantity: 1 }, baseTime: 4200 },
            ],
            woodworking: [
                { id: 'arrow_shafts', name: 'Craft Arrow Shafts', level: 1, xp: 5, input: [{ itemId: 'logs', quantity: 1 }], output: { itemId: 'arrow_shafts', quantity: 10 }, baseTime: 3000 },
                { id: 'arrows', name: 'Fletch Arrows', level: 5, xp: 10, input: [{ itemId: 'arrow_shafts', quantity: 10 }, { itemId: 'feathers', quantity: 5 }], output: { itemId: 'arrows', quantity: 10 }, baseTime: 4000 },
                { id: 'fishing_rod_strong', name: 'Craft Strong Fishing Rod', level: 20, xp: 40, input: [{ itemId: 'yew_logs', quantity: 5 }, { itemId: 'iron_bar', quantity: 1 }], output: { itemId: 'fishing_rod_strong', quantity: 1 }, baseTime: 7500 },
            ],
            alchemy: [ // from native dataset
                { id: 'elixir_strength', name: 'Elixir of Strength', level: 1, xp: 25, input: [{ itemId: 'material_sunstone_shard', quantity: 1 }, { itemId: 'material_joyful_ember', quantity: 2 }], output: { itemId: 'item_elixir_strength', quantity: 1 }, baseTime: 5000 },
                { id: 'scroll_fortune', name: 'Scroll of Fortune', level: 1, xp: 30, input: [{ itemId: 'material_joyful_ember', quantity: 5 }, { itemId: 'material_essence', quantity: 2 }], output: { itemId: 'item_scroll_fortune', quantity: 1 }, baseTime: 6000 },
            ],
            herblore: [
                { id: 'potion_base', name: 'Create Potion Base', level: 1, xp: 5, input: [], output: { itemId: 'potion_base', quantity: 1 }, baseTime: 2000 },
                { id: 'potion_gathering', name: 'Mix Gatherer\'s Potion', level: 10, xp: 25, input: [{ itemId: 'potion_base', quantity: 1 }, { itemId: 'herb_common', quantity: 2 }], output: { itemId: 'potion_gathering', quantity: 1 }, baseTime: 5000 },
                { id: 'potion_artisan', name: 'Mix Artisan\'s Potion', level: 15, xp: 35, input: [{ itemId: 'potion_base', quantity: 1 }, { itemId: 'herb_common', quantity: 3 }], output: { itemId: 'potion_artisan', quantity: 1 }, baseTime: 6000 },
                { id: 'potion_xp', name: 'Mix Potion of Wisdom', level: 28, xp: 60, input: [{ itemId: 'potion_base', quantity: 1 }, { itemId: 'herb_rare', quantity: 2 }], output: { itemId: 'potion_xp', quantity: 1 }, baseTime: 9000 },
            ],
            crafting: [
                { id: 'ring_gold', name: 'Craft Gold Ring', level: 5, xp: 20, input: [{ itemId: 'gems', quantity: 1 }], output: { itemId: 'ring_gold', quantity: 1 }, baseTime: 4000 },
                { id: 'amulet_gold', name: 'Craft Gold Amulet', level: 10, xp: 30, input: [{ itemId: 'gems', quantity: 2 }], output: { itemId: 'amulet_gold', quantity: 1 }, baseTime: 6000 },
                { id: 'amulet_of_gathering', name: 'Enchant Amulet of Gathering', level: 20, xp: 50, input: [{ itemId: 'amulet_gold', quantity: 1 }, { itemId: 'herb_rare', quantity: 5 }], output: { itemId: 'amulet_of_gathering', quantity: 1 }, baseTime: 8000 },
            ]
        },
        SPELLS: [ // mirrored subset
            { id: 'spell_double_xp', name: 'Double XP', description: 'Earn double XP for a short time', requiredLevel: 1, runeCost: 1, effect: 'doubleXP', durationMs: 10 * 60 * 1000 },
            { id: 'spell_double_gold', name: 'Double Gold', description: 'Earn double gold for a short time', requiredLevel: 1, runeCost: 1, effect: 'doubleGold', durationMs: 10 * 60 * 1000 },
            { id: 'spell_golden_harvest', name: 'Golden Harvest', description: '+25% gold for 10m', requiredLevel: 7, runeCost: 3, effect: 'goldBoost', magnitude: 0.25, durationMs: 10 * 60 * 1000 },
        ],
        SHOP_ITEMS: [
            { id: 'water', name: 'Water', description: 'Clean water for cooking and drinking', cost: 5, icon: '💧', category: 'General Store' },
            { id: 'bread', name: 'Bread', description: 'Fresh baked bread for sustenance', cost: 15, icon: '🍞', category: 'General Store' },
            { id: 'rope', name: 'Rope', description: 'Strong rope for various uses', cost: 25, icon: '🪢', category: 'General Store' },
            { id: 'torch', name: 'Torch', description: 'Provides light in dark places', cost: 30, icon: '🔥', category: 'General Store' },
            { id: 'bandage', name: 'Bandage', description: 'Basic medical supplies', cost: 20, icon: '🩹', category: 'General Store' },
            { id: 'compass', name: 'Compass', description: 'Helps with navigation', cost: 50, icon: '🧭', category: 'General Store' },
        ],
        CHESTS: [
            { id: 'chest_common', name: 'Common Chest', description: 'Contains a few simple rewards.', cost: 250, keyItemID: null, rarity: 'common', icon: 'shippingbox', lootTable: [ {type:'currency', amount:100}, {type:'item', id:'seed_vigor', qty:1}, {type:'item', id:'material_joyful_ember', qty:2} ], rewardCount: [1,2] },
            { id: 'chest_rare', name: 'Rare Chest', description: 'Valuable materials and chance for rare seeds.', cost: 1000, keyItemID: null, rarity: 'rare', icon: 'archivebox', lootTable: [ {type:'currency', amount:500}, {type:'item', id:'seed_clarity', qty:1}, {type:'item', id:'material_sunstone_shard', qty:1}, {type:'runes', amount:1} ], rewardCount: [2,3] },
            { id: 'chest_ancient', name: 'Ancient Chest', description: 'A locked chest from a forgotten era.', cost: 0, keyItemID: 'item_ancient_key', rarity: 'epic', icon: 'treasurechest', lootTable: [ {type:'currency', amount:2000}, {type:'item', id:'seed_inspiration', qty:1}, {type:'item', id:'tree_ironwood', qty:1}, {type:'runes', amount:5} ], rewardCount: [3,4] },
        ],
        COMBAT: {
            ENEMIES: [
                { id: 'goblin', name: 'Goblin', level: 2, hp: 30, maxHp: 30, attack: 4, defense: 1, gold: [5, 10], drops: [ {id:'copper_ore', qty:[1,2], chance:50}, {id:'tin_ore', qty:[1,2], chance:50} ], attackSpeedMs: 2000 },
                { id: 'wolf', name: 'Wolf', level: 5, hp: 60, maxHp: 60, attack: 7, defense: 2, gold: [12, 25], drops: [ {id:'raw_shrimp', qty:[1,1], chance:30} ], attackSpeedMs: 1800 },
                { id: 'skeleton', name: 'Skeleton', level: 10, hp: 120, maxHp: 120, attack: 12, defense: 4, gold: [30, 60], drops: [ {id:'bronze_bar', qty:[1,2], chance:35} ], attackSpeedMs: 1700 },
                { id: 'troll', name: 'Troll', level: 20, hp: 300, maxHp: 300, attack: 20, defense: 8, gold: [80, 150], drops: [ {id:'item_ancient_key', qty:[1,1], chance:10}, {id:'coal', qty:[2,4], chance:70} ], attackSpeedMs: 1600 },
                { id: 'ancient_dragon', name: 'Ancient Dragon', level: 50, hp: 1500, maxHp: 1500, attack: 60, defense: 20, gold: [500, 1000], drops: [ {id:'dragon_scale', qty:[1,3], chance:80}, {id:'mithril_ore', qty:[1,2], chance:40}, {id:'herb_rare', qty:[1,2], chance:60} ], attackSpeedMs: 1200 },
                { id: 'void_herald', name: 'Void Herald', level: 75, hp: 3000, maxHp: 3000, attack: 100, defense: 35, gold: [1000, 2000], drops: [ {id:'void_essence', qty:[1,1], chance:60}, {id:'cosmic_rune', qty:[2,5], chance:50} ], attackSpeedMs: 1000 },
            ]
        },
        EXPEDITIONS: {
            // Tier 1: Starting expeditions - simple combat encounters
            GOBLIN_WARREN: {
                id: 'goblin_warren',
                name: 'The Goblin Warren',
                description: 'A network of tunnels infested with goblins. Perfect for new adventurers to test their mettle.',
                difficulty: 'Easy',
                icon: '🏚️',
                enemyId: 'goblin',
                unlockRequirements: [],
                duration: 30000, // 30 seconds
                resourceCost: { rations: 10 }, // Basic expedition requires food supplies
                armyRequirements: {
                    minUnits: 1,
                    preferredComposition: [
                        { type: 'any', count: 1, bonus: 10 } // Any single unit gives 10% bonus
                    ],
                    tacticalAdvantage: {
                        'knight': { bonus: 15, reason: 'Heavy armor protects against goblin weapons' },
                        'goblin_merc': { bonus: 20, reason: 'Knows goblin tactics and weaknesses' }
                    }
                },
                rewards: {
                    baseXP: { [META_SKILLS.STRENGTH]: 25, [META_SKILLS.RESILIENCE]: 15 },
                    gold: [20, 35],
                    loot: [
                        { type: 'item', id: 'copper_ore', qty: [2, 4], chance: 70 },
                        { type: 'item', id: 'tin_ore', qty: [1, 3], chance: 50 },
                        { type: 'blueprint', id: 'copper_pickaxe_blueprint', qty: 1, chance: 15 }
                    ]
                },
                successRate: 85
            },
            WHISPERING_WOODS: {
                id: 'whispering_woods',
                name: 'The Whispering Woods',
                description: 'Ancient forests where wolves roam freely. The trees whisper secrets to those brave enough to listen.',
                difficulty: 'Easy',
                icon: '🌲',
                enemyId: 'wolf',
                unlockRequirements: [{ type: 'skill', skill: META_SKILLS.STRENGTH, level: 3 }],
                duration: 45000, // 45 seconds
                resourceCost: { rations: 15, tools: 2 }, // Forest expedition needs food and basic tools
                armyRequirements: {
                    minUnits: 2,
                    preferredComposition: [
                        { type: 'balanced', dps: 1, hps: 1, bonus: 15 } // Balanced force
                    ],
                    tacticalAdvantage: {
                        'druid': { bonus: 25, reason: 'Commune with forest spirits to track wolf packs' },
                        'wizard': { bonus: 20, reason: 'Nature magic disrupts wolf pack coordination' },
                        'knight': { bonus: 10, reason: 'Heavy armor reduces wolf bite damage' }
                    }
                },
                rewards: {
                    baseXP: { [META_SKILLS.STRENGTH]: 35, [META_SKILLS.INTELLECT]: 20 },
                    gold: [30, 50],
                    loot: [
                        { type: 'item', id: 'raw_shrimp', qty: [2, 4], chance: 60 },
                        { type: 'item', id: 'log_oak', qty: [3, 6], chance: 80 },
                        { type: 'blueprint', id: 'wooden_bow_blueprint', qty: 1, chance: 20 }
                    ]
                },
                successRate: 75
            },
            
            // Tier 2: Mid-level expeditions requiring some progression
            BONE_CRYPTS: {
                id: 'bone_crypts',
                name: 'The Bone Crypts',
                description: 'Ancient burial grounds where restless skeletons guard forgotten treasures and dark secrets.',
                difficulty: 'Medium',
                icon: '⚰️',
                enemyId: 'skeleton',
                unlockRequirements: [
                    { type: 'skill', skill: META_SKILLS.STRENGTH, level: 8 },
                    { type: 'skill', skill: META_SKILLS.RESILIENCE, level: 5 }
                ],
                duration: 75000, // 75 seconds
                resourceCost: { rations: 25, tools: 5 }, // Crypt exploration needs more supplies and excavation tools
                armyRequirements: {
                    minUnits: 3,
                    specificUnits: [
                        { type: 'cleric', count: 1, required: true, reason: 'Holy magic needed to combat undead' }
                    ],
                    preferredComposition: [
                        { type: 'formation', units: ['cleric', 'knight', 'wizard'], bonus: 30 }
                    ],
                    tacticalAdvantage: {
                        'cleric': { bonus: 35, reason: 'Turn undead and consecrate ground' },
                        'wizard': { bonus: 25, reason: 'Arcane missiles pierce bone armor' },
                        'knight': { bonus: 15, reason: 'Heavy weapons crush skeleton frames' },
                        'warlock': { bonus: -10, reason: 'Dark magic strengthens undead enemies' }
                    }
                },
                rewards: {
                    baseXP: { [META_SKILLS.STRENGTH]: 60, [META_SKILLS.INTELLECT]: 40, [META_SKILLS.RESILIENCE]: 35 },
                    gold: [75, 120],
                    loot: [
                        { type: 'item', id: 'bronze_bar', qty: [2, 4], chance: 65 },
                        { type: 'item', id: 'rune_essence', qty: [1, 3], chance: 45 },
                        { type: 'item', id: 'herb_common', qty: [1, 3], chance: 55 },
                        { type: 'blueprint', id: 'bone_shield_blueprint', qty: 1, chance: 25 },
                        { type: 'blueprint', id: 'necromancer_robe_blueprint', qty: 1, chance: 10 }
                    ]
                },
                successRate: 65
            },
            TROLL_BRIDGE: {
                id: 'troll_bridge',
                name: 'The Troll Bridge',
                description: 'A massive stone bridge guarded by an ancient troll. Legend says great treasures lie beneath.',
                difficulty: 'Hard',
                icon: '🌉',
                enemyId: 'troll',
                unlockRequirements: [
                    { type: 'skill', skill: META_SKILLS.STRENGTH, level: 15 },
                    { type: 'skill', skill: META_SKILLS.RESILIENCE, level: 12 },
                    { type: 'army_power', minDps: 20 }
                ],
                duration: 120000, // 2 minutes
                resourceCost: { rations: 40, tools: 8 }, // Extended battle requires substantial supplies and equipment
                armyRequirements: {
                    minUnits: 5,
                    specificUnits: [
                        { type: 'knight', count: 2, required: true, reason: 'Heavy frontline needed against troll strength' },
                        { type: 'wizard', count: 1, required: true, reason: 'Magic needed to break troll regeneration' }
                    ],
                    preferredComposition: [
                        { type: 'heavy_assault', units: ['knight', 'knight', 'wizard', 'cleric', 'warlock'], bonus: 40 }
                    ],
                    tacticalAdvantage: {
                        'knight': { bonus: 30, reason: 'Heavy armor and weapons effective against troll' },
                        'wizard': { bonus: 25, reason: 'Arcane energy disrupts troll regeneration' },
                        'warlock': { bonus: 20, reason: 'Life drain counters troll vitality' },
                        'cleric': { bonus: 15, reason: 'Healing sustains prolonged battle' },
                        'goblin_merc': { bonus: -15, reason: 'Cowardly goblins flee from giant troll' }
                    }
                },
                rewards: {
                    baseXP: { [META_SKILLS.STRENGTH]: 120, [META_SKILLS.RESILIENCE]: 80, [META_SKILLS.STEWARDSHIP]: 60 },
                    gold: [200, 300],
                    loot: [
                        { type: 'item', id: 'item_ancient_key', qty: 1, chance: 35 },
                        { type: 'item', id: 'iron_ore', qty: [3, 6], chance: 70 },
                        { type: 'item', id: 'coal', qty: [2, 4], chance: 60 },
                        { type: 'blueprint', id: 'troll_hammer_blueprint', qty: 1, chance: 30 },
                        { type: 'blueprint', id: 'bridge_engineer_manual', qty: 1, chance: 15 }
                    ]
                },
                successRate: 50
            },

            // Tier 3: Elite expeditions requiring significant investment
            DRAGON_ROOST: {
                id: 'dragon_roost',
                name: 'The Dragon\'s Roost',
                description: 'A towering mountain peak where an ancient dragon hoards unimaginable wealth and magical artifacts.',
                difficulty: 'Epic',
                icon: '🏔️',
                enemyId: 'ancient_dragon',
                unlockRequirements: [
                    { type: 'skill', skill: META_SKILLS.STRENGTH, level: 25 },
                    { type: 'skill', skill: META_SKILLS.INTELLECT, level: 20 },
                    { type: 'skill', skill: META_SKILLS.RESILIENCE, level: 20 },
                    { type: 'army_power', minDps: 100 },
                    { type: 'empire_units', unitId: 'mage', minCount: 5 }
                ],
                duration: 300000, // 5 minutes
                resourceCost: { rations: 75, tools: 15 }, // Epic dragon hunt requires massive supplies and specialized equipment
                armyRequirements: {
                    minUnits: 8,
                    specificUnits: [
                        { type: 'knight', count: 3, required: true, reason: 'Dragonscale armor needed to survive dragon breath' },
                        { type: 'wizard', count: 2, required: true, reason: 'Arcane shields required against draconic magic' },
                        { type: 'cleric', count: 1, required: true, reason: 'Divine blessing needed to pierce dragon resistance' }
                    ],
                    preferredComposition: [
                        { type: 'dragon_slayer_formation', units: ['knight', 'knight', 'knight', 'wizard', 'wizard', 'cleric', 'warlock', 'druid'], bonus: 60 }
                    ],
                    tacticalAdvantage: {
                        'knight': { bonus: 40, reason: 'Dragonscale armor resists fire breath' },
                        'wizard': { bonus: 35, reason: 'Arcane mastery counters draconic magic' },
                        'cleric': { bonus: 30, reason: 'Divine power pierces ancient dragon resistance' },
                        'warlock': { bonus: 25, reason: 'Life steal sustained against dragon vitality' },
                        'druid': { bonus: 20, reason: 'Nature magic calms the beast briefly' },
                        'goblin_merc': { bonus: -30, reason: 'Terrified by dragon presence, flee at first roar' }
                    }
                },
                rewards: {
                    baseXP: { 
                        [META_SKILLS.STRENGTH]: 300, 
                        [META_SKILLS.INTELLECT]: 250, 
                        [META_SKILLS.RESILIENCE]: 200,
                        [META_SKILLS.ARTISTRY]: 150,
                        [META_SKILLS.STEWARDSHIP]: 180
                    },
                    gold: [1000, 2000],
                    loot: [
                        { type: 'item', id: 'dragon_scale', qty: [2, 5], chance: 90 },
                        { type: 'item', id: 'mythril_ore', qty: [1, 3], chance: 60 },
                        { type: 'blueprint', id: 'dragonslayer_sword_blueprint', qty: 1, chance: 40 },
                        { type: 'blueprint', id: 'dragon_armor_blueprint', qty: 1, chance: 25 },
                        { type: 'blueprint', id: 'teleportation_circle_blueprint', qty: 1, chance: 10 }
                    ]
                },
                successRate: 30
            },
            VOID_NEXUS: {
                id: 'void_nexus',
                name: 'The Void Nexus',
                description: 'A tear in reality itself, where cosmic horrors dwell and the fabric of existence grows thin.',
                difficulty: 'Legendary',
                icon: '🌌',
                enemyId: 'void_herald',
                unlockRequirements: [
                    { type: 'expedition_completed', expeditionId: 'dragon_roost', minTimes: 3 },
                    { type: 'skill', skill: META_SKILLS.INTELLECT, level: 30 },
                    { type: 'item_owned', itemId: 'item_ancient_key', minCount: 5 },
                    { type: 'total_army_power', minDps: 200, minHps: 100 }
                ],
                duration: 600000, // 10 minutes
                resourceCost: { rations: 120, tools: 25 }, // Legendary void expedition requires maximum supplies and advanced equipment
                armyRequirements: {
                    minUnits: 12,
                    specificUnits: [
                        { type: 'wizard', count: 4, required: true, reason: 'Reality anchors needed to stabilize void breaches' },
                        { type: 'cleric', count: 2, required: true, reason: 'Divine wards against cosmic corruption' },
                        { type: 'warlock', count: 2, required: true, reason: 'Void affinity to navigate eldritch realms' }
                    ],
                    preferredComposition: [
                        { type: 'void_expedition_force', units: ['wizard', 'wizard', 'wizard', 'wizard', 'cleric', 'cleric', 'warlock', 'warlock', 'knight', 'knight', 'druid', 'druid'], bonus: 80 }
                    ],
                    tacticalAdvantage: {
                        'wizard': { bonus: 50, reason: 'Arcane mastery required to comprehend void energies' },
                        'cleric': { bonus: 45, reason: 'Divine protection against cosmic madness' },
                        'warlock': { bonus: 40, reason: 'Void pacts grant immunity to eldritch effects' },
                        'knight': { bonus: 20, reason: 'Stalwart courage anchors team against despair' },
                        'druid': { bonus: 25, reason: 'Natural magic provides stability in chaos' },
                        'goblin_merc': { bonus: -50, reason: 'Driven completely mad by void exposure' }
                    }
                },
                rewards: {
                    baseXP: { 
                        [META_SKILLS.STRENGTH]: 500, 
                        [META_SKILLS.INTELLECT]: 600, 
                        [META_SKILLS.RESILIENCE]: 400,
                        [META_SKILLS.ARTISTRY]: 300,
                        [META_SKILLS.STEWARDSHIP]: 350
                    },
                    gold: [3000, 5000],
                    loot: [
                        { type: 'item', id: 'void_essence', qty: [1, 2], chance: 80 },
                        { type: 'item', id: 'cosmic_rune', qty: [3, 8], chance: 70 },
                        { type: 'blueprint', id: 'reality_anchor_blueprint', qty: 1, chance: 50 },
                        { type: 'blueprint', id: 'void_walker_cloak_blueprint', qty: 1, chance: 30 },
                        { type: 'blueprint', id: 'dimensional_forge_blueprint', qty: 1, chance: 15 }
                    ]
                },
                successRate: 20
            }
        },
        ARMY_CLASSES: {
            knight: { id: 'knight', name: 'Knight', emoji: '🛡️', role: 'Defender', description: 'Armored vanguard that holds the line.', baseCost: 150, costGrowth: 1.22, dps: 3, hps: 0.0, foodPerMin: 0.6 },
            wizard: { id: 'wizard', name: 'Wizard', emoji: '🪄', role: 'Caster', description: 'Arcane glass cannon raining destruction.', baseCost: 220, costGrowth: 1.24, dps: 5, hps: 0.0, foodPerMin: 0.5 },
            warlock: { id: 'warlock', name: 'Warlock', emoji: '☯️', role: 'Hexer', description: 'Curses enemies and siphons life.', baseCost: 260, costGrowth: 1.26, dps: 3.5, hps: 0.5, foodPerMin: 0.6 },
            cleric: { id: 'cleric', name: 'Cleric', emoji: '⛪', role: 'Healer', description: 'Faithful healer mending wounds.', baseCost: 200, costGrowth: 1.22, dps: 1, hps: 2.5, foodPerMin: 0.7 },
            druid: { id: 'druid', name: 'Druid', emoji: '🌿', role: 'Support', description: "Nature's embrace with heals and thorns.", baseCost: 240, costGrowth: 1.25, dps: 2, hps: 1.5, foodPerMin: 0.6 },
            goblin_merc: { id: 'goblin_merc', name: 'Goblin Merc', emoji: '🗡️', role: 'Rogue', description: 'Cheap hire, rowdy appetite.', baseCost: 100, costGrowth: 1.30, dps: 2, hps: 0, foodPerMin: 0.8 }
        }
    };
    
    // Medieval Empire Units dataset
    const EMPIRE_UNITS = {
        gold_miner: { id: 'gold_miner', name: 'Gold Miner', emoji: '⛏️', description: 'Mines gold from the mountain.', baseCost: 100, costGrowth: 1.18, goldPerSec: 1 },
        prospector: { id: 'prospector', name: 'Dwarven Prospector', emoji: '⛏️✨', description: 'Veteran miner with a nose for veins.', baseCost: 450, costGrowth: 1.20, goldPerSec: 3 },
        alchemist: { id: 'alchemist', name: 'Guild Alchemist', emoji: '⚗️', description: 'Brews tonics and sells them to nobles.', baseCost: 800, costGrowth: 1.22, goldPerSec: 2, runesPerSec: 0.02 },
        rune_scribe: { id: 'rune_scribe', name: 'Rune Scribe', emoji: '📜', description: 'Inscribes raw essence into runes slowly.', baseCost: 1200, costGrowth: 1.25, essencePerSec: 0.1 },
        
        // New utility resource buildings
        farm: { id: 'farm', name: 'Homestead Farm', emoji: '🌾', description: 'Produces Rations to supply your army.', baseCost: 150, costGrowth: 1.19, rationsPerSec: 0.1 },
        workshop: { id: 'workshop', name: 'Workshop', emoji: '🔧', description: 'Constructs basic Tools for expeditions.', baseCost: 200, costGrowth: 1.20, toolsPerSec: 0.05 },
        
        // Advanced building tiers with unique bonuses
        farm_tier2: { id: 'farm_tier2', name: 'Advanced Farmstead', emoji: '🏡', description: 'Enhanced farming with irrigation and crop rotation.', baseCost: 500, costGrowth: 1.25, rationsPerSec: 0.25, requires: { farm: 3 }, bonuses: { workerMorale: 5, expeditionSuccess: 2 } },
        farm_tier3: { id: 'farm_tier3', name: 'Agricultural Complex', emoji: '🌱', description: 'Industrial-scale farming with greenhouses and automation.', baseCost: 1500, costGrowth: 1.30, rationsPerSec: 0.6, requires: { farm_tier2: 2 }, bonuses: { workerMorale: 10, expeditionSuccess: 5, resourceEfficiency: 15 } },
        farm_tier4: { id: 'farm_tier4', name: 'Bountiful Valley', emoji: '🏞️', description: 'Legendary farming paradise with magical soil and eternal harvests.', baseCost: 5000, costGrowth: 1.35, rationsPerSec: 1.5, requires: { farm_tier2: 3 }, bonuses: { workerMorale: 20, expeditionSuccess: 10, resourceEfficiency: 30, rareDrops: 5 } },
        
        workshop_tier2: { id: 'workshop_tier2', name: 'Artisan Workshop', emoji: '⚒️', description: 'Master craftsmen create superior tools and equipment.', baseCost: 750, costGrowth: 1.28, toolsPerSec: 0.15, requires: { workshop: 3 }, bonuses: { toolQuality: 20, workerEfficiency: 8, equipmentDurability: 25 } },
        workshop_tier3: { id: 'workshop_tier3', name: 'Engineering Guild', emoji: '🏭', description: 'Advanced engineering with magical enhancements and automation.', baseCost: 2500, costGrowth: 1.32, toolsPerSec: 0.4, requires: { workshop_tier2: 2 }, bonuses: { toolQuality: 40, workerEfficiency: 15, equipmentDurability: 50, innovationChance: 10 } },
        workshop_tier4: { id: 'workshop_tier4', name: 'Celestial Forge', emoji: '⚡', description: 'Divine workshop where tools are blessed with otherworldly power.', baseCost: 8000, costGrowth: 1.38, toolsPerSec: 1.0, requires: { workshop_tier2: 3 }, bonuses: { toolQuality: 75, workerEfficiency: 25, equipmentDurability: 100, innovationChance: 25, divineBlessing: 15 } },
        
        // Specialized production buildings
        bakery: { id: 'bakery', name: 'Artisan Bakery', emoji: '🥖', description: 'Converts rations into premium food that boosts army morale.', baseCost: 300, costGrowth: 1.22, rationsPerSec: -0.05, premiumRationsPerSec: 0.03, requires: { farm: 2 }, bonuses: { armyMorale: 15, expeditionStamina: 10 } },
        smithy: { id: 'smithy', name: 'Master Smithy', emoji: '⚔️', description: 'Creates specialized tools for different worker types.', baseCost: 400, costGrowth: 1.24, toolsPerSec: -0.02, specializedToolsPerSec: 0.04, requires: { farm: 2 }, bonuses: { workerSpecialization: 20, equipmentBonuses: 15 } },
        
        // Utility and support buildings
        granary: { id: 'granary', name: 'Strategic Granary', emoji: '🏛️', description: 'Stores excess resources and provides empire-wide bonuses.', baseCost: 600, costGrowth: 1.26, storageBonus: 1000, requires: { farm: 1, workshop: 1 }, bonuses: { resourcePreservation: 20, emergencyRations: 50 } },
        trade_post: { id: 'trade_post', name: 'Merchant Trade Post', emoji: '🏪', description: 'Facilitates resource exchange and provides market bonuses.', baseCost: 800, costGrowth: 1.27, marketEfficiency: 15, requires: { farm: 1, workshop: 1 }, bonuses: { resourceTrading: 25, priceOptimization: 10 } }
    };
    GAME_DATA.UNITS = EMPIRE_UNITS;

    // Enhanced Empire System - Worker Equipment, Morale, and Facilities
    const WORKER_EQUIPMENT = {
        // Tools - Primary equipment for efficiency
        tools: {
            bronze_pickaxe: { 
                id: 'bronze_pickaxe', name: 'Bronze Pickaxe', icon: '⛏️', 
                description: 'Basic mining tool', cost: 50, 
                bonuses: { speed: 15, yield: 10 }, 
                durability: 100, compatibleSkills: ['mining'] 
            },
            iron_axe: { 
                id: 'iron_axe', name: 'Iron Axe', icon: '🪓', 
                description: 'Sharp woodcutting tool', cost: 75, 
                bonuses: { speed: 20, yield: 15 }, 
                durability: 150, compatibleSkills: ['woodcutting'] 
            },
            fishing_net: { 
                id: 'fishing_net', name: 'Fishing Net', icon: '🎣', 
                description: 'Improves catch rates', cost: 40, 
                bonuses: { yield: 25, quality: 10 }, 
                durability: 80, compatibleSkills: ['fishing'] 
            },
            farming_tools: { 
                id: 'farming_tools', name: 'Farming Tools', icon: '🚜', 
                description: 'Complete farming kit', cost: 65, 
                bonuses: { speed: 18, yield: 12 }, 
                durability: 120, compatibleSkills: ['farming'] 
            },
            hunting_gear: { 
                id: 'hunting_gear', name: 'Hunting Gear', icon: '🏹', 
                description: 'Traps and tracking tools', cost: 55, 
                bonuses: { speed: 22, yield: 8 }, 
                durability: 90, compatibleSkills: ['hunter'] 
            },
            excavation_kit: { 
                id: 'excavation_kit', name: 'Excavation Kit', icon: '🔍', 
                description: 'Precision digging tools', cost: 80, 
                bonuses: { speed: 12, yield: 20 }, 
                durability: 110, compatibleSkills: ['archaeology'] 
            },
            ancient_trowel: { 
                id: 'ancient_trowel', name: 'Ancient Trowel', icon: '🏺', 
                description: 'Sacred digging tool with mystical properties', cost: 120, 
                bonuses: { speed: 18, yield: 25, quality: 10 }, 
                durability: 140, compatibleSkills: ['archaeology'] 
            },
            artifact_brush: { 
                id: 'artifact_brush', name: 'Artifact Brush', icon: '🖌️', 
                description: 'Gentle cleaning tool for delicate finds', cost: 95, 
                bonuses: { yield: 30, quality: 20 }, 
                durability: 90, compatibleSkills: ['archaeology'] 
            },
            divination_orb: { 
                id: 'divination_orb', name: 'Divination Orb', icon: '🔮', 
                description: 'Focuses mystical energy', cost: 90, 
                bonuses: { speed: 25, quality: 15 }, 
                durability: 70, compatibleSkills: ['divination'] 
            },
            crystal_scrying: { 
                id: 'crystal_scrying', name: 'Crystal Scrying Ball', icon: '💎', 
                description: 'Enhanced divination with crystal clarity', cost: 140, 
                bonuses: { speed: 30, quality: 25, yield: 15 }, 
                durability: 100, compatibleSkills: ['divination'] 
            },
            mystical_tome: { 
                id: 'mystical_tome', name: 'Mystical Tome', icon: '📚', 
                description: 'Ancient knowledge enhances divination', cost: 110, 
                bonuses: { speed: 20, quality: 30, morale: 10 }, 
                durability: 120, compatibleSkills: ['divination'] 
            },
            
            // Universal tools (work for any skill)
            workers_meal: { 
                id: 'workers_meal', name: "Worker's Meal", icon: '🍖', 
                description: 'Nutritious meal for energy', cost: 15, 
                bonuses: { speed: 10, morale: 5 }, 
                durability: 1, compatibleSkills: 'all', consumable: true 
            },
            energy_potion: { 
                id: 'energy_potion', name: 'Energy Potion', icon: '⚡', 
                description: 'Magical stamina boost', cost: 35, 
                bonuses: { speed: 30 }, 
                durability: 1, compatibleSkills: 'all', consumable: true 
            }
        },
        
        // Clothing - Secondary equipment for protection and comfort
        clothing: {
            work_clothes: { 
                id: 'work_clothes', name: 'Work Clothes', icon: '👔', 
                description: 'Durable work attire', cost: 25, 
                bonuses: { morale: 10, durability_save: 15 }, 
                durability: 200, compatibleSkills: 'all' 
            },
            safety_gear: { 
                id: 'safety_gear', name: 'Safety Gear', icon: '🦺', 
                description: 'Protective equipment', cost: 45, 
                bonuses: { morale: 15, accident_prevention: 25 }, 
                durability: 180, compatibleSkills: ['mining', 'woodcutting', 'archaeology'] 
            },
            weather_cloak: { 
                id: 'weather_cloak', name: 'Weather Cloak', icon: '🧥', 
                description: 'Protection from elements', cost: 35, 
                bonuses: { morale: 12, yield: 8 }, 
                durability: 160, compatibleSkills: ['fishing', 'farming', 'hunter'] 
            },
            archaeologist_vest: { 
                id: 'archaeologist_vest', name: 'Archaeologist Vest', icon: '🥋', 
                description: 'Professional field gear with many pockets', cost: 55, 
                bonuses: { morale: 18, yield: 12, durability_save: 20 }, 
                durability: 200, compatibleSkills: ['archaeology'] 
            },
            diviner_robes: { 
                id: 'diviner_robes', name: 'Diviner Robes', icon: '👘', 
                description: 'Mystical robes that enhance divination', cost: 65, 
                bonuses: { morale: 20, quality: 15, speed: 10 }, 
                durability: 180, compatibleSkills: ['divination'] 
            }
        }
    };

    const EMPIRE_FACILITIES = {
        barracks: {
            id: 'barracks', name: 'Worker Barracks', icon: '🏠',
            description: 'Housing for workers increases capacity and morale',
            baseCost: 500, costGrowth: 1.5,
            levels: [
                { workers: 10, morale: 5, maintenance: 2 },
                { workers: 25, morale: 8, maintenance: 4 },
                { workers: 50, morale: 12, maintenance: 7 },
                { workers: 100, morale: 15, maintenance: 12 },
                { workers: 200, morale: 20, maintenance: 20 }
            ]
        },
        workshop: {
            id: 'workshop', name: 'Equipment Workshop', icon: '🔧',
            description: 'Crafts and maintains worker equipment',
            baseCost: 750, costGrowth: 1.4,
            levels: [
                { repair_rate: 1.2, craft_speed: 1.1, maintenance: 3 },
                { repair_rate: 1.4, craft_speed: 1.25, maintenance: 5 },
                { repair_rate: 1.7, craft_speed: 1.4, maintenance: 8 },
                { repair_rate: 2.0, craft_speed: 1.6, maintenance: 12 },
                { repair_rate: 2.5, craft_speed: 2.0, maintenance: 18 }
            ]
        },
        academy: {
            id: 'academy', name: 'Training Academy', icon: '🎓',
            description: 'Trains workers and provides skill bonuses',
            baseCost: 1000, costGrowth: 1.6,
            levels: [
                { training_speed: 1.1, skill_bonus: 5, maintenance: 4 },
                { training_speed: 1.25, skill_bonus: 10, maintenance: 7 },
                { training_speed: 1.4, skill_bonus: 15, maintenance: 11 },
                { training_speed: 1.6, skill_bonus: 20, maintenance: 16 },
                { training_speed: 2.0, skill_bonus: 30, maintenance: 25 }
            ]
        },
        market: {
            id: 'market', name: 'Trading Market', icon: '🏪',
            description: 'Reduces equipment costs and increases selling prices',
            baseCost: 600, costGrowth: 1.45,
            levels: [
                { cost_reduction: 5, sell_bonus: 10, maintenance: 2 },
                { cost_reduction: 10, sell_bonus: 20, maintenance: 4 },
                { cost_reduction: 15, sell_bonus: 30, maintenance: 7 },
                { cost_reduction: 20, sell_bonus: 40, maintenance: 10 },
                { cost_reduction: 30, sell_bonus: 60, maintenance: 15 }
            ]
        },
        canteen: {
            id: 'canteen', name: 'Worker Canteen', icon: '🍽️',
            description: 'Provides meals and maintains worker morale',
            baseCost: 400, costGrowth: 1.3,
            levels: [
                { morale_regen: 1, hunger_reduction: 10, maintenance: 5 },
                { morale_regen: 2, hunger_reduction: 20, maintenance: 8 },
                { morale_regen: 3, hunger_reduction: 30, maintenance: 12 },
                { morale_regen: 5, hunger_reduction: 45, maintenance: 18 },
                { morale_regen: 8, hunger_reduction: 60, maintenance: 25 }
            ]
        }
    };

    // Equipment Policies - Smart bulk management system
    const EQUIPMENT_POLICIES = {
        auto_equip: {
            name: 'Auto-Equip Best Available',
            description: 'Automatically equips the best available tools to new workers',
            enabled: true
        },
        maintain_equipment: {
            name: 'Auto-Maintain Equipment',
            description: 'Automatically repairs equipment when durability is low',
            enabled: true,
            threshold: 25 // Repair when below 25% durability
        },
        bulk_provision: {
            name: 'Bulk Provisioning',
            description: 'Automatically provides consumables (meals, potions) to workers',
            enabled: false,
            consumables: ['workers_meal'] // Which consumables to auto-provide
        },
        upgrade_policy: {
            name: 'Equipment Upgrade Policy',
            description: 'Automatically upgrades equipment when better versions become available',
            enabled: false,
            priority: 'efficiency' // 'efficiency', 'cost', 'durability'
        }
    };

    // Add to GAME_DATA
    // Daily Attunement - Health data integration system
    const DAILY_ATTUNEMENT = {
        name: "Daily Attunement",
        description: "Sync with your wellness journey. Real-life self-care becomes in-game rewards.",
        icon: "🌱",
        color: "text-green-400",
        bgColor: "from-green-900/30 to-emerald-900/30",
        borderColor: "border-green-500",
        rewards: {
            steps: {
                name: "Steps Taken",
                icon: "👟",
                rate: 100, // steps per gold
                goldPer: 1,
                description: "Walking is the foundation of health"
            },
            mindfulness: {
                name: "Mindful Minutes",
                icon: "🧘",
                rate: 1, // minutes per reward
                shardsPer: 10,
                description: "Mental self-care strengthens the spirit"
            },
            sleep: {
                name: "Quality Sleep",
                icon: "😴",
                rates: [
                    { hours: 8, bonus: 50, description: "Perfect rest" },
                    { hours: 7, bonus: 30, description: "Good rest" },
                    { hours: 6, bonus: 15, description: "Adequate rest" },
                    { hours: 5, bonus: 5, description: "Light rest" }
                ],
                description: "Rest is the foundation of resilience"
            }
        },
        messages: [
            "Your body is your temple. Every step honors it.",
            "Mindfulness is not about thinking less, but about thinking with purpose.",
            "Sleep is not lost time - it's an investment in tomorrow's strength.",
            "Walking is meditation in motion.",
            "A well-rested mind sees opportunities where a tired mind sees obstacles.",
            "Every mindful breath is a victory over chaos.",
            "Your health journey is your hero's journey.",
            "Small steps daily create giant leaps over time."
        ]
    };
    
    // Well of Serenity - Starting ritual for new players
    const WELL_OF_SERENITY = {
        name: "Well of Serenity",
        description: "A sacred place for new beginnings. Meditate here to receive clarity and your first boon.",
        icon: "🌅",
        color: "text-amber-400",
        bgColor: "from-amber-900/30 to-orange-900/30",
        borderColor: "border-amber-500",
        meditationDuration: 180000, // 3 minutes in milliseconds
        boon: {
            gold: 50,
            rations: 10,
            message: "Boon of Clarity granted. Your journey begins with wisdom and purpose."
        },
        passages: [
            "The secret of change is to focus all of your energy not on fighting the old, but on building the new.",
            "A journey of a thousand miles begins with a single step.",
            "Patience is not the ability to wait, but the ability to keep a good attitude while waiting.",
            "Every morning is a new beginning. Take a deep breath and start again.",
            "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            "What you get by achieving your goals is not as important as what you become by achieving your goals.",
            "Success is not final, failure is not fatal: it is the courage to continue that counts.",
            "The only way to do great work is to love what you do.",
            "Life is not about waiting for the storm to pass, but learning to dance in the rain.",
            "Your time is limited, don't waste it living someone else's life."
        ]
    };
    
    // Life Paths for Second Life selection after ascension
    const LIFE_PATHS = {
        'strength': {
            name: 'Path of the Warrior',
            description: 'Focus on physical prowess and combat mastery. Your strength and resilience will be your greatest assets.',
            icon: '⚔️',
            color: 'text-red-400',
            bgColor: 'from-red-900/30 to-orange-900/30',
            borderColor: 'border-red-500',
            bonuses: {
                'combat_damage': 1.5, // 50% more damage in combat
                'stamina_regen': 1.3,  // 30% faster stamina regeneration
                'army_dps': 1.4,       // 40% more army DPS
                'expedition_success': 1.2 // 20% higher expedition success rate
            },
            starting_bonuses: {
                'stamina': 50,         // +50 starting stamina
                'hp': 50,             // +50 starting HP
                'combat_skill_xp': 1.5 // 50% more combat skill XP
            }
        },
        'intellect': {
            name: 'Path of the Sage',
            description: 'Dedicate yourself to knowledge and wisdom. Your mind will be your most powerful weapon.',
            icon: '🧠',
            color: 'text-blue-400',
            bgColor: 'from-blue-900/30 to-cyan-900/30',
            borderColor: 'border-blue-500',
            bonuses: {
                'meta_skill_xp': 2.0,  // 100% more meta skill XP
                'essence_generation': 1.3, // 30% more essence per ascension
                'skill_mastery': 1.4,   // 40% faster skill mastery
                'research_efficiency': 1.5 // 50% more efficient research
            },
            starting_bonuses: {
                'runes': 20,           // +20 starting runes
                'meta_skill_levels': 5, // +5 levels to all meta skills
                'intellect_bonus': 2.0  // 2x intellect bonus to other skills
            }
        },
        'stewardship': {
            name: 'Path of the Merchant',
            description: 'Master the art of commerce and empire building. Your wealth and influence will grow exponentially.',
            icon: '💰',
            color: 'text-yellow-400',
            bgColor: 'from-yellow-900/30 to-amber-900/30',
            borderColor: 'border-yellow-500',
            bonuses: {
                'gold_generation': 2.0,  // 100% more gold generation
                'empire_efficiency': 1.6, // 60% more efficient empire production
                'worker_productivity': 1.4, // 40% more productive workers
                'trade_bonuses': 1.5     // 50% better trade deals
            },
            starting_bonuses: {
                'gold': 500,            // +500 starting gold
                'empire_units': 2,      // +2 of each empire unit type
                'worker_levels': 3      // +3 levels to all workers
            }
        },
        'resilience': {
            name: 'Path of the Survivor',
            description: 'Embrace endurance and adaptability. You will outlast all challenges and emerge stronger.',
            icon: '🛡️',
            color: 'text-green-400',
            bgColor: 'from-green-900/30 to-emerald-900/30',
            borderColor: 'border-green-500',
            bonuses: {
                'hp_regeneration': 2.0,   // 100% faster HP regeneration
                'damage_resistance': 1.5,  // 50% damage resistance
                'recovery_speed': 1.4,    // 40% faster recovery from status effects
                'expedition_durability': 1.3 // 30% more expedition durability
            },
            starting_bonuses: {
                'hp': 100,               // +100 starting HP
                'max_hp': 50,            // +50 max HP
                'defense_bonus': 1.5     // 50% defense bonus
            }
        },
        'artistry': {
            name: 'Path of the Creator',
            description: 'Channel your creative spirit and artistic vision. Beauty and innovation will be your legacy.',
            icon: '🎨',
            color: 'text-purple-400',
            bgColor: 'from-purple-900/30 to-pink-900/30',
            borderColor: 'border-purple-500',
            bonuses: {
                'creative_xp': 2.0,      // 100% more creative skill XP
                'inspiration_generation': 1.5, // 50% more inspiration
                'unique_rewards': 1.4,   // 40% chance for unique rewards
                'aesthetic_bonuses': 1.6 // 60% better aesthetic bonuses
            },
            starting_bonuses: {
                'artistic_skills': 10,   // +10 levels to all artistic skills
                'inspiration': 100,      // +100 starting inspiration
                'creative_mastery': 1.3  // 30% creative mastery bonus
            }
        }
    };
    
    // Add additional properties to GAME_DATA
    GAME_DATA.LIFE_PATHS = LIFE_PATHS;
    GAME_DATA.WELL_OF_SERENITY = WELL_OF_SERENITY;
    
    // Add to GAME_DATA
    GAME_DATA.WORKER_EQUIPMENT = WORKER_EQUIPMENT;
    GAME_DATA.EMPIRE_FACILITIES = EMPIRE_FACILITIES;
    GAME_DATA.EQUIPMENT_POLICIES = EQUIPMENT_POLICIES;
    GAME_DATA.DAILY_ATTUNEMENT = DAILY_ATTUNEMENT;
    GAME_DATA.UNITS = EMPIRE_UNITS;


    class Skill {
        constructor(id, name) { this.id = id; this.name = name; this.level = 1; this.currentXP = 0; this.xpToNextLevel = 100; }
        addXP(amount, game) {
            if (this.level >= 99) return;
            const intellectBonus = (this.name === META_SKILLS.INTELLECT) ? 0 : (game.state.player.meta_skills[META_SKILLS.INTELLECT].level - 1) * 0.02;
            let bonusAmount = amount * (1 + (game.state.bonfire.active ? game.state.bonfire.xpBoost : 0));
            bonusAmount *= (1 + intellectBonus) * (game.hasBuff('doubleXP') ? 2 : 1);
            this.currentXP += bonusAmount;
            let leveledUp = false;
            while (this.currentXP >= this.xpToNextLevel) {
                if (this.level >= 99) { this.currentXP = 0; break; }
                this.level++; this.currentXP -= this.xpToNextLevel; this.xpToNextLevel = Math.floor(this.xpToNextLevel * 1.15);
                leveledUp = true;
                game.uiManager.showFloatingText(`🎉 ${this.name} Level Up! (Level ${this.level}) 🎉`, 'text-yellow-400');
            }
            
            // Update total meta skill levels for ascension system if this is a meta skill
            if (game && Object.values(META_SKILLS).includes(this.name) && leveledUp) {
                game.updateTotalMetaSkillLevels();
            }
            
            // Trigger live UI update after XP/level changes
            if (game?.uiManager) {
                // Small delay to ensure DOM is ready and visual feedback is smooth
                setTimeout(() => {
                    game.uiManager.updateMetaSkillsSidebar();
                }, leveledUp ? 100 : 25);
            }
        }
    }

    class Mastery {
        constructor() { this.level = 0; this.currentXP = 0; this.xpToNextLevel = 50; }
        addXP(amount) { if (this.level >= 99) return; this.currentXP += amount; while (this.currentXP >= this.xpToNextLevel) { if (this.level >= 99) { this.currentXP = 0; break; } this.level++; this.currentXP -= this.xpToNextLevel; this.xpToNextLevel = Math.floor(this.xpToNextLevel * 1.08); } }
    }

    class GameState {
        constructor() {
            this.player = {
                gold: 100,
                runes: 5,
                stamina: 100,
                staminaMax: 100,
                hp: 100,
                hpMax: 100,
                weapon: null,
                skills: {},
                meta_skills: {},
                mastery: {},
                activeBuffs: {}, // { effectKey: expiryTimestamp }
                // Ascension system properties
                essence: 0, // Permanent currency for prestige system
                essence_shards: 0, // Sub-currency: 100 shards = 1 essence
                ascension_upgrades: {}, // Store purchased permanent upgrades
                totalMetaSkillLevels: 0, // Cached value to track trigger condition
                life_path: null, // Current life path for this incarnation
            };
            
            // Apply ascension upgrades to starting stats
            this.applyAscensionUpgrades();
            this.bank = {};
            // Initialize bank with some basic starting items for glyph crafting
            this.bank.logs = 10;
            this.bank.feathers = 5;
            this.bank.arrow_shafts = 0;
            this.bank.copper_ore = 5;
            this.bank.tin_ore = 3;
            this.bank.pale_energy = 2;
            this.bank.flickering_energy = 1;
            
                    // Starting items for new skills
                    this.bank.herb_common = 3;
            this.bank.potion_base = 2;
            this.bank.coal = 2;
            this.bank.wheat = 5;
            this.bank.flour = 2;
            this.bank.water = 3;
        
        // Starting tools for workers
        this.bank.bronze_axe = 1;
        this.bank.bronze_pickaxe = 1;
            this.activeAction = null; // gathering/artisan action (legacy - kept for compatibility)
            this.activeActions = {}; // multiple active actions by skillId
            this.selectedRecipe = {}; // track selected recipe for each artisan skill
            this.crafting = {}; // track active crafting sessions by skillId
            this.bonfire = { active: false, expiry: 0, xpBoost: 0 };
            this.lastUpdate = Date.now();

            // Combat state
            this.combat = { inCombat: false, enemy: null, lastPlayerAttack: 0, lastEnemyAttack: 0, playerAttackSpeedMs: 1600 };
            
            // Expedition state
            this.expeditions = { 
                active: null, // Current expedition
                history: {}, // Completed expeditions count { expeditionId: completedCount }
                unlocked: ['goblin_warren'], // Always start with goblin warren
                startTime: null,
                progress: 0
            };

            // Clicker state
            this.clicker = { goldPerClick: 1, autoClickers: 0, autoRateMs: 1000, lastAutoTick: Date.now(), upgrades: { clickPowerLevel: 0, autoClickerLevel: 0, multiplierLevel: 0 } };

            // Empire/Army systems (ensure present for new games)
            this.empire = {
                units: {},
                lastTick: Date.now(),
                production: { goldPerSec: 0, runesPerSec: 0, essencePerSec: 0 },
                buffers: { gold: 0, runes: 0, essence: 0 }
            };
            Object.keys(GAME_DATA.UNITS || {}).forEach(id => { this.empire.units[id] = 0; });

            this.army = {
                units: {},
                lastTick: Date.now(),
                production: { dps: 0, hps: 0, hungry: false },
                upkeep: { foodBuffer: 0, hungry: false },
                fly: { accumDmg: 0, accumHeal: 0, lastFlush: Date.now() },
                hp: 100,
                hpMax: 100,
                mana: 50,
                manaMax: 50,
                equipment: { weapon: null, shield: null, helmet: null, ring: null, amulet: null }
            };
            Object.keys(GAME_DATA.ARMY_CLASSES || {}).forEach(id => { this.army.units[id] = 0; });

            Object.keys(GAME_DATA.SKILLS).forEach(id => {
                this.player.skills[id] = new Skill(id, GAME_DATA.SKILLS[id].name);
                this.player.mastery[id] = {};
                // Ensure skill has all required properties
                if (!this.player.skills[id].currentXP) this.player.skills[id].currentXP = 0;
                if (!this.player.skills[id].xpToNextLevel) this.player.skills[id].xpToNextLevel = 100;
                if (!this.player.skills[id].level) this.player.skills[id].level = 1;
            });
            Object.values(META_SKILLS).forEach(name => { this.player.meta_skills[name] = new Skill(name, name); });

            // Enhanced Worker systems with Equipment, Morale, and Facilities
            this.workers = {
                woodcutting: {
                    total: 0,
                    upgrades: { speedLevel: 0, yieldLevel: 0 },
                    assigned: {},
                    progress: {},
                    // Enhanced systems
                    equipment: { 
                        tools: {}, // { equipmentId: quantity }
                        clothing: {},
                        policies: { ...GAME_DATA.EQUIPMENT_POLICIES }
                    },
                    morale: 100,
                    moraleFactors: { base: 100, equipment: 0, facilities: 0, overwork: 0 }
                },
                mining: {
                    total: 0,
                    upgrades: { speedLevel: 0, yieldLevel: 0, depthLevel: 0, cartLevel: 0 },
                    assigned: {},
                    progress: {},
                    equipment: { 
                        tools: {},
                        clothing: {},
                        policies: { ...GAME_DATA.EQUIPMENT_POLICIES }
                    },
                    morale: 100,
                    moraleFactors: { base: 100, equipment: 0, facilities: 0, overwork: 0 }
                },
                fishing: {
                    total: 0,
                    boats: 0,
                    upgrades: { netLevel: 0, baitLevel: 0, boatLevel: 0 },
                    assigned: {},
                    progress: {},
                    equipment: { 
                        tools: {},
                        clothing: {},
                        policies: { ...GAME_DATA.EQUIPMENT_POLICIES }
                    },
                    morale: 100,
                    moraleFactors: { base: 100, equipment: 0, facilities: 0, overwork: 0 }
                },
                farming: {
                    total: 0,
                    upgrades: { irrigationLevel: 0, toolsLevel: 0, compostLevel: 0, tractorLevel: 0 },
                    assigned: {},
                    progress: {},
                    equipment: { 
                        tools: {},
                        clothing: {},
                        policies: { ...GAME_DATA.EQUIPMENT_POLICIES }
                    },
                    morale: 100,
                    moraleFactors: { base: 100, equipment: 0, facilities: 0, overwork: 0 }
                },
                hunter: {
                    total: 0,
                    upgrades: { speedLevel: 0, yieldLevel: 0 },
                    assigned: {},
                    progress: {},
                    equipment: { 
                        tools: {},
                        clothing: {},
                        policies: { ...GAME_DATA.EQUIPMENT_POLICIES }
                    },
                    morale: 100,
                    moraleFactors: { base: 100, equipment: 0, facilities: 0, overwork: 0 }
                },
                archaeology: {
                    total: 0,
                    upgrades: { speedLevel: 0, yieldLevel: 0 },
                    assigned: {},
                    progress: {},
                    equipment: { 
                        tools: {},
                        clothing: {},
                        policies: { ...GAME_DATA.EQUIPMENT_POLICIES }
                    },
                    morale: 100,
                    moraleFactors: { base: 100, equipment: 0, facilities: 0, overwork: 0 }
                },
                divination: {
                    total: 0,
                    upgrades: { speedLevel: 0, yieldLevel: 0 },
                    assigned: {},
                    progress: {},
                    equipment: { 
                        tools: {},
                        clothing: {},
                        policies: { ...GAME_DATA.EQUIPMENT_POLICIES }
                    },
                    morale: 100,
                    moraleFactors: { base: 100, equipment: 0, facilities: 0, overwork: 0 }
                },
                smithing: {
                    total: 0,
                    upgrades: { speedLevel: 0, yieldLevel: 0, qualityLevel: 0 },
                    assigned: {},
                    progress: {},
                    equipment: { 
                        tools: {},
                        clothing: {},
                        policies: { ...GAME_DATA.EQUIPMENT_POLICIES }
                    },
                    morale: 100,
                    moraleFactors: { base: 100, equipment: 0, facilities: 0, overwork: 0 }
                },
                woodworking: {
                    total: 0,
                    upgrades: { speedLevel: 0, yieldLevel: 0, precisionLevel: 0 },
                    assigned: {},
                    progress: {},
                    equipment: { 
                        tools: {},
                        clothing: {},
                        policies: { ...GAME_DATA.EQUIPMENT_POLICIES }
                    },
                    morale: 100,
                    moraleFactors: { base: 100, equipment: 0, facilities: 0, overwork: 0 }
                },
                runecrafting: {
                    total: 0,
                    upgrades: { speedLevel: 0, yieldLevel: 0, essenceLevel: 0 },
                    assigned: {},
                    progress: {},
                    equipment: { 
                        tools: {},
                        clothing: {},
                        policies: { ...GAME_DATA.EQUIPMENT_POLICIES }
                    },
                    morale: 100,
                    moraleFactors: { base: 100, equipment: 0, facilities: 0, overwork: 0 }
                },
                cooking: {
                    total: 0,
                    upgrades: { speedLevel: 0, yieldLevel: 0, qualityLevel: 0 },
                    assigned: {},
                    progress: {},
                    equipment: { 
                        tools: {},
                        clothing: {},
                        policies: { ...GAME_DATA.EQUIPMENT_POLICIES }
                    },
                    morale: 100,
                    moraleFactors: { base: 100, equipment: 0, facilities: 0, overwork: 0 }
                },
                herblore: {
                    total: 0,
                    upgrades: { speedLevel: 0, yieldLevel: 0, qualityLevel: 0 },
                    assigned: {},
                    progress: {},
                    equipment: { 
                        tools: {},
                        clothing: {},
                        policies: { ...GAME_DATA.EQUIPMENT_POLICIES }
                    },
                    morale: 100,
                    moraleFactors: { base: 100, equipment: 0, facilities: 0, overwork: 0 }
                },
                crafting: {
                    total: 0,
                    upgrades: { speedLevel: 0, yieldLevel: 0, qualityLevel: 0 },
                    assigned: {},
                    progress: {},
                    equipment: { 
                        tools: {},
                        clothing: {},
                        policies: { ...GAME_DATA.EQUIPMENT_POLICIES }
                    },
                    morale: 100,
                    moraleFactors: { base: 100, equipment: 0, facilities: 0, overwork: 0 }
                }
            };
            
            // Empire facilities and management
            this.empire.facilities = {};
            Object.keys(GAME_DATA.EMPIRE_FACILITIES || {}).forEach(id => { 
                this.empire.facilities[id] = { level: 0, active: true }; 
            });
            
            // Empire-wide equipment inventory (bulk storage)
            this.empire.equipment = {
                inventory: {}, // { equipmentId: quantity }
                policies: { ...GAME_DATA.EQUIPMENT_POLICIES },
                maintenanceQueue: [] // Equipment needing repair
            };
            // Seed worker action keys
            (GAME_DATA.ACTIONS.woodcutting || []).forEach(a => { this.workers.woodcutting.assigned[a.id] = 0; this.workers.woodcutting.progress[a.id] = 0; });
            (GAME_DATA.ACTIONS.mining || []).forEach(a => { this.workers.mining.assigned[a.id] = 0; this.workers.mining.progress[a.id] = 0; });
            (GAME_DATA.ACTIONS.fishing || []).forEach(a => { this.workers.fishing.assigned[a.id] = 0; this.workers.fishing.progress[a.id] = 0; });
            (GAME_DATA.ACTIONS.farming || []).forEach(a => { this.workers.farming.assigned[a.id] = 0; this.workers.farming.progress[a.id] = 0; });
            (GAME_DATA.ACTIONS.hunter || []).forEach(a => { this.workers.hunter.assigned[a.id] = 0; this.workers.hunter.progress[a.id] = 0; });
            (GAME_DATA.ACTIONS.archaeology || []).forEach(a => { this.workers.archaeology.assigned[a.id] = 0; this.workers.archaeology.progress[a.id] = 0; });
            (GAME_DATA.ACTIONS.divination || []).forEach(a => { this.workers.divination.assigned[a.id] = 0; this.workers.divination.progress[a.id] = 0; });
            
            // Seed artisan skill action keys
            (GAME_DATA.RECIPES.smithing || []).forEach(r => { this.workers.smithing.assigned[r.id] = 0; this.workers.smithing.progress[r.id] = 0; });
            (GAME_DATA.RECIPES.cooking || []).forEach(r => { this.workers.cooking.assigned[r.id] = 0; this.workers.cooking.progress[r.id] = 0; });
            (GAME_DATA.RECIPES.woodworking || []).forEach(r => { this.workers.woodworking.assigned[r.id] = 0; this.workers.woodworking.progress[r.id] = 0; });
            (GAME_DATA.RECIPES.runecrafting || []).forEach(r => { this.workers.runecrafting.assigned[r.id] = 0; this.workers.runecrafting.progress[r.id] = 0; });
            (GAME_DATA.RECIPES.herblore || []).forEach(r => { this.workers.herblore.assigned[r.id] = 0; this.workers.herblore.progress[r.id] = 0; });
            (GAME_DATA.RECIPES.crafting || []).forEach(r => { this.workers.crafting.assigned[r.id] = 0; this.workers.crafting.progress[r.id] = 0; });
            
            // Add starting workers for artisan skills
            this.workers.smithing.total = 1;
            this.workers.cooking.total = 1;
            this.workers.herblore.total = 1;
            this.workers.crafting.total = 1;
            
            // Initialize homestead with completed_sagas for ascension system
            this.homestead = {
                completed_sagas: [], // Store titles of completed Sagas to "memorialize" them after a reset
                wellOfSerenity: {
                    hasReceivedBoon: false,
                    isMeditating: false,
                    meditationStartTime: null,
                    meditationProgress: 0
                },
                dailyAttunement: {
                    lastSyncDate: null,
                    hasClaimedToday: false,
                    healthData: {
                        steps: 0,
                        mindfulMinutes: 0,
                        sleepHours: 0
                    },
                    pendingRewards: {
                        gold: 0,
                        essenceShards: 0,
                        staminaBonus: 0
                    },
                    totalStats: {
                        totalSteps: 0,
                        totalMindfulMinutes: 0,
                        totalSleepHours: 0,
                        daysTracked: 0
                    }
                }
            };
            
            // Apply ascension upgrades to starting stats
            this.applyAscensionUpgrades();
        }
        
        applyAscensionUpgrades() {
            // Apply starting gold boost
            const goldBoost = (this.player.ascension_upgrades.starting_gold_boost || 0) * 25;
            this.player.gold += goldBoost;
            
            // Apply starting stamina boost
            const staminaBoost = (this.player.ascension_upgrades.starting_stamina_boost || 0) * 20;
            this.player.stamina += staminaBoost;
            this.player.staminaMax += staminaBoost;
            
            // Apply worker level boost
            const workerBoost = (this.player.ascension_upgrades.permanent_worker_boost || 0);
            if (workerBoost > 0) {
                // This will be applied when workers are initialized
                this.workerLevelBoost = workerBoost;
            }
        }
    }

    class GameManager {
        constructor() { this.state = new GameState(); this.uiManager = new UIManager(this); this.gameLoop = null; }
        init() { this.loadGame(); this.uiManager.init(); this.gameLoop = setInterval(() => this.update(), 100); setInterval(() => this.saveGame(), 10000); window.addEventListener('beforeunload', () => this.saveGame()); }

        hasBuff(effectKey) { const exp = this.state.player.activeBuffs[effectKey]; return exp && Date.now() < exp; }

        goldMultiplier() { let mult = 1; if (this.hasBuff('doubleGold')) mult *= 2; const gh = GAME_DATA.SPELLS.find(s => s.effect === 'goldBoost'); if (this.hasBuff('goldBoost')) mult *= (1 + (gh?.magnitude || 0)); const artistry = 1 + (this.state.player.meta_skills[META_SKILLS.ARTISTRY].level - 1) * 0.02; return mult * artistry; }

        update() {
            const now = Date.now(); const delta = (now - this.state.lastUpdate); this.state.lastUpdate = now;

            // Stamina regen
            const resilienceBonus = 1 + (this.state.player.meta_skills[META_SKILLS.RESILIENCE].level - 1) * 0.05;
            const regenPerSecond = (10 / 60) * resilienceBonus;
            this.state.player.stamina = Math.min(this.state.player.staminaMax, this.state.player.stamina + (regenPerSecond * (delta / 1000)));

            // Army HP/Mana regeneration (slower than player stamina)
            const armyHpRegenPerSecond = 2 / 60; // 2 HP per minute
            const armyManaRegenPerSecond = 1 / 60; // 1 Mana per minute
            this.state.army.hp = Math.min(this.state.army.hpMax, this.state.army.hp + (armyHpRegenPerSecond * (delta / 1000)));
            this.state.army.mana = Math.min(this.state.army.manaMax, this.state.army.mana + (armyManaRegenPerSecond * (delta / 1000)));

            // Bonfire expiry
            if (this.state.bonfire.active && now > this.state.bonfire.expiry) { this.state.bonfire.active = false; this.state.bonfire.xpBoost = 0; this.uiManager.renderView(); }

            // Gathering/Artisan action loop - handle multiple active actions
            Object.values(this.state.activeActions).forEach(action => {
                console.log('Processing action in update loop:', action);
                action.progress += delta;
                const actionTime = this.calculateActionTime(action);
                console.log(`Action progress: ${action.progress}/${actionTime} (${((action.progress/actionTime)*100).toFixed(1)}%)`);
                
                if (action.progress >= actionTime) {
                    console.log(`Action completed! Skill: ${action.skillId}, Type: ${action.type}`);
                    const loops = Math.floor(action.progress / actionTime);
                    this.gainActionRewards(action, loops);
                    
                    // Check if this is an artisan skill (has recipes)
                    if (GAME_DATA.RECIPES[action.skillId]) {
                        console.log(`Artisan skill detected, clearing action for ${action.skillId}`);
                        // Artisan skills complete after 1 item and stop completely
                        delete this.state.activeActions[action.skillId];
                        this.uiManager.showFloatingText(`🎉 Crafted ${GAME_DATA.ITEMS[action.output?.itemId]?.name || 'item'}!`, 'text-green-400');
                        // Force UI update
                        this.uiManager.renderView();
                    } else {
                        console.log(`Gathering skill detected, continuing action for ${action.skillId}`);
                        // Gathering skills continue indefinitely
                        action.progress %= actionTime;
                    }
                }
            });
            
            // Legacy single action loop (only if no actions in new system)
            if (this.state.activeAction && Object.keys(this.state.activeActions).length === 0) {
                const action = this.state.activeAction;
                action.progress += delta;
                const actionTime = this.calculateActionTime(action);
                if (action.progress >= actionTime) {
                    const loops = Math.floor(action.progress / actionTime);
                    this.gainActionRewards(action, loops);
                    
                    // Check if this is an artisan skill (has recipes)
                    if (GAME_DATA.RECIPES[action.skillId]) {
                        // Artisan skills complete after 1 item and stop completely
                        this.state.activeAction = null;
                        this.uiManager.showFloatingText(`🎉 Crafted ${GAME_DATA.ITEMS[action.output?.itemId]?.name || 'item'}!`, 'text-green-400');
                    } else {
                        // Gathering skills continue indefinitely
                        action.progress %= actionTime;
                    }
                }
            }

            // Worker processing (all gathering skills)
            this.processWorkers(delta);
            

            
            // Update Well of Serenity meditation
            if (typeof this.updateMeditation === 'function') {
                this.updateMeditation();
            }

            // Combat loop
            if (this.state.combat.inCombat && this.state.combat.enemy) {
                // Army upkeep and contributions
                const armyDeltaSec = (now - this.state.army.lastTick) / 1000;
                if (armyDeltaSec > 0.1) {
                    this.state.army.lastTick = now;
                    const upkeep = this.consumeArmyUpkeep(armyDeltaSec);
                    const base = this.calculateArmyOutputPerSecond();
                    const hungryPenalty = upkeep.hungry ? 0.5 : 1.0;
                    const dps = base.dps * hungryPenalty;
                    const hps = base.hps * hungryPenalty;
                    this.state.army.production = { dps, hps, hungry: upkeep.hungry };
                    // Apply damage to enemy and heals to player
                    const dmg = dps * armyDeltaSec;
                    const heal = hps * armyDeltaSec;
                    if (dmg > 0) {
                        this.state.combat.enemy.hp = Math.max(0, this.state.combat.enemy.hp - dmg);
                        this.state.army.fly.accumDmg += dmg;
                        if (this.state.combat.enemy.hp <= 0) { this.handleEnemyDefeat(this.state.combat.enemy); }
                    }
                    if (heal > 0 && this.state.player.hp > 0) {
                        this.state.player.hp = Math.min(this.state.player.hpMax, this.state.player.hp + heal);
                        this.state.army.fly.accumHeal += heal;
                    }
                    // Flush flytext every ~700ms
                    if (now - this.state.army.fly.lastFlush > 700) {
                        if (this.state.army.fly.accumDmg > 0.9) { this.uiManager.showFloatingText(`-${Math.floor(this.state.army.fly.accumDmg)} Allies`, 'text-red-300'); this.state.army.fly.accumDmg = 0; }
                        if (this.state.army.fly.accumHeal > 0.9) { this.uiManager.showFloatingText(`+${Math.floor(this.state.army.fly.accumHeal)} HP`, 'text-green-300'); this.state.army.fly.accumHeal = 0; }
                        this.state.army.fly.lastFlush = now;
                    }
                }
                const e = this.state.combat.enemy;
                // Player attack
                if (now - this.state.combat.lastPlayerAttack >= this.state.combat.playerAttackSpeedMs) {
                    this.state.combat.lastPlayerAttack = now; const dmg = this.calculatePlayerDamage(e);
                    e.hp = Math.max(0, e.hp - dmg); this.uiManager.showFloatingText(`-${dmg} ${e.name}`, 'text-red-400');
                    if (e.hp <= 0) { this.handleEnemyDefeat(e); }
                }
                // Enemy attack
                if (now - this.state.combat.lastEnemyAttack >= e.attackSpeedMs) {
                    this.state.combat.lastEnemyAttack = now; const enemyDmg = Math.max(0, Math.floor(e.attack - (this.state.player.meta_skills[META_SKILLS.RESILIENCE].level - 1) * 0.5));
                    this.state.player.hp = Math.max(0, this.state.player.hp - enemyDmg); this.uiManager.showFloatingText(`-${enemyDmg} HP`, 'text-yellow-400');
                    if (this.state.player.hp <= 0) { this.endCombat(false); }
                }
            }

            // Clicker auto
            if (now - this.state.clicker.lastAutoTick >= this.state.clicker.autoRateMs) {
                this.state.clicker.lastAutoTick = now;
                const gps = this.state.clicker.autoClickers * this.state.clicker.goldPerClick;
                if (gps > 0) this.addGold(gps);
            }

            // Empire production
            const empireDeltaSec = (now - this.state.empire.lastTick) / 1000;
            if (empireDeltaSec > 0.1) {
                this.state.empire.lastTick = now;
                const totals = this.calculateEmpireProductionPerSecond();
                // Fractional buffers for smooth accrual
                this.state.empire.buffers.gold += totals.goldPerSec * empireDeltaSec;
                const goldWhole = Math.floor(this.state.empire.buffers.gold);
                if (goldWhole > 0) { this.addGold(goldWhole); this.state.empire.buffers.gold -= goldWhole; }
                this.state.empire.buffers.runes += (totals.runesPerSec || 0) * empireDeltaSec;
                const runeWhole = Math.floor(this.state.empire.buffers.runes);
                if (runeWhole > 0) { this.state.player.runes += runeWhole; this.state.empire.buffers.runes -= runeWhole; }
                this.state.empire.buffers.essence += (totals.essencePerSec || 0) * empireDeltaSec;
                const essWhole = Math.floor(this.state.empire.buffers.essence);
                if (essWhole > 0) { this.addToBank('rune_essence', essWhole); this.state.empire.buffers.essence -= essWhole; }
                
                // New utility resource production
                this.state.empire.buffers.rations += (totals.rationsPerSec || 0) * empireDeltaSec;
                const rationsWhole = Math.floor(this.state.empire.buffers.rations);
                if (rationsWhole > 0) { this.addToBank('rations', rationsWhole); this.state.empire.buffers.rations -= rationsWhole; }
                
                this.state.empire.buffers.tools += (totals.toolsPerSec || 0) * empireDeltaSec;
                const toolsWhole = Math.floor(this.state.empire.buffers.tools);
                if (toolsWhole > 0) { this.addToBank('tools', toolsWhole); this.state.empire.buffers.tools -= toolsWhole; }
                
                // Advanced resource production
                this.state.empire.buffers.premiumRations += (totals.premiumRationsPerSec || 0) * empireDeltaSec;
                const premiumRationsWhole = Math.floor(this.state.empire.buffers.premiumRations);
                if (premiumRationsWhole > 0) { this.addToBank('premium_rations', premiumRationsWhole); this.state.empire.buffers.premiumRations -= premiumRationsWhole; }
                
                this.state.empire.buffers.specializedTools += (totals.specializedToolsPerSec || 0) * empireDeltaSec;
                const specializedToolsWhole = Math.floor(this.state.empire.buffers.specializedTools);
                if (specializedToolsWhole > 0) { this.addToBank('specialized_tools', specializedToolsWhole); this.state.empire.buffers.specializedTools -= specializedToolsWhole; }
                
                this.state.empire.production = totals;
            }

            // Update expedition progress
            this.updateExpeditionProgress();
            
            // Check for expedition unlocks periodically
            if (Math.random() < 0.01) { // 1% chance per update tick to check unlocks
                this.checkExpeditionUnlocks();
            }

            this.uiManager.updateDynamicElements();
        }

        calculateActionTime(action) {
            let time = action.baseTime;
            const stewardshipBonus = 1 - (this.state.player.meta_skills[META_SKILLS.STEWARDSHIP].level - 1) * 0.01; time *= stewardshipBonus;
            const mastery = this.getMastery(action.skillId, action.id); const masteryBonus = 1 - (mastery.level * 0.002); time *= masteryBonus;
            return time;
        }
        
        // Worker helpers - Enhanced with equipment and morale
        getWorkerSpeedMultiplier(skillId, action) {
            const ws = this.state.workers?.[skillId]; if (!ws) return 1;
            
            let multiplier = 1;
            
            // Original upgrade system
            const speedLevel = ws.upgrades.speedLevel || 0;
            multiplier *= Math.pow(0.92, speedLevel); // 8% faster per level multiplicative
            
            // Tool equipment bonuses (new system)
            const toolBonus = this.calculateToolBonus(skillId);
            if (toolBonus.speed > 0) {
                multiplier *= (1 + toolBonus.speed / 100); // Convert percentage to multiplier
            }
            
            // Enhanced efficiency system (morale + equipment + facilities)
            multiplier *= this.getWorkerEfficiencyMultiplier(skillId);
            
            return multiplier;
        }
        
        getWorkerYieldMultiplier(skillId, action) {
            const ws = this.state.workers?.[skillId]; if (!ws) return 1;
            
            let multiplier = 1;
            
            // Original upgrade system
            const yieldLevel = ws.upgrades.yieldLevel || 0;
            multiplier *= 1 + (0.10 * yieldLevel); // 10% more per level
            
            // Equipment yield bonuses
            Object.keys(ws.equipment.tools).forEach(equipmentId => {
                const equipment = this.getEquipmentData(equipmentId);
                const quantity = ws.equipment.tools[equipmentId] || 0;
                if (equipment && quantity > 0) {
                    const coverage = Math.min(quantity / ws.total, 1);
                    if (equipment.bonuses.yield) {
                        multiplier *= 1 + (equipment.bonuses.yield / 100 * coverage);
                    }
                }
            });
            
            // Tool equipment bonuses (new system)
            const toolBonus = this.calculateToolBonus(skillId);
            if (toolBonus.yield > 0) {
                multiplier *= (1 + toolBonus.yield / 100); // Convert percentage to multiplier
            }
            
            Object.keys(ws.equipment.clothing).forEach(equipmentId => {
                const equipment = this.getEquipmentData(equipmentId);
                const quantity = ws.equipment.clothing[equipmentId] || 0;
                if (equipment && quantity > 0) {
                    const coverage = Math.min(quantity / ws.total, 1);
                    if (equipment.bonuses.yield) {
                        multiplier *= 1 + (equipment.bonuses.yield / 100 * coverage);
                    }
                }
            });
            
            // Morale effects on yield
            if (ws.morale > 100) {
                multiplier *= 1 + ((ws.morale - 100) * 0.005); // +0.5% yield per morale point above 100
            } else if (ws.morale < 100) {
                multiplier *= 1 + ((ws.morale - 100) * 0.01); // -1% yield per morale point below 100
            }
            
            return multiplier;
        }
        
        processWorkers(deltaMs) {
            const workerSkills = Object.keys(this.state.workers || {});
            for (const skillId of workerSkills) {
                const ws = this.state.workers[skillId];
                
                // Process gathering skills
                if (GAME_DATA.ACTIONS[skillId]) {
                    const actions = GAME_DATA.ACTIONS[skillId] || [];
                    for (const action of actions) {
                        const assigned = ws.assigned[action.id] || 0; if (assigned <= 0) continue;
                        const perCycleTime = this.calculateActionTime({ ...action, skillId }) * this.getWorkerSpeedMultiplier(skillId, action);
                        ws.progress[action.id] += deltaMs * assigned;
                        const cycles = Math.floor(ws.progress[action.id] / perCycleTime);
                        if (cycles > 0) {
                            ws.progress[action.id] %= perCycleTime;
                            const totalQty = (action.output?.quantity || 0) * cycles * this.getWorkerYieldMultiplier(skillId, action);
                            if (action.output?.itemId && totalQty > 0) {
                                this.addToBank(action.output.itemId, Math.floor(totalQty));
                                // Worker XP to player skill, reduced rate (50%)
                                const xpGain = (action.xp || 0) * cycles * 0.5;
                                this.state.player.skills[skillId].addXP(xpGain, this);
                            }
                            // Rare drops (each cycle independently, reduced chance)
                            if (action.rareDrop) {
                                const chance = action.rareDrop.chance || 0; // as percent
                                for (let i = 0; i < cycles; i++) {
                                    if (Math.random() * 100 < chance * 0.5) { this.addToBank(action.rareDrop.itemId, 1); }
                                }
                            }
                        }
                    }
                }
                
                // Process artisan skills
                if (GAME_DATA.RECIPES[skillId]) {
                    const recipes = GAME_DATA.RECIPES[skillId] || [];
                    for (const recipe of recipes) {
                        const assigned = ws.assigned[recipe.id] || 0; if (assigned <= 0) continue;
                        const perCycleTime = this.calculateActionTime({ ...recipe, skillId }) * this.getWorkerSpeedMultiplier(skillId, recipe);
                        ws.progress[recipe.id] += deltaMs * assigned;
                        const cycles = Math.floor(ws.progress[recipe.id] / perCycleTime);
                        if (cycles > 0) {
                            ws.progress[recipe.id] %= perCycleTime;
                            
                            // Check if we have materials for crafting
                            const canCraft = recipe.input ? recipe.input.every(inp => (this.state.bank[inp.itemId] || 0) >= inp.quantity) : true;
                            if (canCraft) {
                                // Consume materials
                                if (recipe.input) {
                                    recipe.input.forEach(inp => this.removeFromBank(inp.itemId, inp.quantity * cycles));
                                }
                                
                                // Produce output
                                if (recipe.output && recipe.output.itemId) {
                                    let totalOut = recipe.output.quantity * cycles;
                                    if (skillId === 'runecrafting') {
                                        const lvl = this.state.player.skills[skillId].level;
                                        const mult = Math.max(1, 1 + Math.floor((lvl - recipe.level) / 11));
                                        totalOut *= mult;
                                    }
                                    this.addToBank(recipe.output.itemId, totalOut);
                                }
                                
                                // Grant XP
                                const xpGain = (recipe.xp || 0) * cycles * 0.5;
                                this.state.player.skills[skillId].addXP(xpGain, this);
                                
                                // Mastery progress
                                const mastery = this.getMastery(skillId, recipe.id);
                                mastery.addXP((recipe.baseTime || 1000) / 1000 * cycles);
                            }
                        }
                    }
                }
            }
        }

        getMastery(skillId, actionId) { if (!this.state.player.mastery[skillId][actionId]) { this.state.player.mastery[skillId][actionId] = new Mastery(); } return this.state.player.mastery[skillId][actionId]; }
        
        // Check if a gathering action can be started (has workers and workers are assigned)
        canStartGatheringAction(skillId, actionId) {
            if (!GAME_DATA.ACTIONS[skillId] || GAME_DATA.RECIPES[skillId]) {
                // Not a gathering skill or has recipes (artisan skill)
                return true;
            }
            
            const workerState = this.state.workers[skillId];
            if (!workerState || !workerState.total || workerState.total <= 0) {
                return false; // No workers hired
            }
            
            const assignedWorkers = workerState.assigned[actionId] || 0;
            return assignedWorkers > 0; // Workers must be assigned to this action
        }

        // Enhanced Empire Management System
        
        // Equipment Management
        purchaseWorkerEquipment(equipmentId, quantity = 1) {
            const equipment = this.getEquipmentData(equipmentId);
            if (!equipment) return false;
            
            const totalCost = equipment.cost * quantity;
            const marketBonus = this.getFacilityBonus('market', 'cost_reduction') || 0;
            const finalCost = Math.floor(totalCost * (1 - marketBonus / 100));
            
            if (!this.spendGold(finalCost)) {
                this.uiManager.showModal('Insufficient Gold', `<p>You need ${finalCost} gold to purchase ${quantity}x ${equipment.name}.</p>`);
                return false;
            }
            
            this.state.empire.equipment.inventory[equipmentId] = (this.state.empire.equipment.inventory[equipmentId] || 0) + quantity;
            this.uiManager.showFloatingText(`+${quantity} ${equipment.name}`, 'text-green-300');
            return true;
        }
        
        equipWorkers(skillId, equipmentId, quantity) {
            const ws = this.state.workers[skillId];
            if (!ws) return false;
            
            const availableEquipment = this.state.empire.equipment.inventory[equipmentId] || 0;
            const actualQuantity = Math.min(quantity, availableEquipment);
            
            if (actualQuantity <= 0) return false;
            
            const equipment = this.getEquipmentData(equipmentId);
            const equipmentType = this.getEquipmentType(equipmentId);
            
            // Move equipment from inventory to worker equipment
            this.state.empire.equipment.inventory[equipmentId] -= actualQuantity;
            ws.equipment[equipmentType][equipmentId] = (ws.equipment[equipmentType][equipmentId] || 0) + actualQuantity;
            
            this.updateWorkerMorale(skillId);
            this.uiManager.showFloatingText(`Equipped ${actualQuantity} ${equipment.name} to ${skillId} workers`, 'text-blue-300');
            return true;
        }
        
        bulkEquipWorkers(skillId, autoEquip = true) {
            const ws = this.state.workers[skillId];
            if (!ws || !ws.equipment.policies.auto_equip.enabled) return;
            
            const availableEquipment = this.getCompatibleEquipment(skillId);
            const unequippedWorkers = this.getUnequippedWorkerCount(skillId);
            
            for (const equipmentId of availableEquipment) {
                const available = this.state.empire.equipment.inventory[equipmentId] || 0;
                const needed = Math.min(unequippedWorkers, available);
                
                if (needed > 0) {
                    this.equipWorkers(skillId, equipmentId, needed);
                }
            }
        }
        
        // Facility Management
        buildFacility(facilityId) {
            const facility = GAME_DATA.EMPIRE_FACILITIES[facilityId];
            if (!facility) return false;
            
            const currentLevel = this.state.empire.facilities[facilityId].level;
            const cost = Math.floor(facility.baseCost * Math.pow(facility.costGrowth, currentLevel));
            
            if (!this.spendGold(cost)) {
                this.uiManager.showModal('Insufficient Gold', `<p>You need ${cost} gold to build/upgrade ${facility.name}.</p>`);
                return false;
            }
            
            this.state.empire.facilities[facilityId].level++;
            this.updateAllWorkerMorale();
            this.uiManager.showFloatingText(`${facility.name} upgraded to Level ${this.state.empire.facilities[facilityId].level}!`, 'text-purple-300');
            return true;
        }
        
        // Morale Management
        updateWorkerMorale(skillId) {
            const ws = this.state.workers[skillId];
            if (!ws) return;
            
            // Reset morale factors
            ws.moraleFactors = { base: 100, equipment: 0, facilities: 0, overwork: 0 };
            
            // Equipment morale bonus
            let equipmentMorale = 0;
            Object.keys(ws.equipment.tools).forEach(equipmentId => {
                const equipment = this.getEquipmentData(equipmentId);
                const quantity = ws.equipment.tools[equipmentId] || 0;
                if (equipment && equipment.bonuses.morale) {
                    equipmentMorale += equipment.bonuses.morale * Math.min(quantity, ws.total);
                }
            });
            Object.keys(ws.equipment.clothing).forEach(equipmentId => {
                const equipment = this.getEquipmentData(equipmentId);
                const quantity = ws.equipment.clothing[equipmentId] || 0;
                if (equipment && equipment.bonuses.morale) {
                    equipmentMorale += equipment.bonuses.morale * Math.min(quantity, ws.total);
                }
            });
            ws.moraleFactors.equipment = Math.min(equipmentMorale, 50); // Cap at +50
            
            // Facility morale bonus
            let facilityMorale = 0;
            facilityMorale += this.getFacilityBonus('barracks', 'morale') || 0;
            facilityMorale += this.getFacilityBonus('canteen', 'morale_regen') || 0;
            ws.moraleFactors.facilities = Math.min(facilityMorale, 40); // Cap at +40
            
            // Overwork penalty (if too many workers assigned relative to capacity)
            const assigned = Object.values(ws.assigned).reduce((a, b) => a + b, 0);
            const capacity = ws.total + this.getWorkerCapacityBonus(skillId);
            if (assigned > capacity) {
                ws.moraleFactors.overwork = Math.max(-30, (capacity - assigned) * 2); // -2 per overworked
            }
            
            // Calculate final morale
            ws.morale = Math.max(10, Math.min(150, 
                ws.moraleFactors.base + 
                ws.moraleFactors.equipment + 
                ws.moraleFactors.facilities + 
                ws.moraleFactors.overwork
            ));
        }
        
        updateAllWorkerMorale() {
            Object.keys(this.state.workers).forEach(skillId => {
                this.updateWorkerMorale(skillId);
            });
        }
        
        // Helper Methods
        getEquipmentData(equipmentId) {
            return GAME_DATA.WORKER_EQUIPMENT.tools[equipmentId] || GAME_DATA.WORKER_EQUIPMENT.clothing[equipmentId] || null;
        }
        
        getEquipmentType(equipmentId) {
            if (GAME_DATA.WORKER_EQUIPMENT.tools[equipmentId]) return 'tools';
            if (GAME_DATA.WORKER_EQUIPMENT.clothing[equipmentId]) return 'clothing';
            return null;
        }
        
        getCompatibleEquipment(skillId) {
            const compatible = [];
            
            // Check tools
            Object.keys(GAME_DATA.WORKER_EQUIPMENT.tools).forEach(equipmentId => {
                const equipment = GAME_DATA.WORKER_EQUIPMENT.tools[equipmentId];
                if (equipment.compatibleSkills === 'all' || equipment.compatibleSkills.includes(skillId)) {
                    compatible.push(equipmentId);
                }
            });
            
            // Check clothing
            Object.keys(GAME_DATA.WORKER_EQUIPMENT.clothing).forEach(equipmentId => {
                const equipment = GAME_DATA.WORKER_EQUIPMENT.clothing[equipmentId];
                if (equipment.compatibleSkills === 'all' || equipment.compatibleSkills.includes(skillId)) {
                    compatible.push(equipmentId);
                }
            });
            
            return compatible;
        }
        
        getUnequippedWorkerCount(skillId) {
            const ws = this.state.workers[skillId];
            if (!ws) return 0;
            
            const totalEquipped = Object.values(ws.equipment.tools).reduce((a, b) => a + b, 0) +
                                  Object.values(ws.equipment.clothing).reduce((a, b) => a + b, 0);
            
            return Math.max(0, ws.total - totalEquipped);
        }
        
        getFacilityBonus(facilityId, bonusType) {
            const facilityState = this.state.empire.facilities[facilityId];
            if (!facilityState || facilityState.level <= 0) return 0;
            
            const facility = GAME_DATA.EMPIRE_FACILITIES[facilityId];
            const level = facilityState.level - 1; // Levels are 0-indexed in data
            
            if (facility && facility.levels[level]) {
                return facility.levels[level][bonusType] || 0;
            }
            return 0;
        }
        
        getWorkerCapacityBonus(skillId) {
            return this.getFacilityBonus('barracks', 'workers') || 0;
        }
        
        getWorkerEfficiencyMultiplier(skillId) {
            const ws = this.state.workers[skillId];
            if (!ws) return 1;
            
            let multiplier = 1;
            
            // Morale effects on efficiency
            if (ws.morale > 100) {
                multiplier *= 1 + ((ws.morale - 100) * 0.01); // +1% per morale point above 100
            } else if (ws.morale < 100) {
                multiplier *= 1 + ((ws.morale - 100) * 0.015); // -1.5% per morale point below 100
            }
            
            // Equipment bonuses
            Object.keys(ws.equipment.tools).forEach(equipmentId => {
                const equipment = this.getEquipmentData(equipmentId);
                const quantity = ws.equipment.tools[equipmentId] || 0;
                if (equipment && quantity > 0) {
                    const coverage = Math.min(quantity / ws.total, 1);
                    if (equipment.bonuses.speed) {
                        multiplier *= 1 + (equipment.bonuses.speed / 100 * coverage);
                    }
                }
            });
            
            // Academy bonus
            const academyBonus = this.getFacilityBonus('academy', 'skill_bonus');
            if (academyBonus > 0) {
                multiplier *= 1 + (academyBonus / 100);
            }
            
            return multiplier;
        }

        gainActionRewards(action, loops) {
            const skill = this.state.player.skills[action.skillId]; 
            skill.addXP(action.xp * loops, this);
            const mastery = this.getMastery(action.skillId, action.id); 
            mastery.addXP(action.baseTime / 1000 * loops);
            
            // Handle artisan recipes (consuming materials and producing items)
            if (GAME_DATA.RECIPES[action.skillId]) {
                // This is an artisan skill - consume materials and produce items
                if (action.input && action.input.length > 0) {
                    // Consume required materials
                    action.input.forEach(inp => {
                        this.removeFromBank(inp.itemId, inp.quantity * loops);
                    });
                }
                
                if (action.output && action.output.itemId) {
                    let totalOut = action.output.quantity * loops;
                    // Special handling for runecrafting (level-based multipliers)
                    if (action.skillId === 'runecrafting') {
                        const lvl = this.state.player.skills[action.skillId].level;
                        const mult = Math.max(1, 1 + Math.floor((lvl - action.level) / 11));
                        totalOut *= mult;
                    }
                    this.addToBank(action.output.itemId, totalOut);
                }
            } else {
                // This is a gathering skill - scale rewards based on assigned workers
                if (action.output && action.output.itemId) {
                    const workerState = this.state.workers[action.skillId];
                    if (workerState && workerState.assigned[action.id]) {
                        const assignedWorkers = workerState.assigned[action.id];
                        const baseQuantity = action.output.quantity * loops;
                        
                        // Calculate worker bonuses
                        const speedMultiplier = this.getWorkerSpeedMultiplier(action.skillId, action);
                        const yieldMultiplier = this.getWorkerYieldMultiplier(action.skillId, action);
                        
                        // Scale quantity by assigned workers and bonuses
                        const scaledQuantity = Math.floor(baseQuantity * assignedWorkers * speedMultiplier * yieldMultiplier);
                        
                        this.addToBank(action.output.itemId, scaledQuantity);
                        
                        // Show worker bonus info
                        if (assignedWorkers > 1 || speedMultiplier > 1 || yieldMultiplier > 1) {
                            this.uiManager.showFloatingText(`+${scaledQuantity} ${GAME_DATA.ITEMS[action.output.itemId].name} (${assignedWorkers} workers, ${(speedMultiplier * yieldMultiplier).toFixed(2)}x bonus)`, 'text-green-400');
                        }
                    } else {
                        // Fallback to base quantity if no workers assigned (shouldn't happen with new checks)
                        this.addToBank(action.output.itemId, action.output.quantity * loops);
                    }
                }
            }
            
            if (action.rareDrop) {
                for (let i = 0; i < loops; i++) {
                    if (Math.random() * 100 < action.rareDrop.chance) {
                        this.addToBank(action.rareDrop.itemId, 1);
                        // Only show floating text for rare drops as they're special events
                        this.uiManager.showFloatingText(`+1 ${GAME_DATA.ITEMS[action.rareDrop.itemId].name}!`, 'text-yellow-400');
                    }
                }
            }
        }

        startAction(skillId, actionId) {
            // Check if this skill already has an active action
            if (this.state.activeActions[skillId]) return;
            
            let actionData;
            if (GAME_DATA.ACTIONS[skillId]) actionData = GAME_DATA.ACTIONS[skillId].find(a => a.id === actionId);
            if (GAME_DATA.RECIPES[skillId]) actionData = GAME_DATA.RECIPES[skillId].find(a => a.id === actionId);
            
            // Check if this is a gathering skill and if we have workers assigned
            if (GAME_DATA.ACTIONS[skillId] && !GAME_DATA.RECIPES[skillId]) {
                // This is a gathering skill - check worker requirement
                const workerState = this.state.workers[skillId];
                if (!workerState || !workerState.total || workerState.total <= 0) {
                    this.uiManager.showFloatingText(`You need to hire at least 1 worker for ${GAME_DATA.SKILLS[skillId]?.name || skillId}!`, 'text-red-400');
                    return;
                }
                
                // Check if any workers are assigned to this specific action
                const assignedWorkers = workerState.assigned[actionId] || 0;
                if (assignedWorkers <= 0) {
                    this.uiManager.showFloatingText(`You need to assign workers to ${actionData.name} first!`, 'text-red-400');
                    return;
                }
            }
            
            // Actions run indefinitely until stopped (no endTime)
            const newAction = { ...actionData, skillId: skillId, startTime: Date.now(), endTime: null, progress: 0 };
            
            // Add to new multi-action system
            this.state.activeActions[skillId] = newAction;
            
            // Keep legacy single action for backward compatibility (use first/primary action)
            if (!this.state.activeAction) {
                this.state.activeAction = newAction;
            }
            
            this.uiManager.render();
        }
        stopAction(skillId = null) {
            console.log(`[STOP] Stopping ${skillId || 'all actions'}`);
            
            if (skillId) {
                // Stop specific skill action
                const action = this.state.activeActions[skillId];
                
                if (!action) {
                    console.log(`[STOP] No active action found for ${skillId}`);
                    console.log(`[STOP] Available actions:`, Object.keys(this.state.activeActions));
                    return;
                }
                
                // Special debug for mining
                if (skillId === 'mining') {
                    console.log(`[STOP] Mining action details:`, action);
                    console.log(`[STOP] Action name: ${action.name}, ID: ${action.id}`);
                }
                
                const actionTime = this.calculateActionTime(action);
                const loops = Math.floor(action.progress / actionTime);
                if (loops > 0) {
                    this.gainActionRewards(action, loops);
                }
                
                delete this.state.activeActions[skillId];
                console.log(`[STOP] Successfully stopped ${skillId}`);
                
                // Update legacy activeAction if it was this one
                if (this.state.activeAction && this.state.activeAction.skillId === skillId) {
                    // Set to another active action if available, or null
                    const remainingActions = Object.values(this.state.activeActions);
                    this.state.activeAction = remainingActions.length > 0 ? remainingActions[0] : null;
                }
            } else {
                // Legacy: stop all actions (or first action for backward compatibility)
                if (this.state.activeAction) {
                    const action = this.state.activeAction;
                    const actionTime = this.calculateActionTime(action);
                    const loops = Math.floor(action.progress / actionTime);
                    if (loops > 0) {
                        this.gainActionRewards(action, loops);
                    }
                    
                    // Remove from both systems
                    delete this.state.activeActions[action.skillId];
                    this.state.activeAction = null;
                }
            }
            
            this.uiManager.render();
        }

        craftItem(skillId, recipeId, quantity) {
            const recipe = GAME_DATA.RECIPES[skillId].find(r => r.id === recipeId); if (!recipe) return;
            const canCraft = recipe.input.every(inp => (this.state.bank[inp.itemId] || 0) >= inp.quantity * quantity); if (!canCraft) return;
            recipe.input.forEach(inp => this.removeFromBank(inp.itemId, inp.quantity * quantity));
            if (recipe.output && recipe.output.itemId) {
                let totalOut = recipe.output.quantity * quantity;
                if (skillId === 'runecrafting') {
                    const lvl = this.state.player.skills[skillId].level;
                    const mult = Math.max(1, 1 + Math.floor((lvl - recipe.level) / 11));
                    totalOut *= mult;
                }
                this.addToBank(recipe.output.itemId, totalOut);
                // Remove redundant floating text - notifications handle this better with batching
            }
            const skill = this.state.player.skills[skillId]; skill.addXP(recipe.xp * quantity, this);
            // Mastery progress for artisan recipes
            const mastery = this.getMastery(skillId, recipe.id);
            mastery.addXP((recipe.baseTime || 1000) / 1000 * quantity);
            if (skillId === 'firemaking') { this.state.bonfire.active = true; this.state.bonfire.expiry = Date.now() + 2 * 60 * 60 * 1000; this.state.bonfire.xpBoost = 0.05; }
            this.uiManager.renderView();
        }
        
        startCrafting(skillId, recipeId, quantity = 1) {
            const recipe = GAME_DATA.RECIPES[skillId]?.find(r => r.id === recipeId);
            if (!recipe) {
                this.uiManager.showFloatingText('Recipe not found!', 'text-red-400');
                return false;
            }
            
            // Check if player has required level
            const playerLevel = this.state.player.skills[skillId]?.level || 1;
            if (playerLevel < recipe.level) {
                this.uiManager.showFloatingText(`Requires ${skillId} level ${recipe.level}!`, 'text-red-400');
                return false;
            }
            
            // Check if player has materials
            if (recipe.input) {
                const hasMaterials = recipe.input.every(inp => (this.state.bank[inp.itemId] || 0) >= inp.quantity * quantity);
                if (!hasMaterials) {
                    this.uiManager.showFloatingText('Not enough materials!', 'text-red-400');
                    return false;
                }
            }
            
            // Start crafting
            this.state.activeActions[skillId] = {
                skillId,
                id: recipeId,
                type: 'crafting',
                progress: 0,
                quantity,
                startTime: Date.now()
            };
            
            this.uiManager.showFloatingText(`Started crafting ${recipe.name}!`, 'text-green-400');
            this.uiManager.renderView();
            return true;
        }
        
        stopCrafting(skillId) {
            if (this.state.activeActions[skillId]) {
                delete this.state.activeActions[skillId];
                this.uiManager.showFloatingText('Stopped crafting', 'text-yellow-400');
                this.uiManager.renderView();
            }
        }

        // Economy helpers
        addGold(amount) { const final = Math.floor(amount * this.goldMultiplier()); this.state.player.gold += final; if (final > 0) this.uiManager.notifyResource('gold', final); }
        spendGold(amount) { if (this.state.player.gold < amount) return false; this.state.player.gold -= amount; return true; }

        addToBank(itemId, quantity) { this.state.bank[itemId] = (this.state.bank[itemId] || 0) + quantity; if (quantity > 0) this.uiManager.notifyItem(itemId, quantity); }
        removeFromBank(itemId, quantity) { this.state.bank[itemId] -= quantity; if (this.state.bank[itemId] <= 0) { delete this.state.bank[itemId]; } }

        // Worker economy
        getHireCost(skillId) {
            const ws = this.state.workers?.[skillId]; const owned = ws?.total || 0;
            const base = 100; const growth = 1.18;
            return Math.floor(base * Math.pow(growth, owned));
        }
        getUpgradeCost(skillId, type) {
            const ws = this.state.workers?.[skillId]; const lvl = (ws?.upgrades?.[`${type}Level`]) || 0;
            const baseMap = { speed: 150, yield: 160, depth: 220, cart: 240, irrigation: 200, tools: 180, compost: 160, tractor: 500 };
            const growth = 1.32; const base = baseMap[type] || 200;
            return Math.floor(base * Math.pow(growth, lvl));
        }
        hireWorker(skillId) {
            this.ensureWorkerState();
            const cost = this.getHireCost(skillId);
            if (!this.spendGold(cost)) { this.uiManager.showModal('Insufficient Gold', `<p>You need ${cost} gold to hire a worker.</p>`); return; }
            
            this.state.workers[skillId].total = (this.state.workers[skillId].total || 0) + 1;
            
            // Auto-equip new worker if enabled
            this.bulkEquipWorkers(skillId);
            
            // Update morale after hiring
            this.updateWorkerMorale(skillId);
            
            this.uiManager.playSound('hire');
            this.uiManager.showFloatingText(`+1 ${GAME_DATA.SKILLS[skillId]?.name || 'Worker'}`, 'text-green-300');
            this.uiManager.renderView();
        }
        upgradeWorkers(skillId, type) {
            this.ensureWorkerState();
            const cost = this.getUpgradeCost(skillId, type);
            if (!this.spendGold(cost)) { this.uiManager.showModal('Insufficient Gold', `<p>You need ${cost} gold to upgrade.</p>`); return; }
            const key = `${type}Level`;
            const ws = this.state.workers[skillId]; if (typeof ws.upgrades[key] !== 'number') ws.upgrades[key] = 0;
            ws.upgrades[key] += 1;
            this.uiManager.playSound('upgrade');
            this.uiManager.renderView();
        }

        // Empire helpers (clicker)
        getEmpireUnitCost(id) {
            const def = GAME_DATA.UNITS[id]; const owned = this.state.empire.units[id] || 0;
            return Math.floor(def.baseCost * Math.pow(def.costGrowth, owned));
        }
        hireEmpireUnit(id) {
            const unit = GAME_DATA.UNITS[id];
            if (!unit) return;
            
            // Check building requirements
            if (unit.requires) {
                const missingRequirements = [];
                Object.entries(unit.requires).forEach(([requiredUnitId, requiredCount]) => {
                    const owned = this.state.empire.units[requiredUnitId] || 0;
                    if (owned < requiredCount) {
                        const requiredUnit = GAME_DATA.UNITS[requiredUnitId];
                        missingRequirements.push(`${requiredUnit.name}: ${owned}/${requiredCount}`);
                    }
                });
                
                if (missingRequirements.length > 0) {
                    const requirementsText = missingRequirements.join('<br>• ');
                    this.uiManager.showModal('🚫 Building Requirements Not Met', `
                        <div class="text-left">
                            <p class="mb-3">You need these buildings first:</p>
                            <div class="text-red-300 text-sm space-y-1">• ${requirementsText}</div>
                            <p class="mt-4 text-secondary text-xs">Build the required structures to unlock this advanced building!</p>
                        </div>
                    `);
                    return;
                }
            }
            
            const cost = this.getEmpireUnitCost(id);
            if (!this.spendGold(cost)) { 
                this.uiManager.showModal('Insufficient Gold', `<p>You need ${cost} gold to hire a ${unit.name}.</p>`); 
                return; 
            }
            
            this.state.empire.units[id] = (this.state.empire.units[id] || 0) + 1;
            this.uiManager.playSound('hire');
            this.uiManager.renderView();
        }
        calculateEmpireProductionPerSecond() {
            const units = this.state.empire.units || {};
            let goldPerSec = 0, runesPerSec = 0, essencePerSec = 0, rationsPerSec = 0, toolsPerSec = 0;
            let premiumRationsPerSec = 0, specializedToolsPerSec = 0;
            
            Object.keys(GAME_DATA.UNITS).forEach(id => {
                const def = GAME_DATA.UNITS[id]; 
                const count = units[id] || 0; 
                if (count <= 0) return;
                
                // Basic resource production
                if (def.goldPerSec) goldPerSec += def.goldPerSec * count;
                if (def.runesPerSec) runesPerSec += def.runesPerSec * count;
                if (def.essencePerSec) essencePerSec += def.essencePerSec * count;
                if (def.rationsPerSec) rationsPerSec += def.rationsPerSec * count;
                if (def.toolsPerSec) toolsPerSec += def.toolsPerSec * count;
                
                // Advanced resource production
                if (def.premiumRationsPerSec) premiumRationsPerSec += def.premiumRationsPerSec * count;
                if (def.specializedToolsPerSec) specializedToolsPerSec += def.specializedToolsPerSec * count;
            });
            
            return { 
                goldPerSec, 
                runesPerSec, 
                essencePerSec, 
                rationsPerSec, 
                toolsPerSec,
                premiumRationsPerSec,
                specializedToolsPerSec
            };
        }

        // Worker systems
        ensureWorkerState() {
            if (!this.state.workers) {
                this.state.workers = {
                    woodcutting: { total: 0, upgrades: { speedLevel: 0, yieldLevel: 0 }, assigned: {}, progress: {} },
                    mining: { total: 0, upgrades: { speedLevel: 0, yieldLevel: 0, depthLevel: 0, cartLevel: 0 }, assigned: {}, progress: {} },
                    fishing: { total: 0, boats: 0, upgrades: { netLevel: 0, baitLevel: 0, boatLevel: 0 }, assigned: {}, progress: {} },
                    farming: { total: 0, upgrades: { irrigationLevel: 0, toolsLevel: 0, compostLevel: 0, tractorLevel: 0 }, assigned: {}, progress: {} },
                    hunter: { total: 0, upgrades: { speedLevel: 0, yieldLevel: 0 }, assigned: {}, progress: {} },
                    archaeology: { total: 0, upgrades: { speedLevel: 0, yieldLevel: 0 }, assigned: {}, progress: {} },
                    divination: { total: 0, upgrades: { speedLevel: 0, yieldLevel: 0 }, assigned: {}, progress: {} },
                };
            }
            if (!this.state.workers.woodcutting) this.state.workers.woodcutting = { total: 0, upgrades: { speedLevel: 0, yieldLevel: 0 }, assigned: {}, progress: {} };
            if (!this.state.workers.mining) this.state.workers.mining = { total: 0, upgrades: { speedLevel: 0, yieldLevel: 0, depthLevel: 0, cartLevel: 0 }, assigned: {}, progress: {} };
            if (!this.state.workers.fishing) this.state.workers.fishing = { total: 0, boats: 0, upgrades: { netLevel: 0, baitLevel: 0, boatLevel: 0 }, assigned: {}, progress: {} };
            if (!this.state.workers.farming) this.state.workers.farming = { total: 0, upgrades: { irrigationLevel: 0, toolsLevel: 0, compostLevel: 0, tractorLevel: 0 }, assigned: {}, progress: {} };
            if (!this.state.workers.hunter) this.state.workers.hunter = { total: 0, upgrades: { speedLevel: 0, yieldLevel: 0 }, assigned: {}, progress: {} };
            if (!this.state.workers.archaeology) this.state.workers.archaeology = { total: 0, upgrades: { speedLevel: 0, yieldLevel: 0 }, assigned: {}, progress: {} };
            if (!this.state.workers.divination) this.state.workers.divination = { total: 0, upgrades: { speedLevel: 0, yieldLevel: 0 }, assigned: {}, progress: {} };
            (GAME_DATA.ACTIONS.mining || []).forEach(a => {
                if (typeof this.state.workers.mining.assigned[a.id] !== 'number') this.state.workers.mining.assigned[a.id] = 0;
                if (typeof this.state.workers.mining.progress[a.id] !== 'number') this.state.workers.mining.progress[a.id] = 0;
            });
            (GAME_DATA.ACTIONS.fishing || []).forEach(a => {
                if (typeof this.state.workers.fishing.assigned[a.id] !== 'number') this.state.workers.fishing.assigned[a.id] = 0;
                if (typeof this.state.workers.fishing.progress[a.id] !== 'number') this.state.workers.fishing.progress[a.id] = 0;
            });
            (GAME_DATA.ACTIONS.farming || []).forEach(a => {
                if (typeof this.state.workers.farming.assigned[a.id] !== 'number') this.state.workers.farming.assigned[a.id] = 0;
                if (typeof this.state.workers.farming.progress[a.id] !== 'number') this.state.workers.farming.progress[a.id] = 0;
            });
            (GAME_DATA.ACTIONS.hunter || []).forEach(a => {
                if (typeof this.state.workers.hunter.assigned[a.id] !== 'number') this.state.workers.hunter.assigned[a.id] = 0;
                if (typeof this.state.workers.hunter.progress[a.id] !== 'number') this.state.workers.hunter.progress[a.id] = 0;
            });
            (GAME_DATA.ACTIONS.archaeology || []).forEach(a => {
                if (typeof this.state.workers.archaeology.assigned[a.id] !== 'number') this.state.workers.archaeology.assigned[a.id] = 0;
                if (typeof this.state.workers.archaeology.progress[a.id] !== 'number') this.state.workers.archaeology.progress[a.id] = 0;
            });
            (GAME_DATA.ACTIONS.divination || []).forEach(a => {
                if (typeof this.state.workers.divination.assigned[a.id] !== 'number') this.state.workers.divination.assigned[a.id] = 0;
                if (typeof this.state.workers.divination.progress[a.id] !== 'number') this.state.workers.divination.progress[a.id] = 0;
            });
        }

        // Rune helpers
        getRuneItemIds() { return Object.keys(GAME_DATA.ITEMS).filter(id => id.endsWith('_rune')); }
        getTotalRuneItemCount() { return this.getRuneItemIds().reduce((sum, id) => sum + (this.state.bank[id] || 0), 0); }
        consumeRuneItems(amount) {
            let remaining = amount;
            const ids = this.getRuneItemIds();
            for (const id of ids) {
                const have = this.state.bank[id] || 0; if (have <= 0) continue;
                const take = Math.min(have, remaining);
                this.removeFromBank(id, take);
                remaining -= take;
                if (remaining <= 0) break;
            }
        }
        
        // Ascension system helpers
        updateTotalMetaSkillLevels() {
            let total = 0;
            Object.values(this.state.player.meta_skills).forEach(skill => {
                total += skill.level || 0;
            });
            this.state.player.totalMetaSkillLevels = total;
            return total;
        }
        
        calculateAscensionData() {
            // Calculate the sum of all levels from meta_skills
            const totalLevels = this.updateTotalMetaSkillLevels();
            
            // Define the trigger condition: can ascend when total meta skill levels >= 50
            const canAscend = this.state.player.totalMetaSkillLevels >= 50;
            
            // Calculate base essence to gain using the formula: Math.floor(totalMetaSkillLevels / 2)
            let essenceToGain = Math.floor(this.state.player.totalMetaSkillLevels / 2);
            
            // Apply essence generation boost from ascension upgrades
            const essenceBoost = (this.state.player.ascension_upgrades.essence_generation_boost || 0) * 0.1; // 10% per level
            if (essenceBoost > 0) {
                essenceToGain = Math.floor(essenceToGain * (1 + essenceBoost));
            }
            
            return { canAscend, essenceToGain };
        }
        
        ascend() {
            // Get the essence to gain from current ascension
            const { essenceToGain } = this.calculateAscensionData();
            
            // Add essence to the player's permanent currency
            this.state.player.essence += essenceToGain;
            
            // Memorialize completed Sagas
            if (this.state.homestead && this.state.homestead.sagas) {
                Object.values(this.state.homestead.sagas).forEach(saga => {
                    if (saga.isCompleted && saga.title) {
                        this.state.homestead.completed_sagas.push(saga.title);
                    }
                });
            }
            
            // Store the values we want to keep
            const preservedEssence = this.state.player.essence;
            const preservedAscensionUpgrades = { ...this.state.player.ascension_upgrades };
            const preservedCompletedSagas = [...(this.state.homestead.completed_sagas || [])];
            
            // Reset the game state back to initial values
            this.state = new GameState();
            
            // Restore the preserved values
            this.state.player.essence = preservedEssence;
            this.state.player.ascension_upgrades = preservedAscensionUpgrades;
            this.state.homestead.completed_sagas = preservedCompletedSagas;
            
            // Save the new state
            this.saveGame();
            
            // Immediately hide all ascension UI elements since player can no longer ascend
            this.uiManager.hideAllAscensionUI();
            
            // Show life path selection instead of reloading
            this.uiManager.showLifePathSelection();
        }
        
        purchaseAscensionUpgrade(upgradeId, cost) {
            // Check if player can afford the upgrade
            if (this.state.player.essence < cost) {
                this.uiManager.showModal('Insufficient Essence', `
                    <div class="text-center">
                        <p class="mb-4">You need ${cost} essence to purchase this upgrade.</p>
                        <p class="text-secondary text-sm">Current essence: ${this.state.player.essence}</p>
                    </div>
                `);
                return false;
            }
            
            // Check if upgrade is already maxed
            const currentLevel = this.state.player.ascension_upgrades[upgradeId] || 0;
            const maxLevels = this.getUpgradeMaxLevel(upgradeId);
            
            if (currentLevel >= maxLevels) {
                this.uiManager.showModal('Upgrade Maxed', `
                    <div class="text-center">
                        <p class="mb-4">This upgrade is already at maximum level!</p>
                    </div>
                `);
                return false;
            }
            
            // Purchase the upgrade
            this.state.player.essence -= cost;
            this.state.player.ascension_upgrades[upgradeId] = (this.state.player.ascension_upgrades[upgradeId] || 0) + 1;
            
            // Show success message
            this.uiManager.showFloatingText(`+1 ${this.getUpgradeName(upgradeId)}`, 'text-blue-300');
            this.uiManager.showModal('Upgrade Purchased!', `
                <div class="text-center">
                    <p class="mb-4">🎉 Upgrade purchased successfully!</p>
                    <p class="text-secondary text-sm">${this.getUpgradeName(upgradeId)} is now level ${this.state.player.ascension_upgrades[upgradeId]}</p>
                </div>
            `);
            
            // Save the game
            this.saveGame();
            
            // Refresh the UI
            this.uiManager.renderView();
            
            return true;
        }
        
        getUpgradeMaxLevel(upgradeId) {
            const maxLevels = {
                'starting_gold_boost': 10,
                'starting_stamina_boost': 5,
                'meta_skill_xp_boost': 5,
                'essence_generation_boost': 3,
                'permanent_worker_boost': 3,
                'ascension_memory': 5
            };
            return maxLevels[upgradeId] || 1;
        }
        
        getUpgradeName(upgradeId) {
            const names = {
                'starting_gold_boost': 'Starting Gold Boost',
                'starting_stamina_boost': 'Starting Stamina Boost',
                'meta_skill_xp_boost': 'Meta Skill XP Boost',
                'essence_generation_boost': 'Essence Generation Boost',
                'permanent_worker_boost': 'Permanent Worker Boost',
                'ascension_memory': 'Ascension Memory'
            };
            return names[upgradeId] || 'Unknown Upgrade';
        }

        // Real-life task completion -> stamina + meta XP
        completeRealLifeTask(metaSkillCategory, difficulty) {
            const difficultyMultipliers = { small: 1, medium: 1.5, large: 2.5 }; const multiplier = difficultyMultipliers[difficulty];
            const staminaGained = Math.floor(10 * multiplier); this.state.player.stamina = Math.min(this.state.player.staminaMax, this.state.player.stamina + staminaGained); this.uiManager.showFloatingText(`+${staminaGained} Stamina`, 'text-green-400'); this.uiManager.notifyResource('stamina', staminaGained);
            const xpGained = Math.floor(20 * multiplier); const metaSkill = this.state.player.meta_skills[metaSkillCategory]; if (metaSkill) { metaSkill.addXP(xpGained, this); }
            this.uiManager.render();
        }

        // New Homestead task completion system
        completeHomesteadTask(task, metaSkillCategory) {
            // Reward stamina and XP based on task properties
            const staminaGained = task.stamina;
            const xpGained = task.xp;
            const goldGained = task.gold || 0; // Get gold reward from task
            
            this.state.player.stamina = Math.min(this.state.player.staminaMax, this.state.player.stamina + staminaGained);
            this.uiManager.notifyResource('stamina', staminaGained);
            
            // Add gold reward
            if (goldGained > 0) {
                this.state.player.gold += goldGained;
                this.uiManager.notifyResource('gold', goldGained);
            }
            
            const metaSkill = this.state.player.meta_skills[metaSkillCategory];
            if (metaSkill) { 
                metaSkill.addXP(xpGained, this); 
            }
            
            // Track completion streaks and achievements (for future expansion)
            if (!this.state.homestead) {
                this.state.homestead = {
                    tasksCompleted: 0,
                    streaks: {},
                    lastTaskDate: null,
                    achievements: [],
                    sagas: {}
                };
            }
            
            this.state.homestead.tasksCompleted++;
            const today = new Date().toDateString();
            if (this.state.homestead.lastTaskDate !== today) {
                // Reset daily progress, could add streaks here
                this.state.homestead.lastTaskDate = today;
            }

            // Motivational feedback with gold reward
            const encouragements = [
                "Well done!", "Great job!", "You're amazing!", "Keep it up!", 
                "Progress!", "Excellent!", "Way to go!", "Fantastic!"
            ];
            const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
            
            if (goldGained > 0) {
                this.uiManager.showFloatingText(`${randomEncouragement} +${staminaGained} Stamina +${goldGained} Gold`, 'text-green-400');
            } else {
                this.uiManager.showFloatingText(`${randomEncouragement} +${staminaGained} Stamina`, 'text-green-400');
            }
            
            this.uiManager.render();
        }

        // Saga System - Long-term quest management
        createSaga(title, description, subQuests) {
            if (!this.state.homestead) {
                this.state.homestead = { sagas: {} };
            }
            if (!this.state.homestead.sagas) {
                this.state.homestead.sagas = {};
            }

            const sagaId = `saga_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            const saga = {
                id: sagaId,
                title: title,
                description: description,
                createdAt: Date.now(),
                completedAt: null,
                isCompleted: false,
                subQuests: subQuests.map((quest, index) => ({
                    id: `${sagaId}_sub_${index}`,
                    title: quest.title,
                    description: quest.description || '',
                    isCompleted: false,
                    completedAt: null,
                    order: index
                })),
                progress: 0
            };

            this.state.homestead.sagas[sagaId] = saga;
            this.uiManager.showFloatingText(`New Saga Created: "${title}"`, 'text-purple-400');
            this.uiManager.render();
            return sagaId;
        }

        completeSagaSubQuest(sagaId, subQuestId) {
            const saga = this.state.homestead.sagas?.[sagaId];
            if (!saga || saga.isCompleted) return false;

            const subQuest = saga.subQuests.find(sq => sq.id === subQuestId);
            if (!subQuest || subQuest.isCompleted) return false;

            // Mark sub-quest as completed
            subQuest.isCompleted = true;
            subQuest.completedAt = Date.now();

            // Update saga progress
            const completedSubQuests = saga.subQuests.filter(sq => sq.isCompleted).length;
            saga.progress = (completedSubQuests / saga.subQuests.length) * 100;

            // Check if saga is complete
            if (completedSubQuests === saga.subQuests.length) {
                saga.isCompleted = true;
                saga.completedAt = Date.now();
                this.completeSaga(sagaId);
            }

            // Rewards for sub-quest completion
            const baseXP = 50;
            const baseStamina = 25;
            this.state.player.stamina = Math.min(this.state.player.staminaMax, this.state.player.stamina + baseStamina);
            this.uiManager.notifyResource('stamina', baseStamina);

            // Give XP to related meta-skill (or distribute across all)
            const metaSkills = Object.values(META_SKILLS);
            const randomMetaSkill = metaSkills[Math.floor(Math.random() * metaSkills.length)];
            this.state.player.meta_skills[randomMetaSkill].addXP(baseXP, this);

            this.uiManager.showFloatingText(`Sub-quest completed! +${baseStamina} Stamina, +${baseXP} XP`, 'text-blue-400');
            this.uiManager.render();
            return true;
        }

        completeSaga(sagaId) {
            const saga = this.state.homestead.sagas?.[sagaId];
            if (!saga) return;

            // Epic rewards for completing entire saga
            const sagaXP = 200;
            const sagaStamina = 100;
            const sagaGold = 500;

            this.state.player.stamina = Math.min(this.state.player.staminaMax, this.state.player.stamina + sagaStamina);
            this.addGold(sagaGold);
            this.uiManager.notifyResource('stamina', sagaStamina);

            // Give XP to all meta-skills
            Object.values(this.state.player.meta_skills).forEach(skill => {
                skill.addXP(sagaXP / 5, this);
            });

            // Celebration
            this.uiManager.showModal('🏆 Saga Complete! 🏆', `
                <div class="text-center space-y-4">
                    <h2 class="text-xl font-bold text-yellow-400">"${saga.title}" Complete!</h2>
                    <p class="text-secondary">${saga.description}</p>
                    <div class="space-y-2 text-sm">
                        <div class="text-green-400">+${sagaStamina} Stamina</div>
                        <div class="text-blue-400">+${sagaXP} XP to all Meta Skills</div>
                        <div class="text-yellow-400">+${sagaGold} Gold</div>
                    </div>
                    <p class="text-purple-300 font-bold">🎉 Epic Achievement Unlocked! 🎉</p>
                </div>
            `);

            this.uiManager.showFloatingText(`🏆 SAGA COMPLETE: ${saga.title} 🏆`, 'text-yellow-400');
        }

        deleteSaga(sagaId) {
            if (this.state.homestead.sagas?.[sagaId]) {
                delete this.state.homestead.sagas[sagaId];
                this.uiManager.render();
            }
        }

        // Expedition Manager System
        checkExpeditionUnlocks() {
            const expeditions = GAME_DATA.EXPEDITIONS;
            for (const [key, expedition] of Object.entries(expeditions)) {
                if (!this.state.expeditions.unlocked.includes(expedition.id)) {
                    if (this.isExpeditionUnlocked(expedition)) {
                        this.state.expeditions.unlocked.push(expedition.id);
                        this.uiManager.showFloatingText(`New expedition unlocked: ${expedition.name}!`, 'text-purple-400');
                    }
                }
            }
        }

        isExpeditionUnlocked(expedition) {
            if (!expedition.unlockRequirements || expedition.unlockRequirements.length === 0) {
                return true; // No requirements means always unlocked
            }

            return expedition.unlockRequirements.every(req => {
                switch (req.type) {
                    case 'skill':
                        return this.state.player.meta_skills[req.skill]?.level >= req.level;
                    case 'army_power':
                        const currentDps = this.state.army.production?.dps || 0;
                        return currentDps >= req.minDps;
                    case 'total_army_power':
                        const dps = this.state.army.production?.dps || 0;
                        const hps = this.state.army.production?.hps || 0;
                        return dps >= (req.minDps || 0) && hps >= (req.minHps || 0);
                    case 'empire_units':
                        const ownedUnits = this.state.empire.units[req.unitId] || 0;
                        return ownedUnits >= req.minCount;
                    case 'expedition_completed':
                        const completedCount = this.state.expeditions.history[req.expeditionId] || 0;
                        return completedCount >= req.minTimes;
                    case 'item_owned':
                        const bankCount = this.state.bank[req.itemId] || 0;
                        return bankCount >= req.minCount;
                    default:
                        return false;
                }
            });
        }

        // Enhanced army composition validation
        validateArmyRequirements(expedition) {
            const armyReqs = expedition.armyRequirements;
            if (!armyReqs) return { isValid: true, missingUnits: [], warnings: [] };

            const currentArmy = this.state.army.units;
            const totalUnits = Object.values(currentArmy).reduce((sum, count) => sum + count, 0);
            let missingUnits = [];
            let warnings = [];

            // Check minimum units
            if (totalUnits < armyReqs.minUnits) {
                missingUnits.push(`Need ${armyReqs.minUnits - totalUnits} more units total`);
            }

            // Check specific unit requirements
            if (armyReqs.specificUnits) {
                armyReqs.specificUnits.forEach(req => {
                    const currentCount = currentArmy[req.type] || 0;
                    if (currentCount < req.count) {
                        const missing = req.count - currentCount;
                        missingUnits.push(`Need ${missing} more ${GAME_DATA.ARMY_CLASSES[req.type].name}${missing > 1 ? 's' : ''}: ${req.reason}`);
                    }
                });
            }

            return { 
                isValid: missingUnits.length === 0, 
                missingUnits, 
                warnings,
                canDeploy: missingUnits.length === 0 && totalUnits >= armyReqs.minUnits
            };
        }

        // Calculate tactical bonuses for army composition
        calculateArmyTacticalBonus(expedition) {
            const armyReqs = expedition.armyRequirements;
            if (!armyReqs) return { totalBonus: 0, bonusBreakdown: [] };

            const currentArmy = this.state.army.units;
            let totalBonus = 0;
            let bonusBreakdown = [];

            // Tactical advantage bonuses
            if (armyReqs.tacticalAdvantage) {
                Object.entries(armyReqs.tacticalAdvantage).forEach(([unitType, advantage]) => {
                    const unitCount = currentArmy[unitType] || 0;
                    if (unitCount > 0) {
                        const bonus = advantage.bonus * unitCount;
                        totalBonus += bonus;
                        bonusBreakdown.push({
                            source: `${unitCount}x ${GAME_DATA.ARMY_CLASSES[unitType].name}`,
                            bonus: bonus,
                            reason: advantage.reason
                        });
                    }
                });
            }

            // Composition bonuses
            if (armyReqs.preferredComposition) {
                armyReqs.preferredComposition.forEach(comp => {
                    if (comp.type === 'formation' && comp.units) {
                        const hasFormation = comp.units.every(unit => (currentArmy[unit] || 0) > 0);
                        if (hasFormation) {
                            totalBonus += comp.bonus;
                            bonusBreakdown.push({
                                source: `${comp.type} Formation`,
                                bonus: comp.bonus,
                                reason: `Perfect formation: ${comp.units.map(u => GAME_DATA.ARMY_CLASSES[u].name).join(', ')}`
                            });
                        }
                    }
                });
            }

            return { totalBonus: Math.max(-50, Math.min(100, totalBonus)), bonusBreakdown };
        }

        getAvailableExpeditions() {
            return Object.values(GAME_DATA.EXPEDITIONS)
                .filter(exp => this.state.expeditions.unlocked.includes(exp.id))
                .sort((a, b) => {
                    // Sort by difficulty/tier
                    const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3, 'Epic': 4, 'Legendary': 5 };
                    return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
                });
        }

        launchExpedition(expeditionId) {
            if (this.state.expeditions.active) {
                this.uiManager.showModal('Expedition In Progress', 'You already have an expedition in progress! Wait for it to complete or cancel it first.');
                return false;
            }

            const expedition = GAME_DATA.EXPEDITIONS[expeditionId.toUpperCase()];
            if (!expedition) {
                console.error('Expedition not found:', expeditionId);
                return false;
            }

            if (!this.state.expeditions.unlocked.includes(expedition.id)) {
                this.uiManager.showModal('Expedition Locked', 'This expedition has not been unlocked yet.');
                return false;
            }

            // Enhanced army validation
            const armyValidation = this.validateArmyRequirements(expedition);
            if (!armyValidation.canDeploy) {
                const missingText = armyValidation.missingUnits.join('<br>• ');
                this.uiManager.showModal('🚫 Army Requirements Not Met', `
                    <div class="text-left">
                        <p class="mb-3">Your army does not meet the requirements for this expedition:</p>
                        <div class="text-red-300 text-sm space-y-1">• ${missingText}</div>
                        <p class="mt-4 text-secondary text-xs">Visit the Army tab to recruit the required units.</p>
                    </div>
                `);
                return false;
            }

            // Check resource costs
            if (expedition.resourceCost) {
                const missingResources = [];
                Object.entries(expedition.resourceCost).forEach(([resourceId, requiredAmount]) => {
                    const available = this.state.bank[resourceId] || 0;
                    if (available < requiredAmount) {
                        missingResources.push(`${GAME_DATA.ITEMS[resourceId]?.name || resourceId}: ${available}/${requiredAmount}`);
                    }
                });
                
                if (missingResources.length > 0) {
                    const resourceText = missingResources.join('<br>• ');
                    this.uiManager.showModal('🚫 Insufficient Resources', `
                        <div class="text-left">
                            <p class="mb-3">You need these resources to launch this expedition:</p>
                            <div class="text-red-300 text-sm space-y-1">• ${resourceText}</div>
                            <p class="mt-4 text-secondary text-xs">Build Homestead Farms and Workshops to produce Rations and Tools!</p>
                        </div>
                    `);
                    return false;
                }
            }
            
            // Check if player is ready
            const playerReady = this.state.player.hp > 0 && this.state.player.stamina >= 20;
            
            if (!playerReady) {
                this.uiManager.showModal('Not Ready', 'You need at least 20 stamina and full health to launch an expedition.');
                return false;
            }

            // Deduct stamina cost
            this.state.player.stamina = Math.max(0, this.state.player.stamina - 20);
            
            // Deduct resource costs
            if (expedition.resourceCost) {
                Object.entries(expedition.resourceCost).forEach(([resourceId, requiredAmount]) => {
                    this.removeFromBank(resourceId, requiredAmount);
                });
            }

            // Calculate and store tactical bonuses for this expedition
            const tacticalBonus = this.calculateArmyTacticalBonus(expedition);
            
            // Start expedition
            this.state.expeditions.active = expedition.id;
            this.state.expeditions.startTime = Date.now();
            this.state.expeditions.progress = 0;
            this.state.expeditions.tacticalBonus = tacticalBonus; // Store for resolution

            let bonusText = '';
            if (tacticalBonus.totalBonus !== 0) {
                bonusText = ` (${tacticalBonus.totalBonus > 0 ? '+' : ''}${tacticalBonus.totalBonus}% tactical bonus!)`;
            }

            this.uiManager.showFloatingText(`Expedition launched: ${expedition.name}${bonusText}`, 'text-blue-400');
            this.uiManager.render();
            return true;
        }

        updateExpeditionProgress() {
            const active = this.state.expeditions.active;
            if (!active) return;

            const expedition = GAME_DATA.EXPEDITIONS[active.toUpperCase()];
            if (!expedition) return;

            const elapsed = Date.now() - this.state.expeditions.startTime;
            const progress = Math.min(100, (elapsed / expedition.duration) * 100);
            this.state.expeditions.progress = progress;

            if (progress >= 100) {
                this.resolveExpedition();
            }
        }

        resolveExpedition() {
            const active = this.state.expeditions.active;
            if (!active) return;

            const expedition = GAME_DATA.EXPEDITIONS[active.toUpperCase()];
            if (!expedition) return;

            // Calculate success chance
            let successChance = expedition.successRate;
            
            // Modifiers based on player power
            const playerLevel = Math.max(...Object.values(this.state.player.meta_skills).map(s => s.level));
            const armyDps = this.state.army.production?.dps || 0;
            const armyHps = this.state.army.production?.hps || 0;
            
            // Bonus from player meta skills
            successChance += Math.min(20, playerLevel * 0.5);
            // Bonus from army power
            successChance += Math.min(15, armyDps * 0.2);
            successChance += Math.min(10, armyHps * 0.3);
            
            // Apply tactical bonuses from army composition
            const tacticalBonus = this.state.expeditions.tacticalBonus || { totalBonus: 0, bonusBreakdown: [] };
            successChance += tacticalBonus.totalBonus;
            
            successChance = Math.min(95, Math.max(5, successChance)); // Cap between 5-95%
            
            const success = Math.random() * 100 < successChance;
            
            // Track completion
            if (!this.state.expeditions.history[expedition.id]) {
                this.state.expeditions.history[expedition.id] = 0;
            }
            if (success) {
                this.state.expeditions.history[expedition.id]++;
            }

            // Clear expedition state
            this.state.expeditions.active = null;
            this.state.expeditions.startTime = null;
            this.state.expeditions.progress = 0;

            // Process rewards
            if (success) {
                this.processExpeditionRewards(expedition);
                this.uiManager.showModal(`🎉 ${expedition.name} - Success! 🎉`, 
                    `<div class="text-center">
                        <p class="text-green-400 mb-3">Your expedition was successful!</p>
                        <p class="text-secondary text-sm">Rewards have been added to your inventory.</p>
                        <p class="text-xs text-purple-300 mt-3">Completed: ${this.state.expeditions.history[expedition.id]} times</p>
                    </div>`
                );
            } else {
                // Failure consequences
                const hpLoss = Math.floor(this.state.player.hpMax * 0.3);
                this.state.player.hp = Math.max(1, this.state.player.hp - hpLoss);
                
                this.uiManager.showModal(`❌ ${expedition.name} - Failed ❌`, 
                    `<div class="text-center">
                        <p class="text-red-400 mb-3">Your expedition failed!</p>
                        <p class="text-secondary text-sm">You lost ${hpLoss} HP but gained valuable experience.</p>
                        <p class="text-yellow-300 text-sm mt-2">Failure teaches resilience!</p>
                    </div>`
                );
                
                // Small consolation XP for failure
                Object.values(this.state.player.meta_skills).forEach(skill => {
                    skill.addXP(10, this);
                });
            }

            // Check for new expedition unlocks
            this.checkExpeditionUnlocks();
            this.uiManager.render();
        }

        processExpeditionRewards(expedition) {
            const rewards = expedition.rewards;
            let rewardSummary = [];

            // XP rewards
            if (rewards.baseXP) {
                Object.entries(rewards.baseXP).forEach(([skillName, xp]) => {
                    if (this.state.player.meta_skills[skillName]) {
                        this.state.player.meta_skills[skillName].addXP(xp, this);
                        rewardSummary.push(`+${xp} ${skillName} XP`);
                    }
                });
            }

            // Gold rewards
            if (rewards.gold) {
                const goldMin = Array.isArray(rewards.gold) ? rewards.gold[0] : rewards.gold;
                const goldMax = Array.isArray(rewards.gold) ? rewards.gold[1] : rewards.gold;
                const goldAmount = Math.floor(Math.random() * (goldMax - goldMin + 1)) + goldMin;
                this.addGold(goldAmount);
                rewardSummary.push(`+${goldAmount} Gold`);
            }

            // Loot rewards
            if (rewards.loot) {
                rewards.loot.forEach(lootItem => {
                    if (Math.random() * 100 < lootItem.chance) {
                        const qty = Array.isArray(lootItem.qty) 
                            ? Math.floor(Math.random() * (lootItem.qty[1] - lootItem.qty[0] + 1)) + lootItem.qty[0]
                            : lootItem.qty;

                        if (lootItem.type === 'item') {
                            this.addToBank(lootItem.id, qty);
                            const itemName = GAME_DATA.ITEMS[lootItem.id]?.name || lootItem.id;
                            rewardSummary.push(`+${qty} ${itemName}`);
                        } else if (lootItem.type === 'blueprint') {
                            // Add blueprint to a special blueprints collection
                            if (!this.state.blueprints) this.state.blueprints = {};
                            if (!this.state.blueprints[lootItem.id]) this.state.blueprints[lootItem.id] = 0;
                            this.state.blueprints[lootItem.id] += qty;
                            rewardSummary.push(`+${qty} ${lootItem.id.replace('_blueprint', '').replace(/_/g, ' ')} Blueprint`);
                        }
                    }
                });
            }

            // Show floating text for rewards
            if (rewardSummary.length > 0) {
                this.uiManager.showFloatingText(`Expedition rewards: ${rewardSummary.slice(0, 3).join(', ')}`, 'text-green-400');
            }
        }

        cancelExpedition() {
            if (!this.state.expeditions.active) return;

            const expedition = GAME_DATA.EXPEDITIONS[this.state.expeditions.active.toUpperCase()];
            
            this.state.expeditions.active = null;
            this.state.expeditions.startTime = null;
            this.state.expeditions.progress = 0;

            // Small penalty for cancelling
            const staminaLoss = 10;
            this.state.player.stamina = Math.max(0, this.state.player.stamina - staminaLoss);
            
            this.uiManager.showFloatingText(`Expedition cancelled. -${staminaLoss} Stamina`, 'text-red-400');
            this.uiManager.render();
        }

        // Spells
        castSpell(spellId) {
            const spell = GAME_DATA.SPELLS.find(s => s.id === spellId); if (!spell) return;
            const availableRunes = this.state.player.runes + this.getTotalRuneItemCount();
            if (availableRunes < spell.runeCost) { this.uiManager.showModal('Not Enough Runes', '<p>You lack the runes to cast this spell.</p>'); return; }
            // Spend generic runes first, then consume crafted rune items from bank
            const spendFromGeneric = Math.min(this.state.player.runes, spell.runeCost);
            this.state.player.runes -= spendFromGeneric;
            const remaining = spell.runeCost - spendFromGeneric;
            if (remaining > 0) this.consumeRuneItems(remaining);
            this.state.player.activeBuffs[spell.effect] = Date.now() + spell.durationMs;
            this.uiManager.showFloatingText(`${spell.name} activated!`, 'text-purple-300');
            this.uiManager.renderView();
        }

        // Chests
        buyChest(chestId) {
            const chest = GAME_DATA.CHESTS.find(c => c.id === chestId); if (!chest) return;
            if (chest.keyItemID && !(this.state.bank[chest.keyItemID] > 0)) { this.uiManager.showModal('Locked Chest', '<p>You need a special key to open this chest.</p>'); return; }
            const price = chest.cost; if (price > 0 && !this.spendGold(price)) { this.uiManager.showModal('Not Enough Gold', '<p>You cannot afford this chest.</p>'); return; }
            if (chest.keyItemID) this.removeFromBank(chest.keyItemID, 1);
            const [minR, maxR] = chest.rewardCount; const rolls = Math.floor(Math.random() * (maxR - minR + 1)) + minR;
            const rewards = [];
            for (let i = 0; i < rolls; i++) {
                const pick = chest.lootTable[Math.floor(Math.random() * chest.lootTable.length)];
                if (pick.type === 'currency') { const amt = pick.amount; this.addGold(amt); rewards.push(`+${amt} Gold`); }
                if (pick.type === 'item') { const q = Array.isArray(pick.qty) ? (Math.floor(Math.random() * (pick.qty[1] - pick.qty[0] + 1)) + pick.qty[0]) : (pick.qty || 1); this.addToBank(pick.id, q); rewards.push(`+${q} ${GAME_DATA.ITEMS[pick.id]?.name || pick.id}`); }
                if (pick.type === 'runes') { const amt = pick.amount; this.state.player.runes += amt; this.uiManager.notifyResource('runes', amt); rewards.push(`+${amt} Runes`); }
            }
            this.uiManager.showModal('Chest Opened!', `<div class="space-y-1">${rewards.map(r => `<p>${r}</p>`).join('')}</div>`);
            this.uiManager.renderView();
        }
        
        // General Store
        buyShopItem(itemId, cost) {
            const item = GAME_DATA.SHOP_ITEMS.find(i => i.id === itemId);
            if (!item) return;
            
            if (!this.spendGold(cost)) {
                this.uiManager.showModal('Not Enough Gold', `<p>You need ${cost} gold to buy ${item.name}.</p>`);
                return;
            }
            
            this.addToBank(itemId, 1);
            this.uiManager.showFloatingText(`+1 ${item.name}`, 'text-green-300');
            this.uiManager.renderView();
        }

        // Combat
        startCombat(enemyId) {
            if (this.state.combat.inCombat) return; const e = JSON.parse(JSON.stringify(GAME_DATA.COMBAT.ENEMIES.find(x => x.id === enemyId))); if (!e) return;
            this.state.combat.inCombat = true; this.state.combat.enemy = e; this.state.player.hp = Math.min(this.state.player.hp, this.state.player.hpMax);
            this.state.combat.lastPlayerAttack = 0; this.state.combat.lastEnemyAttack = 0; this.uiManager.renderView();
        }
        endCombat(victory) {
            if (!this.state.combat.inCombat) return; if (!victory) { this.uiManager.showModal('Defeated', '<p>You were defeated. Rest to recover HP.</p>'); }
            this.state.combat.inCombat = false; this.state.combat.enemy = null; this.uiManager.renderView();
        }
        handleEnemyDefeat(enemy) {
            // Gold
            const g = Math.floor(Math.random() * (enemy.gold[1] - enemy.gold[0] + 1)) + enemy.gold[0]; this.addGold(g);
            // Drops
            (enemy.drops || []).forEach(drop => { if (Math.random() * 100 < drop.chance) { const q = Math.floor(Math.random() * (drop.qty[1] - drop.qty[0] + 1)) + drop.qty[0]; this.addToBank(drop.id, q); } });
            // XP to Strength
            this.state.player.meta_skills[META_SKILLS.STRENGTH].addXP(15 + enemy.level * 2, this);
            this.uiManager.showFloatingText(`${enemy.name} defeated!`, 'text-green-400');
            this.endCombat(true);
        }
        calculatePlayerDamage(enemy) {
            let base = 5; if (this.state.player.weapon && GAME_DATA.ITEMS[this.state.player.weapon]?.damage) base += GAME_DATA.ITEMS[this.state.player.weapon].damage;
            const strBonus = 1 + (this.state.player.meta_skills[META_SKILLS.STRENGTH].level - 1) * 0.03; const dmg = Math.max(1, Math.floor((base * strBonus) - enemy.defense * 0.5));
            return dmg;
        }
        eatFood(itemId) { const item = GAME_DATA.ITEMS[itemId]; if (!item || !item.heals) return; if ((this.state.bank[itemId] || 0) <= 0) return; this.removeFromBank(itemId, 1); this.state.player.hp = Math.min(this.state.player.hpMax, this.state.player.hp + item.heals); this.uiManager.showFloatingText(`+${item.heals} HP`, 'text-green-300'); this.uiManager.renderView(); }
        equipWeapon(itemId) { if (!GAME_DATA.ITEMS[itemId]) return; if ((this.state.bank[itemId] || 0) <= 0) return; this.state.player.weapon = itemId; this.uiManager.renderView(); }
        
        // Bank item action functions
        useRune(itemId) { 
            const item = GAME_DATA.ITEMS[itemId]; 
            if (!item || (this.state.bank[itemId] || 0) <= 0) return; 
            this.removeFromBank(itemId, 1); 
            this.uiManager.showFloatingText(`Used ${item.name}`, 'text-purple-300'); 
            this.uiManager.renderView(); 
        }
        
        castSpell(itemId) { 
            const item = GAME_DATA.ITEMS[itemId]; 
            if (!item || (this.state.bank[itemId] || 0) <= 0) return; 
            this.removeFromBank(itemId, 1); 
            this.uiManager.showFloatingText(`Cast ${item.name}`, 'text-indigo-300'); 
            this.uiManager.renderView(); 
        }
        
        openChest(itemId) { 
            const item = GAME_DATA.ITEMS[itemId]; 
            if (!item || (this.state.bank[itemId] || 0) <= 0) return; 
            this.removeFromBank(itemId, 1); 
            this.uiManager.showFloatingText(`Opened ${item.name}`, 'text-yellow-300'); 
            this.uiManager.renderView(); 
        }
        
        activateGlyph(itemId) { 
            const item = GAME_DATA.ITEMS[itemId]; 
            if (!item || (this.state.bank[itemId] || 0) <= 0) return; 
            this.removeFromBank(itemId, 1); 
            this.uiManager.showFloatingText(`Activated ${item.name}`, 'text-orange-300'); 
            this.uiManager.renderView(); 
        }

        saveGame() { try { localStorage.setItem('chimeraSaveData_web_v1', JSON.stringify(this.state)); } catch (e) { console.error('Failed to save game:', e); } }
        loadGame() {
            const savedData = localStorage.getItem('chimeraSaveData_web_v1');
            if (savedData) {
                try {
                    const parsedData = JSON.parse(savedData);
                    Object.assign(this.state, parsedData);
                    
                    // Clear any active actions on load - they should not persist across sessions
                    this.state.activeActions = {};
                    this.state.activeAction = null;
                    
                    // Rehydrate skill objects
                    Object.keys(GAME_DATA.SKILLS).forEach(id => { const skill = new Skill(id, GAME_DATA.SKILLS[id].name); if (parsedData.player.skills?.[id]) Object.assign(skill, parsedData.player.skills[id]); this.state.player.skills[id] = skill; });
                    Object.values(META_SKILLS).forEach(name => { const skill = new Skill(name, name); if (parsedData.player.meta_skills?.[name]) Object.assign(skill, parsedData.player.meta_skills[name]); this.state.player.meta_skills[name] = skill; });
                    // Rehydrate mastery
                    Object.keys(parsedData.player.mastery || {}).forEach(skillId => {
                        if (!this.state.player.mastery[skillId]) this.state.player.mastery[skillId] = {};
                        Object.keys(parsedData.player.mastery[skillId]).forEach(actionId => { const mastery = new Mastery(); Object.assign(mastery, parsedData.player.mastery[skillId][actionId]); this.state.player.mastery[skillId][actionId] = mastery; });
                    });
                    
                            // Backfill ascension system properties for existing saves
        if (typeof this.state.player.essence !== 'number') this.state.player.essence = 0;
        if (!this.state.player.ascension_upgrades) this.state.player.ascension_upgrades = {};
        if (typeof this.state.player.totalMetaSkillLevels !== 'number') this.state.player.totalMetaSkillLevels = 0;
        if (!this.state.player.life_path) this.state.player.life_path = null;
                    
                            // Backfill homestead completed_sagas for existing saves
        if (!this.state.homestead) this.state.homestead = { completed_sagas: [] };
        if (!this.state.homestead.completed_sagas) this.state.homestead.completed_sagas = [];
        
        // Backfill Well of Serenity state for existing saves
        if (!this.state.homestead.wellOfSerenity) {
            this.state.homestead.wellOfSerenity = {
                hasReceivedBoon: false,
                isMeditating: false,
                meditationStartTime: null,
                meditationProgress: 0
            };
        }
        
        // Backfill Daily Attunement state for existing saves
        if (!this.state.homestead.dailyAttunement) {
            this.state.homestead.dailyAttunement = {
                lastSyncDate: null,
                hasClaimedToday: false,
                healthData: {
                    steps: 0,
                    mindfulMinutes: 0,
                    sleepHours: 0
                },
                pendingRewards: {
                    gold: 0,
                    essenceShards: 0,
                    staminaBonus: 0
                },
                totalStats: {
                    totalSteps: 0,
                    totalMindfulMinutes: 0,
                    totalSleepHours: 0,
                    daysTracked: 0
                }
            };
        }
        
        // Backfill essence_shards for existing saves
        if (typeof this.state.player.essence_shards !== 'number') {
            this.state.player.essence_shards = 0;
        }
                    
                    // Update total meta skill levels for ascension system
                    this.updateTotalMetaSkillLevels();
                    
                    this.state.lastUpdate = Date.now();
                    // Backfill worker system defaults if missing
                    if (!this.state.workers) {
                        this.state.workers = {};
                    }
                    Object.keys(GAME_DATA.SKILLS)
                        .filter(id => GAME_DATA.SKILLS[id].type === 'gathering')
                        .forEach(skillId => {
                            if (!this.state.workers[skillId]) { this.state.workers[skillId] = { total: 0, upgrades: { speedLevel: 0, yieldLevel: 0 }, assigned: {}, progress: {} }; }
                            (GAME_DATA.ACTIONS[skillId] || []).forEach(a => {
                                if (typeof this.state.workers[skillId].assigned[a.id] !== 'number') this.state.workers[skillId].assigned[a.id] = 0;
                                if (typeof this.state.workers[skillId].progress[a.id] !== 'number') this.state.workers[skillId].progress[a.id] = 0;
                            });
                        });
                    // Backfill empire system defaults if missing
                    if (!this.state.empire) { this.state.empire = { units: {}, lastTick: Date.now(), production: { goldPerSec: 0, runesPerSec: 0, essencePerSec: 0, rationsPerSec: 0, toolsPerSec: 0, premiumRationsPerSec: 0, specializedToolsPerSec: 0 }, buffers: { gold: 0, runes: 0, essence: 0, rations: 0, tools: 0, premiumRations: 0, specializedTools: 0 } }; }
                    if (!this.state.empire.units) this.state.empire.units = {};
                    Object.keys(GAME_DATA.UNITS).forEach(id => { if (typeof this.state.empire.units[id] !== 'number') this.state.empire.units[id] = 0; });
                    // Backfill army system defaults if missing
                    if (!this.state.army) { this.state.army = { units: {}, lastTick: Date.now(), production: { dps: 0, hps: 0, hungry: false }, upkeep: { foodBuffer: 0, hungry: false }, fly: { accumDmg: 0, accumHeal: 0, lastFlush: Date.now() }, hp: 100, hpMax: 100, mana: 50, manaMax: 50 }; }
                    if (!this.state.army.units) this.state.army.units = {};
                    // Backfill HP/Mana for existing armies
                    if (typeof this.state.army.hp !== 'number') this.state.army.hp = 100;
                    if (typeof this.state.army.hpMax !== 'number') this.state.army.hpMax = 100;
                    if (typeof this.state.army.mana !== 'number') this.state.army.mana = 50;
                    if (typeof this.state.army.manaMax !== 'number') this.state.army.manaMax = 50;
                    Object.keys(GAME_DATA.ARMY_CLASSES).forEach(id => { if (typeof this.state.army.units[id] !== 'number') this.state.army.units[id] = 0; });
                    // Update max stats based on loaded army
                    this.updateArmyMaxStats();
                    
                    // Backfill expedition system for existing saves
                    if (!this.state.expeditions) {
                        this.state.expeditions = { 
                            active: null, 
                            history: {}, 
                            unlocked: ['goblin_warren'], 
                            startTime: null,
                            progress: 0
                        };
                    }
                    if (!this.state.blueprints) this.state.blueprints = {};
                    
                    // Backfill enhanced empire system for existing saves
                    this.backfillEnhancedEmpireSystem();
                 } catch (e) { console.error('Failed to load game, starting new.', e); this.state = new GameState(); }
             }
         }
         
         backfillEnhancedEmpireSystem() {
             // Backfill worker equipment and morale systems
             Object.keys(this.state.workers).forEach(skillId => {
                 const ws = this.state.workers[skillId];
                 
                 // Add equipment system if missing
                 if (!ws.equipment) {
                     ws.equipment = { 
                         tools: {},
                         clothing: {},
                         policies: { ...GAME_DATA.EQUIPMENT_POLICIES }
                     };
                 }
                 
                 // Add morale system if missing
                 if (typeof ws.morale !== 'number') {
                     ws.morale = 100;
                 }
                 if (!ws.moraleFactors) {
                     ws.moraleFactors = { base: 100, equipment: 0, facilities: 0, overwork: 0 };
                 }
             });
             
             // Backfill empire facilities
             if (!this.state.empire.facilities) {
                 this.state.empire.facilities = {};
                 Object.keys(GAME_DATA.EMPIRE_FACILITIES || {}).forEach(id => { 
                     this.state.empire.facilities[id] = { level: 0, active: true }; 
                 });
             }
             
             // Backfill empire equipment system
             if (!this.state.empire.equipment) {
                 this.state.empire.equipment = {
                     inventory: {},
                     policies: { ...GAME_DATA.EQUIPMENT_POLICIES },
                     maintenanceQueue: []
                 };
             }
             
             // Backfill new resource buffers
             if (!this.state.empire.buffers.rations) this.state.empire.buffers.rations = 0;
             if (!this.state.empire.buffers.tools) this.state.empire.buffers.tools = 0;
             if (!this.state.empire.buffers.premiumRations) this.state.empire.buffers.premiumRations = 0;
             if (!this.state.empire.buffers.specializedTools) this.state.empire.buffers.specializedTools = 0;
             
             // Backfill production tracking
             if (!this.state.empire.production.rationsPerSec) this.state.empire.production.rationsPerSec = 0;
             if (!this.state.empire.production.toolsPerSec) this.state.empire.production.toolsPerSec = 0;
             if (!this.state.empire.production.premiumRationsPerSec) this.state.empire.production.premiumRationsPerSec = 0;
             if (!this.state.empire.production.specializedToolsPerSec) this.state.empire.production.specializedToolsPerSec = 0;
             
             // Initialize morale for all workers
             this.updateAllWorkerMorale();
         }

        // Army helpers
        getArmyUnitCost(id) { const data = GAME_DATA.ARMY_CLASSES[id]; const owned = this.state.army.units[id] || 0; return Math.floor(data.baseCost * Math.pow(data.costGrowth, owned)); }
        hireArmyUnit(id) { const cost = this.getArmyUnitCost(id); if (!this.spendGold(cost)) { this.uiManager.showModal('Insufficient Gold', `<p>You need ${cost} gold to hire a ${GAME_DATA.ARMY_CLASSES[id].name}.</p>`); return; } this.state.army.units[id] = (this.state.army.units[id] || 0) + 1; this.updateArmyMaxStats(); this.uiManager.showFloatingText(`+1 ${GAME_DATA.ARMY_CLASSES[id].name}`, 'text-green-300'); this.uiManager.renderView(); }
    
    rallyArmy() {
        // Simple rally function - could be expanded later
        this.uiManager.showFloatingText('Army rallied!', 'text-blue-400');
        this.uiManager.renderView();
    }
        
        updateArmyMaxStats() {
            const totalUnits = Object.values(this.state.army.units).reduce((sum, count) => sum + count, 0);
            this.state.army.hpMax = Math.max(100, 100 + totalUnits * 25); // Base 100 + 25 per unit
            this.state.army.manaMax = Math.max(50, 50 + totalUnits * 15); // Base 50 + 15 per unit
            // Don't exceed max if current values are higher
            this.state.army.hp = Math.min(this.state.army.hp, this.state.army.hpMax);
            this.state.army.mana = Math.min(this.state.army.mana, this.state.army.manaMax);
        }

        feedArmy(itemId) {
            const item = GAME_DATA.ITEMS[itemId];
            if (!item || !item.heals) return;
            if ((this.state.bank[itemId] || 0) <= 0) return;
            
            this.removeFromBank(itemId, 1);
            const healAmount = item.heals * 2; // Army gets 2x healing from food
            const oldHp = this.state.army.hp;
            this.state.army.hp = Math.min(this.state.army.hpMax, this.state.army.hp + healAmount);
            const actualHeal = this.state.army.hp - oldHp;
            
            this.uiManager.showFloatingText(`Army +${actualHeal} HP`, 'text-green-300');
            this.uiManager.renderView();
        }

        supplyArmyPotion(itemId) {
            const item = GAME_DATA.ITEMS[itemId];
            // For now, treat potions/elixirs as mana restoration (we can expand this later)
            if (!item || !item.name.toLowerCase().includes('elixir') && !item.name.toLowerCase().includes('potion')) return;
            if ((this.state.bank[itemId] || 0) <= 0) return;
            
            this.removeFromBank(itemId, 1);
            const manaAmount = 25; // Standard mana restoration
            const oldMana = this.state.army.mana;
            this.state.army.mana = Math.min(this.state.army.manaMax, this.state.army.mana + manaAmount);
            const actualMana = this.state.army.mana - oldMana;
            
            this.uiManager.showFloatingText(`Army +${actualMana} Mana`, 'text-blue-300');
            this.uiManager.renderView();
        }
        calculateArmyOutputPerSecond() {
            const units = this.state.army.units || {};
            let dps = 0, hps = 0, foodPerMin = 0;
            for (const id of Object.keys(GAME_DATA.ARMY_CLASSES)) {
                const def = GAME_DATA.ARMY_CLASSES[id];
                const count = units[id] || 0;
                if (count <= 0) continue;
                dps += (def.dps || 0) * count;
                hps += (def.hps || 0) * count;
                foodPerMin += (def.foodPerMin || 0) * count;
            }
            
            // Apply equipment bonuses
            const equippedItems = this.state.army.equipment || {};
            
            // Apply weapon bonus
            if (equippedItems.weapon) {
                const weaponData = GAME_DATA.ITEMS[equippedItems.weapon];
                if (weaponData && weaponData.dps_bonus) {
                    dps += weaponData.dps_bonus;
                }
            }
            
            // Apply shield bonus (for future use)
            if (equippedItems.shield) {
                const shieldData = GAME_DATA.ITEMS[equippedItems.shield];
                if (shieldData && shieldData.hp_bonus) {
                    // Shield could provide defensive bonuses in the future
                    // For now, we'll just track it
                }
            }
            
            // Apply helmet bonus (for future use)
            if (equippedItems.helmet) {
                const helmetData = GAME_DATA.ITEMS[equippedItems.helmet];
                if (helmetData && helmetData.hp_bonus) {
                    // Helmet could provide defensive bonuses in the future
                    // For now, we'll just track it
                }
            }
            
            // Apply ring bonus (for future use)
            if (equippedItems.ring) {
                const ringData = GAME_DATA.ITEMS[equippedItems.ring];
                if (ringData && ringData.bonus) {
                    // Ring could provide various bonuses in the future
                    // For now, we'll just track it
                }
            }
            
            // Apply amulet bonus (for future use)
            if (equippedItems.amulet) {
                const amuletData = GAME_DATA.ITEMS[equippedItems.amulet];
                if (amuletData && amuletData.bonus) {
                    // Amulet could provide various bonuses in the future
                    // For now, we'll just track it
                }
            }
            
            return { dps, hps, foodPerMin };
        }
        
        equipArmyItem(itemId) {
            // Check if player has the item in their bank
            const itemCount = this.state.bank[itemId] || 0;
            if (itemCount <= 0) {
                this.uiManager.showFloatingText(`You don't have any ${GAME_DATA.ITEMS[itemId]?.name || itemId}!`, 'text-red-400');
                return false;
            }
            
            // Get item data to determine its type
            const itemData = GAME_DATA.ITEMS[itemId];
            if (!itemData) {
                this.uiManager.showFloatingText(`Unknown item: ${itemId}`, 'text-red-400');
                return false;
            }
            
            // Equip the item based on its type
            if (itemData.type === 'weapon') {
                this.state.army.equipment.weapon = itemId;
                this.uiManager.showFloatingText(`⚔️ Army equipped with ${itemData.name}!`, 'text-green-400');
            } else if (itemData.type === 'shield') {
                this.state.army.equipment.shield = itemId;
                this.uiManager.showFloatingText(`🛡️ Army equipped with ${itemData.name}!`, 'text-blue-400');
            } else if (itemData.type === 'armor') {
                this.state.army.equipment.helmet = itemId;
                this.uiManager.showFloatingText(`🪖 Army equipped with ${itemData.name}!`, 'text-blue-400');
            } else if (itemData.type === 'ring') {
                this.state.army.equipment.ring = itemId;
                this.uiManager.showFloatingText(`💍 Army equipped with ${itemData.name}!`, 'text-purple-400');
            } else if (itemData.type === 'amulet') {
                this.state.army.equipment.amulet = itemId;
                this.uiManager.showFloatingText(`📿 Army equipped with ${itemData.name}!`, 'text-yellow-400');
            } else if (itemData.type === 'ammunition') {
                this.state.army.equipment.ammunition = itemId;
                this.uiManager.showFloatingText(`🏹 Army equipped with ${itemData.name}!`, 'text-yellow-400');
            } else {
                this.uiManager.showFloatingText(`${itemData.name} is not equipment!`, 'text-red-400');
                return false;
            }
            
            // Update UI to reflect the change
            if (this.uiManager) {
                this.uiManager.renderView();
            }
            
            return true;
        }
        
        unequipArmyItem(equipmentType) {
            const currentItem = this.state.army.equipment[equipmentType];
            if (!currentItem) {
                this.uiManager.showFloatingText(`No ${equipmentType} equipped!`, 'text-yellow-400');
                return false;
            }
            
            const itemData = GAME_DATA.ITEMS[currentItem];
            this.state.army.equipment[equipmentType] = null;
            this.uiManager.showFloatingText(`Unequipped ${itemData.name} from army`, 'text-blue-400');
            
            // Update UI to reflect the change
            if (this.uiManager) {
                this.uiManager.renderView();
            }
            
            return true;
        }
        
        // Tool Equipment System for Workers
        equipWorkerTool(skillId, itemId) {
            const itemData = GAME_DATA.ITEMS[itemId];
            if (!itemData || itemData.type !== 'tool') {
                this.uiManager.showFloatingText(`${itemId} is not a tool!`, 'text-red-400');
                return false;
            }
            
            // Check if player owns the tool
            if ((this.state.bank[itemId] || 0) <= 0) {
                this.uiManager.showFloatingText(`You don't own a ${itemData.name}!`, 'text-red-400');
                return false;
            }
            
            // Check if the tool is appropriate for this skill
            const toolSkill = this.getToolSkill(itemData.bonus);
            if (toolSkill !== skillId) {
                this.uiManager.showFloatingText(`${itemData.name} is not appropriate for ${skillId}!`, 'text-red-400');
                return false;
            }
            
            // Unequip any existing tool for this skill
            const currentTool = Object.keys(this.state.workers[skillId].equipment.tools).find(toolId => 
                GAME_DATA.ITEMS[toolId]?.bonus && this.getToolSkill(GAME_DATA.ITEMS[toolId].bonus) === skillId
            );
            if (currentTool) {
                this.unequipWorkerTool(skillId, currentTool);
            }
            
            // Equip the new tool
            this.state.workers[skillId].equipment.tools[itemId] = 1;
            this.uiManager.showFloatingText(`🔧 ${skillId} workers equipped with ${itemData.name}!`, 'text-green-400');
            
            // Update UI to reflect the change
            if (this.uiManager) {
                this.uiManager.renderView();
            }
            
            return true;
        }
        
        unequipWorkerTool(skillId, itemId) {
            const currentTool = this.state.workers[skillId].equipment.tools[itemId];
            if (!currentTool) {
                this.uiManager.showFloatingText(`No tool equipped in ${skillId}!`, 'text-yellow-400');
                return false;
            }
            
            const itemData = GAME_DATA.ITEMS[itemId];
            this.state.workers[skillId].equipment.tools[itemId] = 0;
            delete this.state.workers[skillId].equipment.tools[itemId];
            this.uiManager.showFloatingText(`🔧 Unequipped ${itemData.name} from ${skillId} workers`, 'text-blue-400');
            
            // Update UI to reflect the change
            if (this.uiManager) {
                this.uiManager.renderView();
            }
            
            return true;
        }
        
        getToolSkill(bonus) {
            // Parse bonus string to determine which skill it affects
            if (bonus.includes('woodcutting')) return 'woodcutting';
            if (bonus.includes('mining')) return 'mining';
            if (bonus.includes('fishing')) return 'fishing';
            if (bonus.includes('farming')) return 'farming';
            if (bonus.includes('hunter')) return 'hunter';
            if (bonus.includes('archaeology')) return 'archaeology';
            if (bonus.includes('divination')) return 'divination';
            return null;
        }
        
        calculateToolBonus(skillId) {
            const worker = this.state.workers[skillId];
            if (!worker || !worker.equipment.tools) return { speed: 0, yield: 0 };
            
            let speedBonus = 0;
            let yieldBonus = 0;
            
            // Check all equipped tools for this skill
            Object.keys(worker.equipment.tools).forEach(toolId => {
                const tool = GAME_DATA.ITEMS[toolId];
                if (!tool || !tool.bonus) return;
                
                if (tool.bonus.includes('speed')) {
                    const bonusValue = parseInt(tool.bonus.match(/\d+/)[0]);
                    speedBonus += bonusValue;
                } else if (tool.bonus.includes('yield')) {
                    const bonusValue = parseInt(tool.bonus.match(/\d+/)[0]);
                    yieldBonus += bonusValue;
                }
            });
            
            return { speed: speedBonus, yield: yieldBonus };
        }
        
        startArtisanCrafting(skillId, recipeId, quantity) {
            const recipe = GAME_DATA.RECIPES[skillId]?.find(r => r.id === recipeId);
            if (!recipe) {
                this.uiManager.showFloatingText('Recipe not found!', 'text-red-400');
                return false;
            }
            
            // Check if player has required materials
            const canAfford = recipe.input ? recipe.input.every(inp => (this.state.bank[inp.itemId] || 0) >= inp.quantity) : true;
            if (!canAfford) {
                this.uiManager.showFloatingText('Not enough materials!', 'text-red-400');
                return false;
            }
            
            // Check if player has required level
            const playerSkill = this.state.player.skills[skillId];
            if (playerSkill.level < recipe.level) {
                this.uiManager.showFloatingText(`Requires ${skillId} level ${recipe.level}!`, 'text-red-400');
                return false;
            }
            
            // Use the automated action system instead of manual crafting
            this.startAction(skillId, recipeId);
            
            this.uiManager.showFloatingText(`Started crafting ${recipe.name}!`, 'text-green-400');
            return true;
        }
        

        
        stopArtisanCrafting(skillId) {
            // Use the automated action system instead of manual crafting
            this.stopAction(skillId);
            
            this.uiManager.showFloatingText(`Stopped crafting`, 'text-yellow-400');
            return true;
        }
        
        consumeArmyUpkeep(deltaSec) {
            // Use cooked foods first; each food heals value ~ treat 1 HP heal as 1 food unit
            const foodIds = Object.keys(this.state.bank).filter(id => GAME_DATA.ITEMS[id]?.heals).sort((a,b) => (GAME_DATA.ITEMS[a].heals||0)-(GAME_DATA.ITEMS[b].heals||0));
            const out = this.calculateArmyOutputPerSecond();
            const requiredFoodUnits = (out.foodPerMin / 60) * deltaSec; // food units per sec
            this.state.army.upkeep.foodBuffer += requiredFoodUnits;
            let needed = Math.floor(this.state.army.upkeep.foodBuffer);
            if (needed > 0) {
                for (const fid of foodIds) {
                    if (needed <= 0) break;
                    let have = this.state.bank[fid] || 0;
                    if (have <= 0) continue;
                    const take = Math.min(have, needed);
                    this.removeFromBank(fid, take);
                    needed -= take;
                }
                this.state.army.upkeep.foodBuffer -= Math.floor(this.state.army.upkeep.foodBuffer);
            }
            const hungry = needed > 0; // unmet demand
            this.state.army.upkeep.hungry = hungry;
            return { hungry, out };
        }
    }

    class UIManager {
        constructor(game) {
            this.game = game; this.mainContent = document.getElementById('main-content'); this.modalBackdrop = document.getElementById('modal-backdrop'); this.modalContent = document.getElementById('modal-content'); this.floatingTextContainer = document.getElementById('floating-text-container'); this.currentView = 'dashboard';
            // Bank UI state
            this.bankSearchQuery = '';
            this.bankSortMode = 'qty_desc'; // qty_desc | qty_asc | name_asc | name_desc
            this.bankFilter = 'all'; // all | food | weapons | runes | materials
            
            // Set up event delegation for dynamically created stop buttons
            this.setupEventDelegation();
        }
        
        setupEventDelegation() {
            // Prevent multiple event listeners
            if (document.body.dataset.stopButtonListenerAttached) {
                return;
            }
            document.body.dataset.stopButtonListenerAttached = 'true';
            
            // Handle stop buttons using event delegation
            document.addEventListener('click', (e) => {
                const stopBtn = e.target.closest('.stop-action-btn');
                if (stopBtn) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const skillId = stopBtn.dataset.skillId;
                    console.log('Stop button clicked - skillId:', skillId, 'button:', stopBtn);
                    
                    if (skillId) {
                        console.log('Calling stopAction for:', skillId);
                        this.game.stopAction(skillId);
                    } else {
                        console.log('No skillId found on button');
                    }
                }
            });
        }
        init() {
            this.renderSidebar(); 
            this.attachSidebarEventListeners(); 
            this.restoreSidebarState(); // Restore minimized state from localStorage
            this.render();
        }
        render() {
            this.renderView(); this.updateSidebarActive(); this.updateHeaderBars(); this.attachViewEventListeners(); this.updateMasteryBar(); if (this.currentView === 'combat') this.renderCombatFooter();
        }
        renderSidebar() {
            const createLink = (skillId, skill) => {
                const currentXP = skill.currentXP || 0;
                const xpToNext = skill.xpToNextLevel || 100;
                const percentComplete = (currentXP / xpToNext) * 100;
                
                return `<a href="#" class="sidebar-link flex items-center p-3" data-view="${skillId}" 
                           data-skill-id="${skillId}" 
                           data-current-xp="${currentXP}" 
                           data-xp-to-next="${xpToNext}" 
                           data-level="${skill.level || 1}">
                    <span class="w-6 text-center text-lg">${skill.icon}</span>
                    <div class="flex-grow">
                        <span>${skill.name}</span>
                        <div class="w-full xp-bar-bg rounded-full h-1.5 mt-1 relative group">
                            <div id="sidebar-xp-${skillId}" class="xp-bar-fill h-1.5 rounded-full" style="width: ${percentComplete}%"></div>
                            <!-- Hover tooltip -->
                            <div class="sidebar-xp-tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 border border-slate-600">
                                <div class="text-center">
                                    <div class="font-bold text-blue-300">${skill.name}</div>
                                    <div class="text-green-300">Level ${skill.level || 1}</div>
                                    <div class="text-yellow-300">${currentXP.toLocaleString()} / ${xpToNext.toLocaleString()} XP</div>
                                    <div class="text-blue-300">${Math.round(percentComplete)}% Complete</div>
                                </div>
                                <!-- Tooltip arrow -->
                                <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                            </div>
                        </div>
                    </div>
                </a>`;
            };
            
            const gatheringHtml = Object.keys(GAME_DATA.SKILLS).filter(id => GAME_DATA.SKILLS[id].type === 'gathering').map(id => createLink(id, GAME_DATA.SKILLS[id])).join(''); 
            document.getElementById('gathering-skills-nav').innerHTML = gatheringHtml;
            
            const artisanHtml = Object.keys(GAME_DATA.SKILLS).filter(id => GAME_DATA.SKILLS[id].type === 'artisan').map(id => createLink(id, GAME_DATA.SKILLS[id])).join(''); 
            document.getElementById('artisan-skills-nav').innerHTML = artisanHtml;
        }
        attachSidebarEventListeners() { 
            // Sidebar navigation links
            document.querySelectorAll('.sidebar-link').forEach(link => { 
                link.addEventListener('click', (e) => { 
                    e.preventDefault(); 
                    this.currentView = link.dataset.view; 
                    this.render(); 
                }); 
            }); 
            
            // Sidebar minimize toggle
            const sidebarToggle = document.getElementById('sidebar-toggle');
            if (sidebarToggle) {
                sidebarToggle.addEventListener('click', () => {
                    this.toggleSidebar();
                });
            }
        }

        toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const toggleIcon = document.getElementById('sidebar-toggle-icon');
            
            if (sidebar && toggleIcon) {
                const isMinimized = sidebar.classList.contains('minimized');
                
                if (isMinimized) {
                    // Expand sidebar
                    sidebar.classList.remove('minimized');
                    sidebar.style.width = '16rem'; // 256px
                    sidebar.style.padding = '1rem';
                    toggleIcon.className = 'fas fa-chevron-left text-sm';
                } else {
                    // Minimize sidebar
                    sidebar.classList.add('minimized');
                    sidebar.style.width = '0';
                    sidebar.style.padding = '0';
                    toggleIcon.className = 'fas fa-chevron-right text-sm';
                }
                
                // Save state to localStorage
                localStorage.setItem('sidebarMinimized', !isMinimized);
            }
        }

        restoreSidebarState() {
            const sidebar = document.getElementById('sidebar');
            const toggleIcon = document.getElementById('sidebar-toggle-icon');
            
            if (sidebar && toggleIcon) {
                const wasMinimized = localStorage.getItem('sidebarMinimized') === 'true';
                
                if (wasMinimized) {
                    sidebar.classList.add('minimized');
                    sidebar.style.width = '0';
                    sidebar.style.padding = '0';
                    toggleIcon.className = 'fas fa-chevron-right text-sm';
                }
            }
        }

        updateHeaderBars() {
            const goldDisplay = document.getElementById('gold-display'); if (goldDisplay) goldDisplay.textContent = Math.floor(this.game.state.player.gold).toLocaleString();
            const runesDisplay = document.getElementById('runes-display'); if (runesDisplay) runesDisplay.textContent = Math.floor(this.game.state.player.runes).toLocaleString();
            const essenceDisplay = document.getElementById('essence-display'); if (essenceDisplay) essenceDisplay.textContent = Math.floor(this.game.state.player.essence || 0).toLocaleString();
            const staminaFill = document.getElementById('stamina-bar-fill'); const staminaValue = document.getElementById('stamina-value'); if (staminaFill && staminaValue) { const s = this.game.state.player; staminaFill.style.width = `${(s.stamina / s.staminaMax) * 100}%`; staminaValue.textContent = `${Math.floor(s.stamina)}/${s.staminaMax}`; }
        }
        updateSidebarActive() { document.querySelectorAll('.sidebar-link').forEach(link => { link.classList.toggle('active', link.dataset.view === this.currentView); }); }

        updateDynamicElements() {
            // Update basic resources
            document.getElementById('gold-display').textContent = Math.floor(this.game.state.player.gold).toLocaleString();
            const gps = this.game.state.empire?.production?.goldPerSec || 0;
            const gpsEl = document.getElementById('gps-display'); if (gpsEl) gpsEl.textContent = `(+${gps.toFixed(1)}/s)`;
            const runesEl = document.getElementById('runes-display'); if (runesEl) { const totalRunes = (this.game.state.player.runes || 0) + this.game.getTotalRuneItemCount(); runesEl.textContent = totalRunes.toLocaleString(); }
            const stamina = this.game.state.player.stamina; const staminaMax = this.game.state.player.staminaMax;
            document.getElementById('stamina-value').textContent = `${Math.floor(stamina)}/${staminaMax}`; document.getElementById('stamina-bar-fill').style.width = `${(stamina / staminaMax) * 100}%`;
            
            // Update essence
            const essenceEl = document.getElementById('essence-display'); if (essenceEl) essenceEl.textContent = Math.floor(this.game.state.player.essence || 0).toLocaleString();
            
            // Update sidebar skill XP bars and tooltip data
            Object.keys(this.game.state.player.skills).forEach(id => { 
                const skill = this.game.state.player.skills[id]; 
                const xpBar = document.getElementById(`sidebar-xp-${id}`); 
                if (xpBar) {
                    xpBar.style.width = `${(skill.currentXP / skill.xpToNextLevel) * 100}%`;
                    // Add brief animation for skill XP changes
                    xpBar.classList.add('xp-gain-animation');
                    setTimeout(() => xpBar.classList.remove('xp-gain-animation'), 400);
                }
                
                // Update tooltip data attributes for live hover info
                const sidebarLink = document.querySelector(`[data-skill-id="${id}"]`);
                if (sidebarLink) {
                    sidebarLink.dataset.currentXp = skill.currentXP;
                    sidebarLink.dataset.xpToNext = skill.xpToNextLevel;
                    sidebarLink.dataset.level = skill.level;
                    
                    // Update tooltip content if it exists
                    const tooltip = sidebarLink.querySelector('.sidebar-xp-tooltip');
                    if (tooltip) {
                        const percentComplete = (skill.currentXP / skill.xpToNextLevel) * 100;
                        tooltip.innerHTML = `
                            <div class="text-center">
                                <div class="font-bold text-blue-300">${skill.name}</div>
                                <div class="text-green-300">Level ${skill.level}</div>
                                <div class="text-yellow-300">${skill.currentXP.toLocaleString()} / ${skill.xpToNextLevel.toLocaleString()} XP</div>
                                <div class="text-blue-300">${Math.round(percentComplete)}% Complete</div>
                            </div>
                            <!-- Tooltip arrow -->
                            <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                        `;
                    }
                }
            });
            
            // Update meta-skills in sidebar if visible
            this.updateMetaSkillsSidebar();
            
            // Update expedition progress if on expeditions view
            if (this.currentView === 'combat') {
                this.updateExpeditionProgress();
                this.renderCombatFooter();
            }
            
            // Update ascension UI elements
            this.updateAscensionUI();
            
            this.updateMasteryBar();
        }

        updateMetaSkillsSidebar() {
            // Update meta-skills across all views
            Object.values(this.game.state.player.meta_skills).forEach(skill => {
                // Update homestead category buttons
                const levelBadge = document.getElementById(`homestead-level-${skill.name}`);
                if (levelBadge) {
                    levelBadge.textContent = `Level ${skill.level}`;
                }

                // Update meta-skills view elements
                const titleElement = document.getElementById(`meta-skill-title-${skill.name}`);
                if (titleElement) {
                    const oldLevel = parseInt(titleElement.textContent.match(/Level (\d+)/)?.[1] || '1');
                    titleElement.textContent = `${skill.name} - Level ${skill.level}`;
                    // Add level-up animation if level increased
                    if (skill.level > oldLevel) {
                        titleElement.classList.add('level-up-animation');
                        setTimeout(() => titleElement.classList.remove('level-up-animation'), 600);
                    }
                }

                const xpBar = document.getElementById(`meta-skill-xp-bar-${skill.name}`);
                if (xpBar) {
                    xpBar.style.width = `${(skill.currentXP / skill.xpToNextLevel) * 100}%`;
                    // Add brief animation for XP changes
                    xpBar.classList.add('xp-gain-animation');
                    setTimeout(() => xpBar.classList.remove('xp-gain-animation'), 400);
                }

                const xpText = document.getElementById(`meta-skill-xp-text-${skill.name}`);
                if (xpText) {
                    xpText.textContent = `${Math.floor(skill.currentXP)} / ${skill.xpToNextLevel} XP`;
                }
            });

            // Update selected category XP display in homestead
            const selectedXpDisplay = document.getElementById('homestead-selected-xp');
            if (selectedXpDisplay && this.currentView === 'dashboard') {
                const selectedCategory = this.game.state.homestead?.selectedCategory;
                if (selectedCategory) {
                    const skill = this.game.state.player.meta_skills[selectedCategory];
                    selectedXpDisplay.textContent = `Level ${skill.level} • ${Math.floor(skill.currentXP)} / ${skill.xpToNextLevel} XP`;
                }
            }
        }

        updateExpeditionProgress() {
            const activeExpedition = this.game.state.expeditions.active;
            if (!activeExpedition) return;

            // Update progress bar with animation
            const progressBar = document.querySelector('.expedition-card.ring-2 .bg-blue-500');
            if (progressBar) {
                progressBar.style.width = `${this.game.state.expeditions.progress}%`;
                // Add progress animation
                progressBar.classList.add('progress-update');
                setTimeout(() => progressBar.classList.remove('progress-update'), 300);
            }

            // Update progress text
            const progressText = document.querySelector('.expedition-card.ring-2 .text-blue-300');
            if (progressText && progressText.textContent.includes('% Complete')) {
                progressText.textContent = `${Math.round(this.game.state.expeditions.progress)}% Complete`;
            }

            // Update expedition status in header if present
            const expeditionHeader = document.querySelector('h1 .text-blue-400');
            if (expeditionHeader) {
                const expedition = GAME_DATA.EXPEDITIONS[activeExpedition.toUpperCase()];
                if (expedition) {
                    expeditionHeader.textContent = `(${Math.round(this.game.state.expeditions.progress)}% Complete)`;
                }
            }
        }

        updateMasteryBar() {
            const container = document.getElementById('mastery-progress-bar');
            const activeActions = Object.values(this.game.state.activeActions);
            const inCombat = this.game.state.combat.inCombat;
            
            if (!activeActions.length && !inCombat) { 
                container.innerHTML = ''; 
                return; 
            }
            
            if (inCombat) {
                const e = this.game.state.combat.enemy; if (!e) { container.innerHTML = ''; return; }
                const playerHpPct = (this.game.state.player.hp / this.game.state.player.hpMax) * 100;
                const enemyHpPct = (e.hp / e.maxHp) * 100;
                container.innerHTML = `<div class="block p-2 h-full grid grid-cols-2 gap-2 items-center">
                    <div class="flex items-center space-x-2"><i class="fas fa-user-shield text-xl"></i><div class="w-full xp-bar-bg rounded-full h-2.5"><div class="xp-bar-fill h-2.5 rounded-full" style="width:${playerHpPct}%"></div></div><span class="text-xs font-mono">${Math.max(0, Math.floor(this.game.state.player.hp))}/${this.game.state.player.hpMax}</span></div>
                    <div class="flex items-center space-x-2"><i class="fas fa-skull text-xl"></i><div class="w-full xp-bar-bg rounded-full h-2.5"><div class="mastery-bar-fill h-2.5 rounded-full" style="width:${enemyHpPct}%"></div></div><span class="text-xs font-mono">${Math.max(0, Math.floor(e.hp))}/${e.maxHp}</span></div>
                </div>`;
                return;
            }
            
            // Show multiple active actions in a cleaner, more compact layout
            if (activeActions.length === 1) {
                // Single action - use the full width layout
                const action = activeActions[0];
                const actionTime = this.game.calculateActionTime(action);
                const percentComplete = Math.min(100, (action.progress / actionTime) * 100);
                const skillData = GAME_DATA.SKILLS[action.skillId];
                const xpPerHour = (3600000 / actionTime) * action.xp;
                container.innerHTML = `<div class="block p-2 h-full flex items-center space-x-4">
                    <i class="fas ${skillData.icon} text-xl"></i>
                    <div class="flex-grow">
                        <div class="flex justify-between text-xs">
                            <span>${action.name}</span>
                            <span class="font-mono">${xpPerHour.toFixed(0)} XP/hr</span>
                        </div>
                        <div class="w-full xp-bar-bg rounded-full h-2.5 mt-1">
                            <div class="xp-bar-fill h-2.5 rounded-full" style="width: ${percentComplete}%"></div>
                        </div>
                    </div>
                    <button class="stop-action-btn chimera-button rounded-full w-8 h-8 flex items-center justify-center" data-skill-id="${action.skillId}">
                        <i class="fas fa-stop"></i>
                    </button>
                </div>`;
                
                // Single action progress bar created
                
                // Event listeners will be handled by document-level delegation
            } else {
                // Multiple actions - use compact grid layout
                const actionBars = activeActions.map(action => {
                    const actionTime = this.game.calculateActionTime(action);
                    const percentComplete = Math.min(100, (action.progress / actionTime) * 100);
                    const skillData = GAME_DATA.SKILLS[action.skillId];
                    return `<div class="flex items-center space-x-2 bg-primary-dark rounded-lg p-2">
                        <i class="fas ${skillData.icon} text-sm"></i>
                        <div class="flex-grow min-w-0">
                            <div class="text-xs truncate">${action.name}</div>
                            <div class="w-full xp-bar-bg rounded-full h-1.5">
                                <div class="xp-bar-fill h-1.5 rounded-full" style="width: ${percentComplete}%"></div>
                            </div>
                        </div>
                        <button class="stop-action-btn chimera-button rounded-full w-6 h-6 flex items-center justify-center text-xs" data-skill-id="${action.skillId}">
                            <i class="fas fa-stop"></i>
                        </button>
                    </div>`;
                }).join('');
                
                container.innerHTML = `<div class="block p-2 h-full">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        ${actionBars}
                    </div>
                </div>`;
                
                // Multiple action progress bars created
                
                // Event listeners will be handled by document-level delegation
            }
        }

        renderView() {
            let html = '';
            try {
                if (GAME_DATA.SKILLS[this.currentView]) { 
                    html = this.renderSkillView(this.currentView); 
                }
                else {
                    switch (this.currentView) {
                        case 'dashboard': html = this.renderDashboardView(); break;
                        case 'bank': html = this.renderBankView(); break;
                        case 'meta_skills': html = this.renderMetaSkillsView(); break;
                        case 'combat': html = this.renderCombatView(); break;
                        case 'army': html = this.renderArmyView(); break;
                        case 'clicker': html = this.renderClickerView(); break;
                        case 'workforce': html = this.renderWorkforceView(); break;
                        case 'spellbook': html = this.renderSpellbookView(); break;
                        case 'shop': html = this.renderShopView(); break;
                        default:
                            console.error(`Unknown view: ${this.currentView}`);
                            html = `<div class="block p-4 text-center text-red-400">
                                        <h2 class="text-lg font-bold mb-2">View Not Found</h2>
                                        <p>The view "${this.currentView}" does not exist.</p>
                                    </div>`;
                    }
                }
            } catch (error) {
                console.error(`Error rendering view ${this.currentView}:`, error);
                html = `<div class="block p-4 text-center text-red-400">
                            <h2 class="text-lg font-bold mb-2">Error Loading View</h2>
                            <p>There was an error loading this view. Please check the console for details.</p>
                            <p class="text-xs mt-2">Error: ${error.message}</p>
                        </div>`;
            }
            this.mainContent.innerHTML = html; 
            this.attachViewEventListeners();
        }

        renderDashboardView() {
            // Initialize homestead state if needed
            if (!this.game.state.homestead) {
                this.game.state.homestead = {
                    tasksCompleted: 0,
                    streaks: {},
                    lastTaskDate: null,
                    achievements: [],
                    selectedCategory: META_SKILLS.RESILIENCE
                };
            }

            const homestead = this.game.state.homestead;
            const selectedCategory = homestead.selectedCategory || META_SKILLS.RESILIENCE;
            const taskData = HOMESTEAD_TASKS[selectedCategory];
            
            // Check if ascension is available
            const { canAscend, essenceToGain } = this.game.calculateAscensionData();
            
            let ascensionBanner = '';
            if (canAscend) {
                ascensionBanner = `
                    <div class="block p-6 mb-6 bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-2 border-purple-500 rounded-lg text-center animate-pulse">
                        <div class="text-4xl mb-3">🌟</div>
                        <h2 class="text-2xl font-bold text-white mb-2">ASCENSION AVAILABLE!</h2>
                        <p class="text-secondary mb-4">You've reached the pinnacle of your current journey!</p>
                        <div class="bg-slate-800/50 p-4 rounded-lg mb-4 inline-block">
                            <div class="text-xl text-yellow-300 font-bold">Gain ${essenceToGain} Essence</div>
                            <div class="text-sm text-secondary">Total Meta Skill Levels: ${this.game.state.player.totalMetaSkillLevels}</div>
                        </div>
                        <button id="homestead-ascend-btn" class="chimera-button bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg border border-purple-400">
                            🚀 ASCEND NOW 🚀
                        </button>
                    </div>
                `;
            }
            
            const hero = `
                <div class="block p-6 mb-6 medieval-glow gradient-homestead">
                    <div class="flex items-center gap-4">
                        <div class="text-4xl">🏡</div>
                        <div>
                            <h1 class="text-2xl font-extrabold tracking-wide text-white">Your Homestead</h1>
                            <p class="text-secondary text-sm">Transform real-life tasks into RPG adventures. Every action matters, every step counts.</p>
                            <div class="mt-2 text-xs text-accent-blue">
                                Tasks completed today: <span class="font-bold">${homestead.tasksCompleted || 0}</span>
                            </div>
                        </div>
                    </div>
                </div>`;
            
            // Well of Serenity - Only show for new players (gold < 500)
            const wellOfSerenity = '';
            
            // Daily Attunement - Health data integration
            const dailyAttunement = this.renderDailyAttunement();

            const categorySelector = `
                <div class="block p-4 mb-4">
                    <h2 class="text-lg font-bold mb-3 text-white">Choose Your Quest Category</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                        ${Object.keys(HOMESTEAD_TASKS).map(category => {
                            const data = HOMESTEAD_TASKS[category];
                            const isSelected = category === selectedCategory;
                            const skill = this.game.state.player.meta_skills[category];
            return `
                                <button class="category-btn ${isSelected ? 'ring-2 ring-accent-blue bg-slate-600' : 'bg-slate-700 hover:bg-slate-600'} 
                                       p-3 rounded-lg transition-all duration-200 text-center" 
                                       data-category="${category}">
                                    <div class="text-2xl mb-1">${data.icon}</div>
                                    <div class="text-xs font-bold ${data.color}">${data.name}</div>
                                    <div class="text-xs text-secondary mt-1" id="homestead-level-${category}">
                                        Level ${skill.level}
                                    </div>
                                </button>
                            `;
                        }).join('')}
                    </div>
                </div>`;

            const taskGrid = `
                    <div class="block p-4">
                    <div class="flex items-center gap-3 mb-4">
                        <span class="text-2xl">${taskData.icon}</span>
                        <h2 class="text-xl font-bold ${taskData.color}">${taskData.name}</h2>
                        <div class="text-sm text-secondary" id="homestead-selected-xp">
                            Level ${this.game.state.player.meta_skills[selectedCategory].level} • 
                            ${Math.floor(this.game.state.player.meta_skills[selectedCategory].currentXP)} / 
                            ${this.game.state.player.meta_skills[selectedCategory].xpToNextLevel} XP
                    </div>
                </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                        ${this.renderTaskCards(taskData.tasks, selectedCategory)}
                    </div>
                    
                    <div class="mt-6 p-4 bg-slate-800 rounded-lg border border-slate-600">
                        <h3 class="text-md font-bold mb-2 text-white">💡 Executive Function Tips</h3>
                        <div class="text-sm text-secondary space-y-1">
                            <p>• Start with micro tasks when feeling overwhelmed</p>
                            <p>• Build momentum with easier tasks before harder ones</p>
                            <p>• Celebrate every completion - progress is progress!</p>
                            <p>• Use the timer estimates to manage your energy</p>
                        </div>
                    </div>
                </div>`;

            const sagaSection = this.renderSagaSection();
            
            return `${hero}${ascensionBanner}${wellOfSerenity}${dailyAttunement}${sagaSection}${categorySelector}${taskGrid}`;
        }

        renderWellOfSerenity() {
            // Only show for new players (gold < 500)
            if (this.game.state.player.gold >= 500) {
                return '';
            }
            
            const well = this.game.state.homestead.wellOfSerenity;
            const wellData = GAME_DATA.WELL_OF_SERENITY;
            
            // If already received the boon, don't show
            if (well.hasReceivedBoon) {
                return '';
            }
            
            // Get random passage
            const randomPassage = wellData.passages[Math.floor(Math.random() * wellData.passages.length)];
            
            if (well.isMeditating) {
                // Show meditation progress
                const progressPercent = well.meditationProgress;
                const timeRemaining = Math.max(0, Math.ceil((wellData.meditationDuration - (Date.now() - well.meditationStartTime)) / 1000));
                const minutes = Math.floor(timeRemaining / 60);
                const seconds = timeRemaining % 60;
                
                return `
                    <div class="block p-6 mb-6 bg-gradient-to-br ${wellData.bgColor} border-2 ${wellData.borderColor} rounded-lg text-center">
                        <div class="text-4xl mb-4">${wellData.icon}</div>
                        <h2 class="text-2xl font-bold text-white mb-4">${wellData.name}</h2>
                        <p class="text-secondary mb-6">${wellData.description}</p>
                        
                        <div class="mb-6">
                            <div class="text-lg text-white mb-2">Meditation in Progress...</div>
                            <div class="w-full bg-slate-800 rounded-full h-4 mb-2">
                                <div class="bg-gradient-to-r from-amber-400 to-orange-400 h-4 rounded-full transition-all duration-500" 
                                     style="width: ${progressPercent}%"></div>
                            </div>
                            <div class="text-sm text-secondary">
                                ${minutes}:${seconds.toString().padStart(2, '0')} remaining
                            </div>
                        </div>
                        
                        <div class="bg-slate-800/50 p-4 rounded-lg mb-4">
                            <div class="text-lg text-amber-300 font-italic">"${randomPassage}"</div>
                        </div>
                        
                        <button id="stop-meditation-btn" class="chimera-button bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-bold transition-all duration-300">
                            Stop Meditation
                        </button>
                    </div>
                `;
            } else {
                // Show meditation start option
                return `
                    <div class="block p-6 mb-6 bg-gradient-to-br ${wellData.bgColor} border-2 ${wellData.borderColor} rounded-lg text-center">
                        <div class="text-4xl mb-4">${wellData.icon}</div>
                        <h2 class="text-2xl font-bold text-white mb-4">${wellData.name}</h2>
                        <p class="text-secondary mb-6">${wellData.description}</p>
                        
                        <div class="bg-slate-800/50 p-4 rounded-lg mb-4">
                            <div class="text-lg text-amber-300 font-italic">"${randomPassage}"</div>
                        </div>
                        
                        <div class="mb-6">
                            <div class="text-sm text-secondary mb-2">Meditation takes 3 minutes and grants:</div>
                            <div class="flex justify-center gap-4 text-sm">
                                <span class="text-yellow-300">💰 +${wellData.boon.gold} Gold</span>
                                <span class="text-green-300">🍞 +${wellData.boon.rations} Rations</span>
                            </div>
                        </div>
                        
                        <button id="start-meditation-btn" class="chimera-button bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg border border-amber-400">
                            🌅 Begin Meditation
                        </button>
                </div>
            `;
            }
        }
        
        renderDailyAttunement() {
            // Check if the method exists before calling it
            if (typeof this.game.getDailyAttunementStatus !== 'function') {
                return ''; // Return empty string if method doesn't exist
            }
            
            const status = this.game.getDailyAttunementStatus();
            const attunementData = GAME_DATA.DAILY_ATTUNEMENT;
            
            // Get random inspirational message
            const randomMessage = attunementData.messages[Math.floor(Math.random() * attunementData.messages.length)];
            
            if (!status.hasData) {
                // Show sync option
                return `
                    <div class="block p-6 mb-6 bg-gradient-to-br ${attunementData.bgColor} border-2 ${attunementData.borderColor} rounded-lg">
                        <div class="text-center">
                            <div class="text-4xl mb-4">${attunementData.icon}</div>
                            <h2 class="text-2xl font-bold text-white mb-4">${attunementData.name}</h2>
                            <p class="text-secondary mb-6">${attunementData.description}</p>
                            
                            <div class="bg-slate-800/50 p-4 rounded-lg mb-6">
                                <div class="text-lg text-green-300 font-italic mb-4">"${randomMessage}"</div>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                    <div class="flex items-center gap-2">
                                        <span class="text-2xl">${attunementData.rewards.steps.icon}</span>
                                        <div>
                                            <div class="font-bold text-white">${attunementData.rewards.steps.name}</div>
                                            <div class="text-secondary">+1 Gold per 100 steps</div>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span class="text-2xl">${attunementData.rewards.mindfulness.icon}</span>
                                        <div>
                                            <div class="font-bold text-white">${attunementData.rewards.mindfulness.name}</div>
                                            <div class="text-secondary">+10 Shards per minute</div>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span class="text-2xl">${attunementData.rewards.sleep.icon}</span>
                                        <div>
                                            <div class="font-bold text-white">${attunementData.rewards.sleep.name}</div>
                                            <div class="text-secondary">Stamina bonus</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <button id="sync-attunement-btn" class="chimera-button bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg border border-green-400">
                                🌱 Sync with Wellness Data
                            </button>
                            
                            <div class="mt-4 text-sm text-secondary">
                                <p>Daily sync with your wellness journey. Real-life self-care becomes in-game progress.</p>
                                <p class="mt-1">🎯 <span class="text-green-300">Demo mode:</span> Generates sample wellness data for testing</p>
                            </div>
                        </div>
                    </div>
                `;
            } else if (status.canClaim) {
                // Show rewards to claim
                const health = status.healthData;
                const rewards = status.pendingRewards;
                
                return `
                    <div class="block p-6 mb-6 bg-gradient-to-br ${attunementData.bgColor} border-2 ${attunementData.borderColor} rounded-lg">
                        <div class="text-center">
                            <div class="text-4xl mb-4">${attunementData.icon}</div>
                            <h2 class="text-2xl font-bold text-white mb-4">Daily Attunement Ready!</h2>
                            <p class="text-secondary mb-6">Your wellness data has been synchronized. Claim your rewards!</p>
                            
                            <div class="bg-slate-800/50 p-4 rounded-lg mb-6">
                                <div class="text-lg text-green-300 font-italic mb-4">"${randomMessage}"</div>
                                
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    <div class="text-center">
                                        <div class="text-3xl mb-2">${attunementData.rewards.steps.icon}</div>
                                        <div class="font-bold text-white text-lg">${health.steps.toLocaleString()}</div>
                                        <div class="text-sm text-secondary">Steps taken</div>
                                        <div class="text-sm text-yellow-300 font-bold">+${rewards.gold} Gold</div>
                                    </div>
                                    <div class="text-center">
                                        <div class="text-3xl mb-2">${attunementData.rewards.mindfulness.icon}</div>
                                        <div class="font-bold text-white text-lg">${health.mindfulMinutes}</div>
                                        <div class="text-sm text-secondary">Mindful minutes</div>
                                        <div class="text-sm text-blue-300 font-bold">+${rewards.essenceShards} Shards</div>
                                    </div>
                                    <div class="text-center">
                                        <div class="text-3xl mb-2">${attunementData.rewards.sleep.icon}</div>
                                        <div class="font-bold text-white text-lg">${health.sleepHours}h</div>
                                        <div class="text-sm text-secondary">Sleep quality</div>
                                        <div class="text-sm text-green-300 font-bold">+${rewards.staminaBonus} Stamina</div>
                                    </div>
                                </div>
                            </div>
                            
                            <button id="claim-attunement-btn" class="chimera-button bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg border border-emerald-400 animate-pulse">
                                ✨ Claim Wellness Rewards
                            </button>
                        </div>
                    </div>
                `;
            } else if (status.hasClaimed) {
                // Show completion status
                const health = status.healthData;
                const totalStats = status.totalStats;
                
                return `
                    <div class="block p-6 mb-6 bg-gradient-to-br from-gray-900/30 to-slate-900/30 border-2 border-gray-500 rounded-lg">
                        <div class="text-center">
                            <div class="text-4xl mb-4">✅</div>
                            <h2 class="text-2xl font-bold text-white mb-4">Daily Attunement Complete</h2>
                            <p class="text-secondary mb-6">You've claimed today's wellness rewards. Return tomorrow for more!</p>
                            
                            <div class="bg-slate-800/50 p-4 rounded-lg mb-4">
                                <div class="text-lg text-green-300 font-italic mb-4">"${randomMessage}"</div>
                                
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 class="font-bold text-white mb-2">Today's Wellness</h4>
                                        <div class="text-sm text-secondary space-y-1">
                                            <div>${attunementData.rewards.steps.icon} ${health.steps.toLocaleString()} steps</div>
                                            <div>${attunementData.rewards.mindfulness.icon} ${health.mindfulMinutes} mindful minutes</div>
                                            <div>${attunementData.rewards.sleep.icon} ${health.sleepHours}h sleep</div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-white mb-2">Total Journey</h4>
                                        <div class="text-sm text-secondary space-y-1">
                                            <div>🏃 ${totalStats.totalSteps.toLocaleString()} total steps</div>
                                            <div>🧘 ${totalStats.totalMindfulMinutes} mindful minutes</div>
                                            <div>😴 ${Math.round(totalStats.totalSleepHours)} hours slept</div>
                                            <div>📅 ${totalStats.daysTracked} days tracked</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            return '';
        }
        
        renderSagaSection() {
            const sagas = this.game.state.homestead?.sagas || {};
            const activeSagas = Object.values(sagas).filter(saga => !saga.isCompleted);
            const completedSagas = Object.values(sagas).filter(saga => saga.isCompleted);

            const activeSagaCards = activeSagas.map(saga => `
                <div class="saga-card bg-slate-700 border border-purple-500/30 rounded-lg p-4 hover:border-purple-400/50 transition-all">
                    <div class="flex items-start justify-between mb-3">
                        <div class="flex-grow">
                            <h3 class="text-lg font-bold text-purple-300">${saga.title}</h3>
                            <p class="text-sm text-secondary">${saga.description}</p>
                        </div>
                        <button class="delete-saga-btn text-red-400 hover:text-red-300 text-sm" data-saga-id="${saga.id}">✕</button>
                    </div>
                    <div class="mb-3">
                        <div class="w-full bg-slate-800 rounded-full h-2">
                            <div class="bg-purple-500 h-2 rounded-full transition-all duration-500" style="width: ${saga.progress}%"></div>
                        </div>
                        <div class="text-xs text-secondary mt-1">${Math.round(saga.progress)}% Complete</div>
                    </div>
                    <div class="space-y-2">
                        ${saga.subQuests.map(subQuest => `
                            <div class="sub-quest-item flex items-center gap-3 p-2 rounded ${subQuest.isCompleted ? 'bg-green-900/30 border border-green-600/30' : 'bg-slate-800 border border-slate-600'}">
                                <button class="complete-subquest-btn ${subQuest.isCompleted ? 'text-green-400 cursor-default' : 'text-purple-300 hover:text-purple-200'}" 
                                        data-saga-id="${saga.id}" data-subquest-id="${subQuest.id}" 
                                        ${subQuest.isCompleted ? 'disabled' : ''}>
                                    ${subQuest.isCompleted ? '✓' : '○'}
                                </button>
                                <span class="flex-grow text-sm ${subQuest.isCompleted ? 'text-green-300 line-through' : 'text-white'}">
                                    ${subQuest.title}
                                </span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');

            const completedSagaCards = completedSagas.length > 0 ? `
                <div class="completed-sagas mt-4">
                    <h3 class="text-sm font-bold text-yellow-400 mb-2">🏆 Completed Sagas</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        ${completedSagas.slice(-4).map(saga => `
                            <div class="completed-saga-card bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-3">
                                <h4 class="text-sm font-bold text-yellow-300">${saga.title}</h4>
                                <p class="text-xs text-secondary">${new Date(saga.completedAt).toLocaleDateString()}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : '';

            return `
                <div class="block p-4 mb-4">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-lg font-bold text-purple-300">📜 Your Sagas</h2>
                        <button id="create-saga-btn" class="chimera-button px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700">
                            Start New Saga
                        </button>
                    </div>
                    
                    ${activeSagas.length > 0 ? `
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                            ${activeSagaCards}
                        </div>
                    ` : `
                        <div class="text-center py-8 text-secondary">
                            <div class="text-4xl mb-2">📜</div>
                            <p>No active sagas yet. Break down your big goals into epic quests!</p>
                            <p class="text-xs mt-2">Examples: "Thesis Writing Saga", "Home Renovation Quest", "Fitness Journey"</p>
                        </div>
                    `}
                    
                    ${completedSagaCards}
                </div>
            `;
        }

        renderTaskCards(tasks, category) {
            const difficultyColors = {
                micro: 'border-green-500 bg-green-900/20',
                light: 'border-blue-500 bg-blue-900/20', 
                moderate: 'border-yellow-500 bg-yellow-900/20',
                vigorous: 'border-red-500 bg-red-900/20'
            };

            const difficultyIcons = {
                micro: '🌱',
                light: '⭐', 
                moderate: '💪',
                vigorous: '🚀'
            };

            return tasks.map(task => {
                const colorClass = difficultyColors[task.difficulty] || 'border-gray-500 bg-gray-900/20';
                const icon = difficultyIcons[task.difficulty] || '⚡';
                
                return `
                    <div class="task-card ${colorClass} border-2 rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-200"
                         data-task='${JSON.stringify(task)}' data-category="${category}">
                        <div class="flex items-start justify-between mb-2">
                            <span class="text-lg">${icon}</span>
                            <div class="text-xs text-secondary">${task.duration}</div>
                        </div>
                        <h3 class="text-sm font-bold text-white mb-2 leading-tight">${task.name}</h3>
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-green-400">+${task.stamina} Stamina</span>
                            <span class="text-blue-400">+${task.xp} XP</span>
                        </div>
                        ${task.gold ? `
                        <div class="mt-1 text-xs text-yellow-400 font-semibold">
                            💰 +${task.gold} Gold
                        </div>
                        ` : ''}
                        <div class="mt-2 text-xs text-secondary capitalize">
                            ${task.difficulty} difficulty
                        </div>
                    </div>
                `;
            }).join('');
        }

        renderSkillView(skillId) {
            const skillData = GAME_DATA.SKILLS[skillId]; const playerSkill = this.game.state.player.skills[skillId]; let contentHtml = ''; let actionType = '';
            if (skillData.type === 'gathering') { 
                actionType = 'Start'; 
                contentHtml = (GAME_DATA.ACTIONS[skillId]||[]).map(action => this.renderActionCard(skillId, action, actionType)).join(''); 
            }
            else if (skillData.type === 'artisan') {
                actionType = 'Craft'; 
                if (skillId === 'firemaking') { 
                    contentHtml = this.renderFiremakingView(); 
                }
                else if (skillId === 'runecrafting') { 
                    contentHtml = this.renderRunecraftingView(); 
                }
                else if (skillId === 'smithing' || skillId === 'woodworking') { 
                    contentHtml = this.renderArtisanSkillView(skillId); 
                }
                else if (skillId === 'cooking' || skillId === 'alchemy' || skillId === 'herblore' || skillId === 'crafting') { 
                    contentHtml = this.renderArtisanSkillView(skillId); 
                }
                else { 
                    contentHtml = (GAME_DATA.RECIPES[skillId]||[]).map(recipe => this.renderActionCard(skillId, recipe, actionType)).join(''); 
                }
            }
            const workerPanel = (skillData.type === 'gathering' && this.game.state.workers[skillId]) ? this.renderWorkerPanel(skillId) : '';
            
            // Use different layout for artisan skills with two-column design
            if (skillId === 'smithing' || skillId === 'woodworking' || skillId === 'runecrafting' || skillId === 'cooking' || skillId === 'alchemy' || skillId === 'herblore' || skillId === 'crafting') {
                return `<h1 class="text-2xl font-semibold text-white mb-4">${skillData.name} <span class="text-base text-secondary">(Level ${playerSkill.level})</span></h1>${workerPanel}${contentHtml}`;
            } else {
                return `<h1 class="text-2xl font-semibold text-white mb-4">${skillData.name} <span class="text-base text-secondary">(Level ${playerSkill.level})</span></h1>${workerPanel}<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">${contentHtml}</div>`;
            }
        }

        renderActionCard(skillId, action, actionType) {
            const playerSkill = this.game.state.player.skills[skillId]; 
            const hasLevel = playerSkill.level >= action.level; 
            let canAfford = true;
            if (action.input) { 
                canAfford = action.input.every(inp => (this.game.state.bank[inp.itemId] || 0) >= inp.quantity); 
            }
            
            // Check worker requirements for gathering skills
            let hasWorkers = true;
            let workerRequirement = '';
            if (GAME_DATA.ACTIONS[skillId] && !GAME_DATA.RECIPES[skillId]) {
                // This is a gathering skill - check worker requirements
                const workerState = this.game.state.workers[skillId];
                if (!workerState || !workerState.total || workerState.total <= 0) {
                    hasWorkers = false;
                    workerRequirement = `<p class="text-red-400 text-xs mt-2">⚠️ No workers hired for ${GAME_DATA.SKILLS[skillId]?.name || skillId}</p>`;
                } else {
                    const assignedWorkers = workerState.assigned[action.id] || 0;
                    if (assignedWorkers <= 0) {
                        hasWorkers = false;
                        workerRequirement = `<p class="text-red-400 text-xs mt-2">⚠️ No workers assigned to ${action.name}</p>`;
                    } else {
                        workerRequirement = `<p class="text-green-400 text-xs mt-2">✅ ${assignedWorkers} worker${assignedWorkers > 1 ? 's' : ''} assigned</p>`;
                    }
                }
            }
            
            const mastery = this.game.state.player.mastery[skillId]?.[action.id] || { currentXP: 0, xpToNextLevel: 100 };
            const actionDesc = action.output ? `${GAME_DATA.ITEMS[action.output.itemId]?.name || 'Product'} x${action.output.quantity}` : 'Special';
            
            return `
                <div class="block p-4">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-lg font-bold">${action.name}</h3>
                            <p class="text-secondary text-sm">Lvl ${action.level} • ${actionDesc}</p>
                        </div>
                        <span class="badge"><i class="fas fa-star"></i> ${action.xp} XP</span>
                    </div>
                    <div class="mt-2">
                        <p class="text-xs text-secondary">Time: ${(this.game.calculateActionTime({ ...action, skillId }) / 1000).toFixed(1)}s</p>
                        <div class="w-full xp-bar-bg rounded-full h-2 my-1"><div class="mastery-bar-fill h-2 rounded-full" style="width:${((mastery.currentXP || 0) / (mastery.xpToNextLevel || 100)) * 100}%"></div></div>
                        <p class="text-xs text-secondary text-right">${Math.floor(mastery.currentXP || 0)} / ${mastery.xpToNextLevel || 100} XP</p>
                    </div>
                    
                    ${workerRequirement}
                    
                    ${(this.game.state.workers[skillId]) ? this.renderWorkerAssign(skillId, action) : ''}

                    ${this.game.state.activeActions[skillId] ? 
                        `<button class="stop-action-btn chimera-button bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md mt-4" data-skill-id="${skillId}">Stop</button>` : 
                        `<button class="${actionType.toLowerCase()}-action-btn chimera-button px-4 py-2 rounded-md mt-4" data-skill-id="${skillId}" data-action-id="${action.id}" ${!hasLevel || !canAfford || !hasWorkers ? 'disabled' : ''}>${actionType}</button>`
                    }
                </div>
            `;
        }

        renderMiningPanel() {
            const wm = this.game.state.workers.mining; const hireCost = this.game.getHireCost('mining');
            const speedCost = this.game.getUpgradeCost('mining', 'speed'); const yieldCost = this.game.getUpgradeCost('mining', 'yield');
            const depthCost = this.game.getUpgradeCost('mining', 'depth'); const cartCost = this.game.getUpgradeCost('mining', 'cart');
            return `
                <div class="block p-4 mb-4 border border-mining">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <div>
                            <h2 class="text-lg font-bold">Mine Overseer</h2>
                            <p class="text-secondary text-sm">Assign Miners to rock veins. Upgrade depth, carts and tools for efficiency.</p>
                            <p class="text-white text-sm mt-1">Miners: <span class="font-bold">${wm.total}</span></p>
                            <p class="text-secondary text-xs">Depth L${wm.upgrades.depthLevel} • Carts L${wm.upgrades.cartLevel}</p>
                        </div>
                        <div class="flex flex-col sm:flex-row gap-2">
                            <button id="hire-miner" class="chimera-button px-3 py-2 rounded-md">Hire Miner — Cost: ${hireCost} gold</button>
                            <button id="upgrade-mining-speed" class="chimera-button px-3 py-2 rounded-md">Sharper Picks (Speed L${wm.upgrades.speedLevel}) — Cost: ${speedCost} gold</button>
                            <button id="upgrade-mining-yield" class="chimera-button px-3 py-2 rounded-md">Ore Sacks (Yield L${wm.upgrades.yieldLevel}) — Cost: ${yieldCost} gold</button>
                            <button id="upgrade-mining-depth" class="chimera-button px-3 py-2 rounded-md">Deeper Shafts (L${wm.upgrades.depthLevel}) — Cost: ${depthCost} gold</button>
                            <button id="upgrade-mining-cart" class="chimera-button px-3 py-2 rounded-md">Mine Carts (L${wm.upgrades.cartLevel}) — Cost: ${cartCost} gold</button>
                        </div>
                    </div>
                </div>
            `;
        }

        renderFarmingPanel() {
            const wf = this.game.state.workers.farming; const hireCost = this.game.getHireCost('farming');
            const irrCost = this.game.getUpgradeCost('farming', 'irrigation');
            const toolsCost = this.game.getUpgradeCost('farming', 'tools');
            const compCost = this.game.getUpgradeCost('farming', 'compost');
            const tractCost = this.game.getUpgradeCost('farming', 'tractor');
            return `
                <div class="block p-4 mb-4 border border-farming">
                    <div class="farming-hero rounded-md p-3 mb-3 flex items-center gap-3">
                        <span class="text-2xl">🌱</span>
                        <div>
                            <div class="text-white font-bold">Verdant Fields</div>
                            <div class="text-secondary text-xs">Grow bountiful crops with style.</div>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <div>
                            <h2 class="text-lg font-bold">Farming Estate</h2>
                            <p class="text-secondary text-sm">Hire Farmhands. Irrigation and tractors speed growth; tools and compost increase yields.</p>
                            <p class="text-white text-sm mt-1">Farmhands: <span class="font-bold">${wf.total}</span></p>
                            <p class="text-secondary text-xs">Irrigation L${wf.upgrades.irrigationLevel} • Tools L${wf.upgrades.toolsLevel} • Compost L${wf.upgrades.compostLevel} • Tractor L${wf.upgrades.tractorLevel}</p>
                        </div>
                        <div class="flex flex-col sm:flex-row gap-2">
                            <button id="hire-farmhand" class="chimera-button px-3 py-2 rounded-md">Hire Farmhand — Cost: ${hireCost} gold</button>
                            <button id="upgrade-farming-irrigation" class="chimera-button px-3 py-2 rounded-md">Irrigation (L${wf.upgrades.irrigationLevel}) — Cost: ${irrCost} gold</button>
                            <button id="upgrade-farming-tools" class="chimera-button px-3 py-2 rounded-md">Steel Tools (L${wf.upgrades.toolsLevel}) — Cost: ${toolsCost} gold</button>
                            <button id="upgrade-farming-compost" class="chimera-button px-3 py-2 rounded-md">Compost Bins (L${wf.upgrades.compostLevel}) — Cost: ${compCost} gold</button>
                            <button id="upgrade-farming-tractor" class="chimera-button px-3 py-2 rounded-md">Tractor (L${wf.upgrades.tractorLevel}) — Cost: ${tractCost} gold</button>
                        </div>
                    </div>
                </div>
            `;
        }
        
        renderArtisanSkillView(skillId) {
            try {
                // Safety check for GAME_DATA
                if (!GAME_DATA || !GAME_DATA.RECIPES || !GAME_DATA.ITEMS) {
                    console.error('GAME_DATA not properly initialized:', { GAME_DATA, RECIPES: GAME_DATA?.RECIPES, ITEMS: GAME_DATA?.ITEMS });
                    return `
                        <div class="block p-4 text-center text-red-400">
                            <h2 class="text-lg font-bold mb-2">Game Data Error</h2>
                            <p>Game data is not properly initialized. Please refresh the page.</p>
                        </div>
                    `;
                }
                
                const recipes = GAME_DATA.RECIPES[skillId] || [];
                const playerSkill = this.game.state.player.skills[skillId];
                
                // Check if player skill is properly initialized
                if (!playerSkill) {
                    console.error(`Player skill ${skillId} not found!`, this.game.state.player.skills);
                    return `
                        <div class="block p-4 text-center text-red-400">
                            <h2 class="text-lg font-bold mb-2">Skill Not Initialized</h2>
                            <p>The ${skillId} skill is not properly initialized. Please restart the game.</p>
                        </div>
                    `;
                }
                
                // Check if recipes exist for this skill
                if (!recipes || recipes.length === 0) {
                    console.error(`No recipes found for skill ${skillId}`);
                    return `
                        <div class="block p-4 text-center text-red-400">
                            <h2 class="text-lg font-bold mb-2">No Recipes Available</h2>
                            <p>The ${skillId} skill has no recipes available.</p>
                        </div>
                    `;
                }
                
                // Validate recipe structure
                const validRecipes = recipes.filter(recipe => {
                    if (!recipe || !recipe.id || !recipe.name) {
                        console.warn('Invalid recipe structure:', recipe);
                        return false;
                    }
                    return true;
                });
                
                if (validRecipes.length === 0) {
                    console.error(`No valid recipes found for skill ${skillId}`);
                    return `
                        <div class="block p-4 text-center text-red-400">
                            <h2 class="text-lg font-bold mb-2">Recipe Data Error</h2>
                            <p>The ${skillId} skill has invalid recipe data. Please check the console.</p>
                        </div>
                    `;
                }
                
                // Get currently selected recipe (default to first available)
                const selectedRecipeId = this.game.state.selectedRecipe?.[skillId] || (validRecipes.length > 0 ? validRecipes[0].id : null);
                let selectedRecipe = validRecipes.find(r => r.id === selectedRecipeId);
                
                // If no recipe is selected or the selected recipe doesn't exist, default to the first available recipe
                if (!selectedRecipe && validRecipes.length > 0) {
                    selectedRecipe = validRecipes[0];
                    // Update the selected recipe in state
                    if (!this.game.state.selectedRecipe) this.game.state.selectedRecipe = {};
                    this.game.state.selectedRecipe[skillId] = selectedRecipe.id;
                }
                
                // Recipe List (Left Column)
                const recipeList = `
                <div class="col-span-1">
                    <div class="block p-4 mb-4">
                        <h2 class="text-lg font-bold mb-3">📜 Recipe List</h2>
                        <div class="space-y-2">
                            ${validRecipes.map(recipe => {
                                const hasLevel = playerSkill.level >= recipe.level;
                                const canAfford = recipe.input ? recipe.input.every(inp => (this.game.state.bank[inp.itemId] || 0) >= inp.quantity) : true;
                                const isSelected = recipe.id === selectedRecipeId;
                                const mastery = this.game.state.player.mastery[skillId]?.[recipe.id] || { currentXP: 0, xpToNextLevel: 100 };
                                
                                return `
                                    <div class="recipe-item p-3 border rounded-lg cursor-pointer transition-all ${isSelected ? 'border-blue-500 bg-blue-900/20' : 'border-gray-600 hover:border-gray-500'} ${!hasLevel || !canAfford ? 'opacity-50' : ''}" 
                                         data-recipe-id="${recipe.id}" data-skill-id="${skillId}">
                                        <div class="flex items-center justify-between mb-2">
                                            <h3 class="font-semibold text-white">${recipe.name}</h3>
                                            <span class="badge text-xs"><i class="fas fa-star"></i> ${recipe.xp} XP</span>
                                        </div>
                                        <div class="text-xs text-secondary mb-2">
                                            <div>Level ${recipe.level} • ${(this.game.calculateActionTime({ ...recipe, skillId }) / 1000).toFixed(1)}s</div>
                                            <div class="flex items-center gap-1 mt-1">
                                                ${recipe.input ? recipe.input.map(inp => {
                                                    if (!inp || !inp.itemId) {
                                                        console.warn('Invalid input item:', inp);
                                                        return '<span class="text-red-400">❌ Invalid Item</span>';
                                                    }
                                                    const itemData = GAME_DATA.ITEMS[inp.itemId];
                                                    if (!itemData) {
                                                        console.warn(`Item data not found for: ${inp.itemId}`);
                                                        return `<span class="text-red-400">❌ ${inp.itemId}</span>`;
                                                    }
                                                    const hasEnough = (this.game.state.bank[inp.itemId] || 0) >= inp.quantity;
                                                    return `<span class="${hasEnough ? 'text-green-400' : 'text-red-400'}">${itemData.icon || '❔'} ${inp.quantity}</span>`;
                                                }).join('') : ''}
                                                <span class="text-gray-400">→</span>
                                                <span class="text-blue-400">${recipe.output && recipe.output.itemId && GAME_DATA.ITEMS[recipe.output.itemId] ? GAME_DATA.ITEMS[recipe.output.itemId].icon : '❔'} ${recipe.output?.quantity || 1}</span>
                                            </div>
                                        </div>
                                        <div class="w-full xp-bar-bg rounded-full h-1.5 mb-1">
                                            <div class="mastery-bar-fill h-1.5 rounded-full" style="width:${((mastery.currentXP || 0) / (mastery.xpToNextLevel || 100)) * 100}%"></div>
                                        </div>
                                        <div class="text-xs text-secondary text-right">Mastery: ${Math.floor(mastery.currentXP || 0)} / ${mastery.xpToNextLevel || 100} XP</div>
                                        

                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `;
            
            // Crafting Station (Right Column)
            const craftingStation = `
                <div class="col-span-1">
                    <div class="block p-4 mb-4">
                        <h2 class="text-lg font-bold mb-3">⚒️ Crafting Station</h2>
                        ${selectedRecipe && selectedRecipe.output ? `
                            <div class="text-center mb-4">
                                <div class="text-4xl mb-2">${selectedRecipe.output && selectedRecipe.output.itemId && GAME_DATA.ITEMS[selectedRecipe.output.itemId] ? GAME_DATA.ITEMS[selectedRecipe.output.itemId].icon : '⚒️'}</div>
                                <h3 class="text-xl font-bold text-white">${selectedRecipe.name}</h3>
                                <p class="text-secondary text-sm">Level ${selectedRecipe.level} • ${selectedRecipe.xp} XP</p>
                            </div>
                            
                                                        <div class="mb-4">
                                ${this.game.state.activeActions[skillId] ? `
                                    <div class="mb-4">
                                        <button id="stop-craft-btn" class="w-full chimera-button bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md text-lg font-bold" 
                                                data-skill-id="${skillId}">
                                            🛑 STOP CRAFTING
                                        </button>
                                        <div class="text-center text-xs text-secondary mt-2">
                                            Crafting automatically in progress...
                                        </div>
                                    </div>
                                ` : `
                                    <button id="start-craft-btn" class="w-full chimera-button bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md text-lg font-bold" 
                                            data-recipe-id="${selectedRecipe.id}" data-skill-id="${skillId}">
                                        🚀 START CRAFTING
                                    </button>
                                `}
                            </div>
                        ` : `
                            <div class="text-center text-gray-500 py-8">
                                <div class="text-4xl mb-2">⚒️</div>
                                <p>Select a recipe to begin crafting</p>
                            </div>
                        `}
                    </div>
                </div>
            `;
            
            return `
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    ${recipeList}
                    ${craftingStation}
                </div>
            `;
            } catch (error) {
                console.error(`Error rendering artisan skill view for ${skillId}:`, error);
                return `
                    <div class="block p-4 text-center text-red-400">
                        <h2 class="text-lg font-bold mb-2">Error Loading ${skillId}</h2>
                        <p>There was an error loading this skill view. Please check the console for details.</p>
                        <p class="text-xs mt-2">Error: ${error.message}</p>
                    </div>
                `;
            }
        }
        renderFarmingAssign(action) {
            const wf = this.game.state.workers.farming; const assigned = wf.assigned[action.id] || 0; const total = wf.total; const sumAssigned = Object.values(wf.assigned).reduce((a,b)=>a+b,0); const free = Math.max(0, total - sumAssigned);
            const speedMult = this.game.getWorkerSpeedMultiplier('farming', action); const yieldMult = this.game.getWorkerYieldMultiplier('farming', action);
            return `
                <div class="mt-3 p-2 rounded-md bg-black/30 border border-border-color">
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-secondary">Farmhands Assigned: <span class="text-white font-mono">${assigned}</span> / Free: <span class="text-white font-mono">${free}</span></span>
                        <div class="space-x-1">
                            <button class="assign-farming-worker-btn chimera-button px-2 py-1 rounded" data-action-id="${action.id}" data-dir="-1">-</button>
                            <button class="assign-farming-worker-btn chimera-button px-2 py-1 rounded" data-action-id="${action.id}" data-dir="+1">+</button>
                        </div>
                    </div>
                    <p class="text-[11px] text-secondary mt-1">Eff: x${yieldMult.toFixed(2)} yield, ${Math.round(100 - speedMult*100)}% faster</p>
                </div>
            `;
        }

        renderFiremakingView() {
            const bonfireAction = GAME_DATA.RECIPES.firemaking[0]; const bonfireCard = this.renderActionCard('firemaking', bonfireAction, 'Light');
            const bonfireStatus = this.game.state.bonfire.active ? `<p class="text-green-400">Bonfire is active! +${this.game.state.bonfire.xpBoost * 100}% Global Skill XP.</p><p class="text-xs text-secondary">Expires in: ${Math.ceil((this.game.state.bonfire.expiry - Date.now())/60000)} minutes.</p>` : '<p class="text-red-400">Bonfire is not active.</p>';
            return `<div class="col-span-1 md:col-span-2 xl:col-span-3"><div class="block p-4 mb-4"><h2 class="text-lg font-bold text-white mb-2">Bonfire Status</h2>${bonfireStatus}</div></div>${bonfireCard}`;
        }

        renderRunecraftingView() {
            const playerSkill = this.game.state.player.skills['runecrafting'];
            if (!playerSkill) {
                return `<div class="text-center text-red-400 py-8">Error: Runecrafting skill not initialized</div>`;
            }
            // Ensure skill has required properties
            if (typeof playerSkill.currentXP === 'undefined') playerSkill.currentXP = 0;
            if (typeof playerSkill.xpToNextLevel === 'undefined') playerSkill.xpToNextLevel = 100;
            if (typeof playerSkill.level === 'undefined') playerSkill.level = 1;
            
            // Debug logging
            console.log('Runecrafting skill object:', playerSkill);
            console.log('Skill properties:', {
                level: playerSkill.level,
                currentXP: playerSkill.currentXP,
                xpToNextLevel: playerSkill.xpToNextLevel
            });
            const recipes = GAME_DATA.RECIPES['runecrafting'] || [];
            const selectedRecipeId = this.game.state.selectedRecipe['runecrafting'] || '';
            
            const recipeList = recipes.map(recipe => {
                const hasLevel = playerSkill.level >= recipe.level;
                const canAfford = recipe.input ? recipe.input.every(inp => (this.game.state.bank[inp.itemId] || 0) >= inp.quantity) : true;
                const isSelected = recipe.id === selectedRecipeId;
                const mastery = this.game.state.player.mastery['runecrafting']?.[recipe.id] || { level: 0 };
                
                const glyphData = GAME_DATA.ITEMS[recipe.output.itemId];
                const rarity = recipe.level <= 10 ? 'common' : recipe.level <= 25 ? 'uncommon' : recipe.level <= 45 ? 'rare' : recipe.level <= 65 ? 'epic' : 'legendary';
                const rarityColors = {
                    'common': 'text-gray-300 border-gray-500',
                    'uncommon': 'text-green-400 border-green-500',
                    'rare': 'text-blue-400 border-blue-500',
                    'epic': 'text-purple-400 border-purple-500',
                    'legendary': 'text-yellow-400 border-yellow-500'
                };
                
                return `
                    <div class="recipe-item p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${isSelected ? 'border-blue-500 bg-blue-900/20' : rarityColors[rarity] + ' hover:scale-105'} ${!hasLevel ? 'opacity-50' : ''}" 
                         data-recipe-id="${recipe.id}" data-skill-id="runecrafting">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center gap-2">
                                <span class="text-2xl">${glyphData?.icon || '🔮'}</span>
                                <div>
                                    <h3 class="text-white font-semibold text-lg">${recipe.name}</h3>
                                    <span class="text-xs ${rarityColors[rarity]} font-medium">${rarity.toUpperCase()}</span>
                                </div>
                            </div>
                            <div class="text-right">
                                <span class="text-sm text-secondary">Level ${recipe.level}</span>
                                <div class="text-xs text-yellow-400">${recipe.xp} XP</div>
                            </div>
                        </div>
                        
                        <div class="mb-3">
                            <p class="text-sm text-secondary leading-relaxed">${glyphData?.description || 'A powerful magical glyph'}</p>
                        </div>
                        
                        <div class="text-xs text-secondary mb-3">
                            <div class="mb-2 font-medium text-white">Requirements:</div>
                            ${recipe.input ? recipe.input.map(inp => {
                                const itemData = GAME_DATA.ITEMS[inp.itemId];
                                const hasEnough = (this.game.state.bank[inp.itemId] || 0) >= inp.quantity;
                                return `<div class="flex items-center gap-2 mb-1 ${hasEnough ? 'text-green-400' : 'text-red-400'}">
                                    <span>${itemData?.icon || '❔'}</span>
                                    <span>${itemData?.name || inp.itemId}</span>
                                    <span class="font-mono">×${inp.quantity}</span>
                                </div>`;
                            }).join('') : ''}
                        </div>
                        
                        <div class="flex items-center justify-between text-xs text-secondary">
                            <span>⏱️ ${(recipe.baseTime / 1000).toFixed(1)}s</span>
                            <span>⭐ Mastery ${mastery.level}</span>
                        </div>
                        

                    </div>
                `;
            }).join('');

            const selectedRecipe = recipes.find(r => r.id === selectedRecipeId);
            const isCrafting = this.game.state.crafting['runecrafting'] || null;
            const workerPanel = this.game.state.workers['runecrafting'] ? this.renderWorkerPanel('runecrafting') : '';
            
            return `
                <div class="space-y-6">
                    <div class="flex items-center justify-between">
                        <h1 class="text-3xl font-bold text-white">🔮 Runecrafting</h1>
                        <div class="text-right">
                            <div class="text-2xl font-bold text-blue-400">Level ${playerSkill.level}</div>
                            <div class="text-sm text-secondary">${(playerSkill.currentXP || 0).toLocaleString()} / ${(playerSkill.xpToNextLevel || 100).toLocaleString()} XP</div>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div class="lg:col-span-2">
                            <h2 class="text-xl font-bold text-white mb-4">Glyph Recipes</h2>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                ${recipeList}
                            </div>
                        </div>
                        
                        <div class="space-y-4">
                            <div class="bg-primary/20 border border-border-color rounded-lg p-4">
                                <h3 class="text-lg font-bold text-white mb-3">Glyph Forge</h3>
                                ${selectedRecipe ? `
                                    <div class="mb-4">
                                        <h4 class="font-semibold text-white mb-2">${selectedRecipe.name}</h4>
                                        <p class="text-secondary text-sm">Level ${selectedRecipe.level} • ${selectedRecipe.xp} XP</p>
                                    </div>
                                    
                                    <div class="mb-4">
                                        ${this.game.state.activeActions['runecrafting'] ? `
                                            <div class="mb-4">
                                                <button id="stop-craft-btn" class="w-full chimera-button bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md text-lg font-bold" 
                                                        data-skill-id="runecrafting">
                                                    🛑 STOP CRAFTING
                                                </button>
                                                <div class="text-center text-xs text-secondary mt-2">
                                                    Crafting automatically in progress...
                                                </div>
                                            </div>
                                        ` : `
                                            <button id="start-craft-btn" class="w-full chimera-button bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md text-lg font-bold mb-3" 
                                                    data-recipe-id="${selectedRecipe.id}" data-skill-id="runecrafting">
                                                🔮 Start Crafting Glyph
                                            </button>
                                        `}
                                    </div>
                                ` : `
                                    <div class="text-center text-secondary py-8">
                                        Select a glyph recipe to begin crafting
                                    </div>
                                `}
                            </div>
                            

                        </div>
                    </div>
                </div>
            `;
        }

        renderBankView() {
            // Collect items and apply filter/search/sort
            const entries = Object.entries(this.game.state.bank || {});
            const filtered = entries.filter(([itemId, quantity]) => {
                const item = GAME_DATA.ITEMS[itemId]; if (!item) return false;
                // Filter
                const cat = this.getItemCategory(itemId);
                if (this.bankFilter !== 'all' && cat !== this.bankFilter) return false;
                // Search
                const itemName = (item.name || '').toLowerCase();
                if (this.bankSearchQuery && !itemName.includes(this.bankSearchQuery.toLowerCase())) return false;
                return true;
            });
            // Sort
            filtered.sort((a,b) => {
                const [aid, aq] = a; const [bid, bq] = b;
                const an = (GAME_DATA.ITEMS[aid]?.name || '').toLowerCase();
                const bn = (GAME_DATA.ITEMS[bid]?.name || '').toLowerCase();
                switch (this.bankSortMode) {
                    case 'qty_asc': return aq - bq;
                    case 'name_asc': return an.localeCompare(bn);
                    case 'name_desc': return bn.localeCompare(an);
                    case 'qty_desc':
                    default: return bq - aq;
                }
            });

            const itemsHtml = filtered.map(([itemId, quantity]) => {
                const itemData = GAME_DATA.ITEMS[itemId]; if (!itemData) return '';
                const cat = this.getItemCategory(itemId);
                const ringClass = cat === 'food' ? 'ring-emerald-500/40' : 
                    (cat === 'weapons' ? 'ring-rose-500/40' : 
                    (cat === 'runes' ? 'ring-indigo-500/40' : 
                    (cat === 'spells' ? 'ring-purple-500/40' : 
                    (cat === 'chests' ? 'ring-yellow-500/40' : 
                    (cat === 'glyphs' ? 'ring-orange-500/40' : 
                    'ring-slate-500/30')))));
                const tooltip = this.getItemTooltipHTML(itemId, quantity);
                
                // Check if this is equipment that can be equipped to the army
                const isEquipment = itemData.type && ['weapon', 'armor', 'ammunition'].includes(itemData.type);
                const isCurrentlyEquipped = isEquipment && this.game.state.army.equipment && this.game.state.army.equipment[itemData.type] === itemId;
                
                // Determine what action buttons to show based on item type
                let actionButtons = '';
                
                if (isEquipment) {
                    if (isCurrentlyEquipped) {
                        actionButtons = `<div class="text-xs text-green-400 mt-1">✓ Equipped</div>`;
                    } else {
                        actionButtons = `<button class="equip-army-btn text-xs bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded mt-1" data-item-id="${itemId}">Equip Army</button>`;
                    }
                } else if (cat === 'food') {
                    // Food items can be eaten
                    actionButtons = `<button class="eat-food-btn text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded mt-1" data-item-id="${itemId}">Eat</button>`;
                } else if (cat === 'runes') {
                    // Runes can be used for spells
                    actionButtons = `<button class="use-rune-btn text-xs bg-purple-600 hover:bg-purple-700 px-2 py-1 rounded mt-1" data-item-id="${itemId}">Use</button>`;
                } else if (itemData.type === 'spell') {
                    // Spells can be cast
                    actionButtons = `<button class="cast-spell-btn text-xs bg-indigo-600 hover:bg-indigo-700 px-2 py-1 rounded mt-1" data-item-id="${itemId}">Cast</button>`;
                } else if (itemData.type === 'chest') {
                    // Chests can be opened
                    actionButtons = `<button class="open-chest-btn text-xs bg-yellow-600 hover:bg-yellow-700 px-2 py-1 rounded mt-1" data-item-id="${itemId}">Open</button>`;
                } else if (itemData.type === 'glyph') {
                    // Glyphs can be activated
                    actionButtons = `<button class="activate-glyph-btn text-xs bg-orange-600 hover:bg-orange-700 px-2 py-1 rounded mt-1" data-item-id="${itemId}">Activate</button>`;
                }
                
                return `
                    <div class="block p-3 flex flex-col items-center justify-center text-center tooltip rounded-md border border-border-color hover:border-white/30 transition relative ring-1 ${ringClass} bank-item-card" data-item-id="${itemId}">
                        <span class="tooltiptext">${tooltip}</span>
                        <span class="text-3xl">${itemData.icon || '❔'}</span>
                        <span class="text-[11px] text-secondary mt-1 truncate max-w-[96px]">${itemData.name}</span>
                        <span class="font-mono text-white mt-1">${quantity.toLocaleString()}</span>
                        ${actionButtons}
                    </div>`;
            }).join('');

            const emptyHtml = `<p class="text-secondary col-span-full text-center">Your bank is empty. Gather some resources!</p>`;

            const toolbar = `
                <div class="block p-3 mb-4">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div class="flex flex-wrap gap-2">
                            ${['all','food','weapons','runes','spells','chests','glyphs','materials'].map(f => `<button class="bank-filter-btn chimera-button px-3 py-1.5 rounded-md text-xs ${this.bankFilter===f?'ring-1 ring-white/30':''}" data-filter="${f}">${f.charAt(0).toUpperCase()+f.slice(1)}</button>`).join('')}
                        </div>
                        <div class="flex items-center gap-2">
                            <input id="bank-search" type="text" value="${this.bankSearchQuery || ''}" placeholder="Search items..." class="w-48 p-2 bg-primary border border-border-color rounded-md" />
                            <select id="bank-sort" class="p-2 bg-primary border border-border-color rounded-md">
                                <option value="qty_desc" ${this.bankSortMode==='qty_desc'?'selected':''}>Qty (High → Low)</option>
                                <option value="qty_asc" ${this.bankSortMode==='qty_asc'?'selected':''}>Qty (Low → High)</option>
                                <option value="name_asc" ${this.bankSortMode==='name_asc'?'selected':''}>Name (A → Z)</option>
                                <option value="name_desc" ${this.bankSortMode==='name_desc'?'selected':''}>Name (Z → A)</option>
                            </select>
                        </div>
                    </div>
                </div>`;

            return `<h1 class="text-2xl font-semibold text-white mb-2">Bank</h1>${toolbar}<div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">${itemsHtml || emptyHtml}</div>`;
        }

        renderMetaSkillsView() {
            const skillsHtml = Object.values(this.game.state.player.meta_skills).map(skill => {
                let bonusText = '';
                switch (skill.name) {
                    case META_SKILLS.STRENGTH: bonusText = `Increases combat damage.`; break;
                    case META_SKILLS.INTELLECT: bonusText = `Increases Artisan skill XP gain.`; break;
                    case META_SKILLS.STEWARDSHIP: bonusText = `- ${(skill.level - 1).toFixed(1)}% Gathering action time.`; break;
                    case META_SKILLS.RESILIENCE: bonusText = `+${((skill.level - 1) * 5).toFixed(1)}% Stamina regeneration.`; break;
                    case META_SKILLS.ARTISTRY: bonusText = `Increases Gold from all sources.`; break;
                }
                return `<div class="block p-4"><h3 class="text-lg font-bold text-white" id="meta-skill-title-${skill.name}">${skill.name} - Level ${skill.level}</h3><div class="w-full xp-bar-bg rounded-full h-2 my-2"><div id="meta-skill-xp-bar-${skill.name}" class="xp-bar-fill h-2 rounded-full" style="width:${(skill.currentXP / skill.xpToNextLevel) * 100}%"></div></div><p class="text-xs text-secondary text-right" id="meta-skill-xp-text-${skill.name}">${Math.floor(skill.currentXP)} / ${skill.xpToNextLevel} XP</p><p class="text-sm text-accent-blue mt-2">${bonusText}</p></div>`;
            }).join('');
            
            // Add ascension button if conditions are met
            const ascensionButton = this.renderAscensionButton();
            
            return `<h1 class="text-2xl font-semibold text-white mb-4">Meta Skills</h1><p class="text-secondary mb-4">These skills are leveled up by completing real-life tasks. They provide passive bonuses to your in-game actions.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4">${skillsHtml}</div>${ascensionButton}`;
        }
        
        renderAscensionButton() {
            // Get ascension data from the game
            const { canAscend, essenceToGain } = this.game.calculateAscensionData();
            
            if (canAscend) {
                // Return the ascension button HTML
                return `
                    <div class="mt-8 p-6 bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500 rounded-lg">
                        <div class="text-center">
                            <h2 class="text-xl font-bold text-white mb-3">🌟 Ascension Available! 🌟</h2>
                            <p class="text-secondary mb-4">You've reached the pinnacle of your current journey. Ascend to gain permanent power and start a new adventure!</p>
                            <div class="bg-slate-800/50 p-4 rounded-lg mb-4">
                                <div class="text-lg text-yellow-300 font-bold">Essence to Gain: ${essenceToGain}</div>
                                <div class="text-sm text-secondary">Current Total Meta Skill Levels: ${this.game.state.player.totalMetaSkillLevels}</div>
                            </div>
                            <button id="ascend-btn" class="chimera-button bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105">
                                🚀 Ascend and Gain ${essenceToGain} Essence
                            </button>
                        </div>
                    </div>
                `;
            }
            
            // If can't ascend, return empty string (no button)
            return '';
        }

        renderCombatView() {
            const availableExpeditions = this.game.getAvailableExpeditions();
            const activeExpedition = this.game.state.expeditions.active;
            
            // Expedition cards with unlock requirements and rewards preview
            const expeditionCards = availableExpeditions.map(exp => {
                const isActive = activeExpedition === exp.id;
                const completedCount = this.game.state.expeditions.history[exp.id] || 0;
                
                const difficultyColors = {
                    'Easy': 'border-green-500 bg-green-900/20',
                    'Medium': 'border-blue-500 bg-blue-900/20',
                    'Hard': 'border-yellow-500 bg-yellow-900/20',
                    'Epic': 'border-purple-500 bg-purple-900/20',
                    'Legendary': 'border-red-500 bg-red-900/20'
                };
                
                const requirementsList = exp.unlockRequirements?.map(req => {
                    switch (req.type) {
                        case 'skill':
                            return `${req.skill} Level ${req.level}`;
                        case 'army_power':
                            return `Army DPS ${req.minDps}+`;
                        case 'total_army_power':
                            return `Army: ${req.minDps || 0} DPS, ${req.minHps || 0} HPS`;
                        case 'empire_units':
                            return `${req.minCount}+ ${req.unitId}`;
                        case 'expedition_completed':
                            return `Complete "${req.expeditionId}" ${req.minTimes}x`;
                        case 'item_owned':
                            return `Own ${req.minCount}+ ${req.itemId}`;
                        default:
                            return req.type;
                    }
                }).join(', ') || 'None';

                // Army requirements and tactical info
                const armyValidation = this.game.validateArmyRequirements(exp);
                const tacticalBonus = this.game.calculateArmyTacticalBonus(exp);
                
                let armyStatusClass = armyValidation.canDeploy ? 'text-green-400' : 'text-red-400';
                let armyStatusIcon = armyValidation.canDeploy ? '✓' : '✗';
                
                const armyInfo = exp.armyRequirements ? `
                    <div class="mt-3 p-2 bg-slate-800 rounded border-l-2 ${armyValidation.canDeploy ? 'border-green-500' : 'border-red-500'}">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="${armyStatusClass}">${armyStatusIcon}</span>
                            <strong class="text-xs">Army Requirements:</strong>
                        </div>
                        ${exp.armyRequirements.minUnits ? `<div class="text-xs text-secondary">• Min ${exp.armyRequirements.minUnits} units</div>` : ''}
                        ${exp.armyRequirements.specificUnits ? exp.armyRequirements.specificUnits.map(req => 
                            `<div class="text-xs text-secondary">• ${req.count}x ${GAME_DATA.ARMY_CLASSES[req.type].name}: <span class="text-yellow-300">${req.reason}</span></div>`
                        ).join('') : ''}
                        
                        ${tacticalBonus.bonusBreakdown.length > 0 ? `
                            <div class="mt-2 text-xs">
                                <div class="text-purple-300 font-bold">Current Tactical Bonus: ${tacticalBonus.totalBonus > 0 ? '+' : ''}${tacticalBonus.totalBonus}%</div>
                                ${tacticalBonus.bonusBreakdown.map(bonus => 
                                    `<div class="text-xs ${bonus.bonus > 0 ? 'text-green-300' : 'text-red-300'}">• ${bonus.source}: ${bonus.bonus > 0 ? '+' : ''}${bonus.bonus}% - ${bonus.reason}</div>`
                                ).join('')}
                            </div>
                        ` : ''}
                    </div>
                ` : '';

                const rewardPreview = [
                    exp.rewards.gold ? `Gold: ${exp.rewards.gold[0]}-${exp.rewards.gold[1]}` : '',
                    exp.rewards.baseXP ? `XP: ${Object.keys(exp.rewards.baseXP).join(', ')}` : '',
                    exp.rewards.loot ? `Items: ${exp.rewards.loot.length} types` : ''
                ].filter(r => r).join(' • ');

            return `
                    <div class="expedition-card ${difficultyColors[exp.difficulty]} border rounded-lg p-4 ${isActive ? 'ring-2 ring-blue-400' : 'hover:border-opacity-70 transition-all cursor-pointer'}">
                        <div class="flex items-start justify-between mb-3">
                            <div class="flex items-center gap-3">
                                <span class="text-3xl">${exp.icon}</span>
                                <div>
                                    <h3 class="text-lg font-bold text-white">${exp.name}</h3>
                                    <span class="text-xs px-2 py-1 rounded ${difficultyColors[exp.difficulty]} border">${exp.difficulty}</span>
                    </div>
                        </div>
                            <div class="text-right text-xs text-secondary">
                                <div>Duration: ${Math.floor(exp.duration / 1000)}s</div>
                                <div>Success: ${exp.successRate}%</div>
                                ${completedCount > 0 ? `<div class="text-yellow-400">✓ ${completedCount}x</div>` : ''}
                    </div>
                        </div>
                        
                        <p class="text-sm text-secondary mb-3">${exp.description}</p>
                        
                        <div class="space-y-2 text-xs">
                            <div><strong>Requirements:</strong> ${requirementsList}</div>
                            ${exp.resourceCost ? `<div><strong>Resources:</strong> ${Object.entries(exp.resourceCost).map(([resourceId, amount]) => 
                                `<span class="text-yellow-300">${GAME_DATA.ITEMS[resourceId]?.icon || '❔'} ${amount}</span>`
                            ).join(' ')}</div>` : ''}
                            <div><strong>Rewards:</strong> ${rewardPreview}</div>
                        </div>
                        
                        ${armyInfo}
                        
                        ${isActive ? `
                            <div class="mt-4">
                                <div class="w-full bg-slate-800 rounded-full h-2 mb-2">
                                    <div class="bg-blue-500 h-2 rounded-full transition-all duration-1000" style="width: ${this.game.state.expeditions.progress}%"></div>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-xs text-blue-300">${Math.round(this.game.state.expeditions.progress)}% Complete</span>
                                    <button class="cancel-expedition-btn text-red-400 hover:text-red-300 text-xs px-2 py-1 rounded bg-red-900/20">Cancel</button>
                                </div>
                            </div>
                        ` : `
                            ${(() => {
                                // Check resource availability
                                let resourceCheck = { canAfford: true, missingResources: [] };
                                if (exp.resourceCost) {
                                    Object.entries(exp.resourceCost).forEach(([resourceId, requiredAmount]) => {
                                        const available = this.game.state.bank[resourceId] || 0;
                                        if (available < requiredAmount) {
                                            resourceCheck.canAfford = false;
                                            resourceCheck.missingResources.push(`${GAME_DATA.ITEMS[resourceId]?.name || resourceId}: ${available}/${requiredAmount}`);
                                        }
                                    });
                                }
                                
                                const canLaunch = armyValidation.canDeploy && resourceCheck.canAfford;
                                let buttonText = 'Launch Expedition (20 Stamina)';
                                let buttonClass = 'bg-blue-600 hover:bg-blue-700 text-white';
                                
                                if (!armyValidation.canDeploy) {
                                    buttonText = 'Army Requirements Not Met';
                                    buttonClass = 'bg-gray-600 text-gray-300 cursor-not-allowed';
                                } else if (!resourceCheck.canAfford) {
                                    buttonText = 'Insufficient Resources';
                                    buttonClass = 'bg-red-600 text-red-100 cursor-not-allowed';
                                }
                                
                                return `<button class="launch-expedition-btn mt-4 w-full px-3 py-2 rounded font-bold ${buttonClass}" 
                                        data-expedition-id="${exp.id}" ${canLaunch ? '' : 'disabled'}>
                                    ${buttonText}
                                </button>`;
                            })()}
                        `}
                    </div>
                `;
            }).join('');

            // Locked expeditions preview
            const allExpeditions = Object.values(GAME_DATA.EXPEDITIONS);
            const lockedExpeditions = allExpeditions.filter(exp => 
                !this.game.state.expeditions.unlocked.includes(exp.id)
            ).slice(0, 3); // Show only first 3 locked ones

            const lockedCards = lockedExpeditions.map(exp => `
                <div class="locked-expedition border border-slate-600 bg-slate-800/50 rounded-lg p-4 opacity-60">
                    <div class="flex items-center gap-3 mb-2">
                        <span class="text-2xl filter grayscale">🔒</span>
                        <div>
                            <h3 class="text-lg font-bold text-slate-400">${exp.name}</h3>
                            <span class="text-xs px-2 py-1 rounded bg-slate-700">${exp.difficulty}</span>
                        </div>
                    </div>
                    <p class="text-sm text-slate-500 mb-2">${exp.description}</p>
                    <div class="text-xs text-slate-500">
                        <strong>Unlock:</strong> ${exp.unlockRequirements?.map(req => {
                            switch (req.type) {
                                case 'skill': return `${req.skill} Lv${req.level}`;
                                case 'army_power': return `${req.minDps} Army DPS`;
                                case 'expedition_completed': return `Complete "${req.expeditionId}" ${req.minTimes}x`;
                                default: return req.type;
                            }
                        }).join(', ') || 'Unknown'}
                    </div>
                </div>
            `).join('');

            const playerStats = `
                    <div class="block p-4 space-y-3">
                    <h2 class="text-lg font-bold text-white">Expedition Readiness</h2>
                    <div class="space-y-2 text-sm">
                        <div class="flex justify-between">
                            <span>HP:</span>
                            <span class="${this.game.state.player.hp < this.game.state.player.hpMax * 0.5 ? 'text-red-400' : 'text-green-400'}">
                                ${this.game.state.player.hp}/${this.game.state.player.hpMax}
                            </span>
                        </div>
                        <div class="flex justify-between">
                            <span>Stamina:</span>
                            <span class="${this.game.state.player.stamina < 20 ? 'text-red-400' : 'text-green-400'}">
                                ${Math.floor(this.game.state.player.stamina)}/${this.game.state.player.staminaMax}
                            </span>
                        </div>
                        <div class="flex justify-between">
                            <span>Army DPS:</span>
                            <span class="text-blue-400">${(this.game.state.army.production?.dps || 0).toFixed(1)}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Army HPS:</span>
                            <span class="text-purple-400">${(this.game.state.army.production?.hps || 0).toFixed(1)}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Rations:</span>
                            <span class="text-yellow-400">${(this.game.state.bank.rations || 0).toLocaleString()}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Tools:</span>
                            <span class="text-blue-400">${(this.game.state.bank.tools || 0).toLocaleString()}</span>
                        </div>
                    </div>
                    
                    ${this.game.state.blueprints && Object.keys(this.game.state.blueprints).length > 0 ? `
                        <div class="mt-4">
                            <h3 class="text-sm font-bold text-purple-300 mb-2">📜 Blueprints Discovered</h3>
                            <div class="space-y-1 text-xs">
                                ${Object.entries(this.game.state.blueprints).slice(0, 5).map(([id, count]) => 
                                    `<div class="text-purple-200">${id.replace('_blueprint', '').replace(/_/g, ' ')} x${count}</div>`
                                ).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    <div class="mt-4 p-3 bg-blue-900/20 border border-blue-600/30 rounded-lg">
                        <h3 class="text-sm font-bold text-blue-300 mb-2">⚔️ Army Management</h3>
                        <p class="text-xs text-secondary mb-3">Need more units for expeditions?</p>
                        <button id="goto-army-from-expeditions" class="w-full px-3 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold">
                            Manage Army
                        </button>
                    </div>
                </div>
            `;

            return `
                <h1 class="text-2xl font-semibold text-white mb-4">
                    🗺️ Expeditions
                    ${activeExpedition ? '<span class="text-blue-400 text-lg ml-2">(In Progress)</span>' : ''}
                </h1>
                
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    <div class="lg:col-span-3">
                        <div class="space-y-4">
                            <div>
                                <h2 class="text-lg font-bold text-white mb-3">Available Expeditions</h2>
                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    ${expeditionCards}
                                </div>
                            </div>
                            
                            ${lockedCards ? `
                                <div>
                                    <h2 class="text-lg font-bold text-slate-400 mb-3">🔒 Locked Expeditions</h2>
                                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                        ${lockedCards}
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                    
                    <div class="space-y-4">
                        ${playerStats}
                    </div>
                </div>
            `;
        }
        renderCombatFooter() { /* placeholder for potential dynamic footer updates */ }

        renderArmyView() {
            const units = GAME_DATA.ARMY_CLASSES;
            const owned = this.game.state.army.units;
            const output = this.game.calculateArmyOutputPerSecond();
            
            // Update max stats based on current army size
            this.game.updateArmyMaxStats();
            
            const hero = `
                <div class="block p-5 mb-5 medieval-glow gradient-army">
                    <div class="flex items-center gap-3">
                        <div class="text-2xl">⚔️</div>
                        <div>
                            <h1 class="text-xl font-extrabold tracking-wide">Army Command</h1>
                            <p class="text-secondary text-sm">Build and manage your mighty army of warriors, mages, and healers.</p>
                        </div>
                    </div>
                </div>`;

            const vitals = `
                <div class="block p-4 mb-4">
                    <h2 class="text-lg font-bold mb-2">Army Vitals</h2>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="flex items-center justify-between">
                            <span class="text-red-300">❤️ HP:</span>
                            <span class="font-mono text-white">${Math.floor(this.game.state.army.hp)}/${this.game.state.army.hpMax}</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-blue-300">🔮 Mana:</span>
                            <span class="font-mono text-white">${Math.floor(this.game.state.army.mana)}/${this.game.state.army.manaMax}</span>
                        </div>
                    </div>
                    <div class="mt-2 space-x-2">
                        ${this.renderArmySupplyButtons()}
                    </div>
                </div>`;

            const stats = `
                <div class="block p-4 mb-4">
                    <h2 class="text-lg font-bold mb-2">Army Statistics</h2>
                    <div class="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <div class="text-2xl font-bold text-red-400">${output.dps.toFixed(1)}</div>
                            <div class="text-xs text-secondary">Damage per Second</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold text-green-400">${output.hps.toFixed(1)}</div>
                            <div class="text-xs text-secondary">Healing per Second</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold text-yellow-400">${output.foodPerMin.toFixed(1)}</div>
                            <div class="text-xs text-secondary">Food per Minute</div>
                        </div>
                    </div>
                </div>`;
            
            const equipment = `
                <div class="block p-4 mb-4">
                    <h2 class="text-lg font-bold mb-2">Army Equipment</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        <div class="text-center p-3 border border-gray-600 rounded-lg">
                            <div class="text-lg mb-2">⚔️ Weapon</div>
                            ${this.game.state.army.equipment.weapon ? 
                                `<div class="text-green-400 font-bold">${GAME_DATA.ITEMS[this.game.state.army.equipment.weapon].name}</div>
                                 <div class="text-xs text-secondary">+${GAME_DATA.ITEMS[this.game.state.army.equipment.weapon].dps_bonus || 0} DPS</div>
                                 <button class="unequip-army-btn text-xs bg-red-600 hover:bg-red-700 px-2 py-1 rounded mt-2" data-equipment-type="weapon">Unequip</button>` : 
                                '<div class="text-gray-500">None equipped</div>'
                            }
                        </div>
                        <div class="text-center p-3 border border-gray-600 rounded-lg">
                            <div class="text-lg mb-2">🛡️ Shield</div>
                            ${this.game.state.army.equipment.shield ? 
                                `<div class="text-blue-400 font-bold">${GAME_DATA.ITEMS[this.game.state.army.equipment.shield].name}</div>
                                 <div class="text-xs text-secondary">+${GAME_DATA.ITEMS[this.game.state.army.equipment.shield].hp_bonus || 0} HP</div>
                                 <button class="unequip-army-btn text-xs bg-red-600 hover:bg-red-700 px-2 py-1 rounded mt-2" data-equipment-type="shield">Unequip</button>` : 
                                '<div class="text-gray-500">None equipped</div>'
                            }
                        </div>
                        <div class="text-center p-3 border border-gray-600 rounded-lg">
                            <div class="text-lg mb-2">🪖 Helmet</div>
                            ${this.game.state.army.equipment.helmet ? 
                                `<div class="text-blue-400 font-bold">${GAME_DATA.ITEMS[this.game.state.army.equipment.helmet].name}</div>
                                 <div class="text-xs text-secondary">+${GAME_DATA.ITEMS[this.game.state.army.equipment.helmet].hp_bonus || 0} HP</div>
                                 <button class="unequip-army-btn text-xs bg-red-600 hover:bg-red-700 px-2 py-1 rounded mt-2" data-equipment-type="helmet">Unequip</button>` : 
                                '<div class="text-gray-500">None equipped</div>'
                            }
                        </div>
                        <div class="text-center p-3 border border-gray-600 rounded-lg">
                            <div class="text-lg mb-2">💍 Ring</div>
                            ${this.game.state.army.equipment.ring ? 
                                `<div class="text-purple-400 font-bold">${GAME_DATA.ITEMS[this.game.state.army.equipment.ring].name}</div>
                                 <div class="text-xs text-secondary">${GAME_DATA.ITEMS[this.game.state.army.equipment.ring].bonus || 'Bonus'}</div>
                                 <button class="unequip-army-btn text-xs bg-red-600 hover:bg-red-700 px-2 py-1 rounded mt-2" data-equipment-type="ring">Unequip</button>` : 
                                '<div class="text-gray-500">None equipped</div>'
                            }
                        </div>
                        <div class="text-center p-3 border border-gray-600 rounded-lg">
                            <div class="text-lg mb-2">📿 Amulet</div>
                            ${this.game.state.army.equipment.amulet ? 
                                `<div class="text-yellow-400 font-bold">${GAME_DATA.ITEMS[this.game.state.army.equipment.amulet].name}</div>
                                 <div class="text-xs text-secondary">${GAME_DATA.ITEMS[this.game.state.army.equipment.amulet].bonus || 'Bonus'}</div>
                                 <button class="unequip-army-btn text-xs bg-red-600 hover:bg-red-700 px-2 py-1 rounded mt-2" data-equipment-type="amulet">Unequip</button>` : 
                                '<div class="text-gray-500">None equipped</div>'
                            }
                        </div>
                        <div class="text-center p-3 border border-gray-600 rounded-lg">
                            <div class="text-lg mb-2">🏹 Ammunition</div>
                            ${this.game.state.army.equipment.ammunition ? 
                                `<div class="text-yellow-400 font-bold">${GAME_DATA.ITEMS[this.game.state.army.equipment.ammunition].name}</div>
                                 <div class="text-xs text-secondary">Equipped</div>
                                 <button class="unequip-army-btn text-xs bg-red-600 hover:bg-red-700 px-2 py-1 rounded mt-2" data-equipment-type="ammunition">Unequip</button>` : 
                                '<div class="text-gray-500">None equipped</div>'
                            }
                        </div>
                    </div>
                </div>`;

            const cards = Object.keys(units).map(id => {
                const u = units[id];
                const qty = owned[id] || 0;
                const cost = this.game.getArmyUnitCost(id);
                
                const statLines = [];
                if (u.dps > 0) statLines.push(`DPS: ${u.dps}`);
                if (u.hps > 0) statLines.push(`HPS: ${u.hps}`);
                if (u.foodPerMin > 0) statLines.push(`Food: ${u.foodPerMin}/min`);
                
                return `
                    <div class="block p-4 flex flex-col justify-between">
                        <div>
                            <h3 class="text-lg font-bold">${u.emoji} ${u.name}</h3>
                            <p class="text-secondary text-xs">${u.role}</p>
                            <p class="text-secondary text-xs">${u.description}</p>
                            <p class="text-secondary text-xs mt-1">${statLines.join(' • ')}</p>
                            <p class="text-white text-sm mt-2">Recruited: <span class="font-mono">${qty}</span></p>
                        </div>
                        <button class="hire-army-btn chimera-button px-3 py-2 rounded-md mt-3" data-unit-id="${id}">Recruit — Cost: ${cost} gold</button>
                    </div>
                `;
            }).join('');

            const rallyButton = Object.values(owned).some(count => count > 0) ? `
                <div class="block p-4 mt-4 text-center">
                    <button id="rally-army-btn" class="chimera-button px-6 py-3 rounded-md bg-red-600 hover:bg-red-700">
                        Rally Army to Battle! ⚔️
                    </button>
                    <p class="text-secondary text-xs mt-2">Deploy your army on expeditions</p>
                </div>
            ` : '';

            return `
                ${hero}
                ${vitals}
                ${stats}
                ${equipment}
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">${cards}</div>
                ${rallyButton}
            `;
        }

        renderArmySupplyButtons() {
            const foodItems = Object.keys(this.game.state.bank).filter(id => 
                GAME_DATA.ITEMS[id] && GAME_DATA.ITEMS[id].heals && (this.game.state.bank[id] || 0) > 0
            );
            
            const potionItems = Object.keys(this.game.state.bank).filter(id => {
                const item = GAME_DATA.ITEMS[id];
                return item && (item.name.toLowerCase().includes('elixir') || item.name.toLowerCase().includes('potion')) && (this.game.state.bank[id] || 0) > 0;
            });

            let buttons = '';
            
            if (foodItems.length > 0) {
                const foodButtons = foodItems.slice(0, 3).map(id => {
                    const item = GAME_DATA.ITEMS[id];
                    const count = this.game.state.bank[id] || 0;
                    return `<button class="feed-army-btn chimera-button px-2 py-1 text-xs rounded" data-item-id="${id}" ${this.game.state.army.hp >= this.game.state.army.hpMax ? 'disabled' : ''}>
                        ${item.icon} ${item.name} (${count}) +${item.heals * 2} HP
                    </button>`;
                }).join('');
                buttons += foodButtons;
            }
            
            if (potionItems.length > 0) {
                const potionButtons = potionItems.slice(0, 2).map(id => {
                    const item = GAME_DATA.ITEMS[id];
                    const count = this.game.state.bank[id] || 0;
                    return `<button class="supply-army-potion-btn chimera-button px-2 py-1 text-xs rounded" data-item-id="${id}" ${this.game.state.army.mana >= this.game.state.army.manaMax ? 'disabled' : ''}>
                        ${item.icon} ${item.name} (${count}) +25 Mana
                    </button>`;
                }).join('');
                buttons += potionButtons;
            }

            if (!buttons) {
                buttons = '<span class="text-secondary text-xs">No food or potions available. Cook food or find elixirs to supply your army!</span>';
            }

            return buttons;
        }

        renderClickerView() {
            const units = GAME_DATA.UNITS;
            const owned = this.game.state.empire.units;
            const prod = this.game.calculateEmpireProductionPerSecond();
            const cards = Object.keys(units).map(id => {
                const u = units[id];
                const qty = owned[id] || 0;
                const cost = this.game.getEmpireUnitCost(id);
                
                // Check if building can be constructed
                let canBuild = true;
                let requirementText = '';
                if (u.requires) {
                    Object.entries(u.requires).forEach(([requiredUnitId, requiredCount]) => {
                        const ownedRequired = owned[requiredUnitId] || 0;
                        if (ownedRequired < requiredCount) {
                            canBuild = false;
                            const requiredUnit = units[requiredUnitId];
                            requirementText += `${requiredUnit.emoji} ${requiredUnit.name}: ${ownedRequired}/${requiredCount}<br>`;
                        }
                    });
                }
                
                const lines = [];
                if (u.goldPerSec) lines.push(`Gold: +${u.goldPerSec}/s each`);
                if (u.runesPerSec) lines.push(`Runes: +${u.runesPerSec}/s each`);
                if (u.essencePerSec) lines.push(`Essence: +${u.essencePerSec}/s each`);
                if (u.rationsPerSec) lines.push(`Rations: +${u.rationsPerSec}/s each`);
                if (u.toolsPerSec) lines.push(`Tools: +${u.toolsPerSec}/s each`);
                if (u.premiumRationsPerSec) lines.push(`Premium Rations: +${u.premiumRationsPerSec}/s each`);
                if (u.specializedToolsPerSec) lines.push(`Specialized Tools: +${u.specializedToolsPerSec}/s each`);
                
                // Display bonuses if any
                let bonusText = '';
                if (u.bonuses) {
                    const bonusLines = [];
                    Object.entries(u.bonuses).forEach(([bonusType, value]) => {
                        const bonusNames = {
                            workerMorale: 'Worker Morale',
                            expeditionSuccess: 'Expedition Success',
                            resourceEfficiency: 'Resource Efficiency',
                            rareDrops: 'Rare Drops',
                            toolQuality: 'Tool Quality',
                            workerEfficiency: 'Worker Efficiency',
                            equipmentDurability: 'Equipment Durability',
                            innovationChance: 'Innovation Chance',
                            divineBlessing: 'Divine Blessing',
                            armyMorale: 'Army Morale',
                            expeditionStamina: 'Expedition Stamina',
                            workerSpecialization: 'Worker Specialization',
                            equipmentBonuses: 'Equipment Bonuses',
                            resourcePreservation: 'Resource Preservation',
                            emergencyRations: 'Emergency Rations',
                            resourceTrading: 'Resource Trading',
                            priceOptimization: 'Price Optimization'
                        };
                        bonusLines.push(`+${value}% ${bonusNames[bonusType] || bonusType}`);
                    });
                    if (bonusLines.length > 0) {
                        bonusText = `<div class="text-xs text-green-300 mt-1">${bonusLines.join(' • ')}</div>`;
                    }
                }
                
                const buttonClass = canBuild ? 'chimera-button' : 'chimera-button bg-gray-600 text-gray-300 cursor-not-allowed';
                const buttonText = canBuild ? `Hire — Cost: ${cost} gold` : 'Requirements Not Met';
                
                return `
                    <div class="block p-4 flex flex-col justify-between ${!canBuild ? 'opacity-60' : ''}">
                        <div>
                            <h3 class="text-lg font-bold">${u.emoji} ${u.name}</h3>
                            <p class="text-secondary text-xs">${u.description}</p>
                            <p class="text-secondary text-xs mt-1">${lines.join(' • ')}</p>
                            ${bonusText}
                            <p class="text-white text-sm mt-2">Owned: <span class="font-mono">${qty}</span></p>
                            ${!canBuild ? `<div class="text-xs text-red-300 mt-1"><strong>Requires:</strong><br>${requirementText}</div>` : ''}
                        </div>
                        <button class="hire-unit-btn ${buttonClass} px-3 py-2 rounded-md mt-3" data-unit-id="${id}" ${!canBuild ? 'disabled' : ''}>${buttonText}</button>
                    </div>
                `;
            }).join('');
            // Workforce summary
            this.game.ensureWorkerState();
            const gIds = Object.keys(GAME_DATA.SKILLS).filter(id => GAME_DATA.SKILLS[id].type === 'gathering');
            const totals = gIds.reduce((acc, id) => { const ws = this.game.state.workers[id]; const assigned = Object.values(ws.assigned||{}).reduce((a,b)=>a+b,0); acc.total += (ws.total||0); acc.assigned += assigned; return acc; }, { total: 0, assigned: 0 });
            const free = Math.max(0, totals.total - totals.assigned);
            return `
                <h1 class="text-2xl font-semibold text-white mb-4">Empire Command</h1>
                <div class="block p-4 mb-4">
                    <h2 class="text-lg font-bold">Production</h2>
                    <p class="text-secondary text-sm">
                        Gold: <span class="text-white">+${prod.goldPerSec.toFixed(1)}/s</span> • 
                        Runes: <span class="text-white">+${(prod.runesPerSec||0).toFixed(2)}/s</span> • 
                        Essence: <span class="text-white">+${(prod.essencePerSec||0).toFixed(2)}/s</span> • 
                        Rations: <span class="text-white">+${(prod.rationsPerSec||0).toFixed(2)}/s</span> • 
                        Tools: <span class="text-white">+${(prod.toolsPerSec||0).toFixed(2)}/s</span>
                        ${prod.premiumRationsPerSec > 0 ? ` • Premium Rations: <span class="text-yellow-300">+${prod.premiumRationsPerSec.toFixed(2)}/s</span>` : ''}
                        ${prod.specializedToolsPerSec > 0 ? ` • Specialized Tools: <span class="text-blue-300">+${prod.specializedToolsPerSec.toFixed(2)}/s</span>` : ''}
                    </p>
                </div>
                <div class="block p-4 mb-4 medieval-glow gradient-workforce">
                    <div class="flex items-center justify-between gap-3">
                        <div>
                            <h2 class="text-lg font-bold">Workforce Overview</h2>
                            <p class="text-secondary text-sm">Workers: <span class="text-white font-mono">${totals.total}</span> • Assigned: <span class="text-white font-mono">${totals.assigned}</span> • Free: <span class="text-green-300 font-mono">${free}</span></p>
                        </div>
                        <button id="goto-workforce" class="chimera-button juicy-button px-3 py-2 rounded-md"><i class="fas fa-people-group"></i> Manage Workforce</button>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">${cards}</div>
            `;
        }

        renderSpellbookView() {
            const buffs = this.game.state.player.activeBuffs || {};
            const cards = GAME_DATA.SPELLS.map(s => {
                const active = buffs[s.effect] && Date.now() < buffs[s.effect];
                const remaining = active ? Math.ceil((buffs[s.effect] - Date.now()) / 1000) : 0;
                return `
                    <div class="block p-4 flex flex-col justify-between ${active ? 'ring-1 ring-purple-400' : ''}">
                        <div>
                            <h3 class="text-lg font-bold">${s.name}</h3>
                            <p class="text-secondary text-xs">${s.description}</p>
                            <p class="text-secondary text-xs">Rune Cost: ${s.runeCost}</p>
                            ${active ? `<p class="text-purple-300 text-xs">Active • ${remaining}s left</p>` : ''}
                        </div>
                        <button class="cast-spell-btn chimera-button px-3 py-2 rounded-md mt-3" data-spell-id="${s.id}" ${active ? 'disabled' : ''}>Cast</button>
                    </div>
                `;
            }).join('');
            return `<h1 class="text-2xl font-semibold text-white mb-4">Spellbook</h1><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">${cards}</div>`;
        }

        renderShopView() {
            const currentEssence = this.game.state.player.essence || 0;
            
            // Essence Shop Section
            const essenceShopSection = this.renderEssenceShopSection();
            
            // General Store Section
            const generalStoreSection = this.renderGeneralStoreSection();
            
            // Regular Shop Section
            const chestCards = GAME_DATA.CHESTS.map(c => `
                <div class="block p-4 flex flex-col justify-between">
                    <div>
                        <h3 class="text-lg font-bold">${c.name}</h3>
                        <p class="text-secondary text-xs">${c.description}</p>
                        <p class="text-secondary text-xs">${c.keyItemID ? 'Requires Key' : 'Cost: ' + c.cost + ' gold'}</p>
                    </div>
                    <button class="buy-chest-btn chimera-button px-3 py-2 rounded-md mt-3" data-chest-id="${c.id}">${c.keyItemID ? 'Open' : 'Buy & Open'}</button>
                </div>
            `).join('');
            
            return `
                <h1 class="text-2xl font-semibold text-white mb-4">Shop</h1>
                
                <!-- Essence Shop Section -->
                ${essenceShopSection}
                
                <!-- General Store Section -->
                ${generalStoreSection}
                
                <!-- Regular Shop Section -->
                <div class="mt-8">
                    <h2 class="text-xl font-semibold text-white mb-4">Treasure Chests</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">${chestCards}</div>
                </div>
            `;
        }
        
        renderGeneralStoreSection() {
            const currentGold = this.game.state.player.gold || 0;
            
            const shopItems = GAME_DATA.SHOP_ITEMS.map(item => `
                <div class="block p-4 flex flex-col justify-between border border-gray-600 rounded-md">
                    <div class="flex items-center gap-3 mb-2">
                        <span class="text-2xl">${item.icon}</span>
                        <div>
                            <h3 class="text-lg font-bold">${item.name}</h3>
                            <p class="text-secondary text-xs">${item.description}</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-3">
                        <span class="text-yellow-300 font-mono text-sm">${item.cost} gold</span>
                        <button class="buy-item-btn chimera-button px-3 py-2 rounded-md text-sm" 
                                data-item-id="${item.id}" 
                                data-item-cost="${item.cost}"
                                ${currentGold < item.cost ? 'disabled' : ''}>
                            ${currentGold < item.cost ? 'Insufficient Gold' : 'Buy'}
                        </button>
                    </div>
                </div>
            `).join('');
            
            return `
                <div class="mt-8">
                    <h2 class="text-xl font-semibold text-white mb-4">🏪 General Store</h2>
                    <p class="text-secondary text-sm mb-4">Basic supplies and essentials for your adventures.</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">${shopItems}</div>
                </div>
            `;
        }
        
        renderEssenceShopSection() {
            const currentEssence = this.game.state.player.essence || 0;
            const { canAscend, essenceToGain } = this.game.calculateAscensionData();
            
            // Define available ascension upgrades
            const ascensionUpgrades = [
                {
                    id: 'starting_gold_boost',
                    name: 'Starting Gold Boost',
                    description: 'Start each ascension with bonus gold',
                    icon: '💰',
                    cost: 5,
                    maxLevel: 10,
                    currentLevel: this.game.state.player.ascension_upgrades.starting_gold_boost || 0,
                    effect: '+25 gold per level on ascension',
                    category: 'Economy'
                },
                {
                    id: 'starting_stamina_boost',
                    name: 'Starting Stamina Boost',
                    description: 'Start each ascension with bonus stamina',
                    icon: '⚡',
                    cost: 8,
                    maxLevel: 5,
                    currentLevel: this.game.state.player.ascension_upgrades.starting_stamina_boost || 0,
                    effect: '+20 stamina per level on ascension',
                    category: 'Combat'
                },
                {
                    id: 'meta_skill_xp_boost',
                    name: 'Meta Skill XP Boost',
                    description: 'Meta skills gain XP faster',
                    icon: '⭐',
                    cost: 15,
                    maxLevel: 5,
                    currentLevel: this.game.state.player.ascension_upgrades.meta_skill_xp_boost || 0,
                    effect: '+20% XP gain per level',
                    category: 'Progression'
                },
                {
                    id: 'essence_generation_boost',
                    name: 'Essence Generation Boost',
                    description: 'Generate more essence per ascension',
                    icon: '🌟',
                    cost: 25,
                    maxLevel: 3,
                    currentLevel: this.game.state.player.ascension_upgrades.essence_generation_boost || 0,
                    effect: '+10% essence per level',
                    category: 'Ascension'
                },
                {
                    id: 'permanent_worker_boost',
                    name: 'Permanent Worker Boost',
                    description: 'Workers start with bonus levels',
                    icon: '👷',
                    cost: 20,
                    maxLevel: 3,
                    currentLevel: this.game.state.player.ascension_upgrades.permanent_worker_boost || 0,
                    effect: '+1 worker level per level on ascension',
                    category: 'Empire'
                },
                {
                    id: 'ascension_memory',
                    name: 'Ascension Memory',
                    description: 'Remember more completed sagas',
                    icon: '🧠',
                    cost: 12,
                    maxLevel: 5,
                    currentLevel: this.game.state.player.ascension_upgrades.ascension_memory || 0,
                    effect: '+2 saga memory slots per level',
                    category: 'Memory'
                }
            ];
            
            // Group upgrades by category
            const upgradesByCategory = {};
            ascensionUpgrades.forEach(upgrade => {
                if (!upgradesByCategory[upgrade.category]) {
                    upgradesByCategory[upgrade.category] = [];
                }
                upgradesByCategory[upgrade.category].push(upgrade);
            });
            
            const upgradeCards = Object.entries(upgradesByCategory).map(([category, upgrades]) => `
                <div class="mb-6">
                    <h3 class="text-lg font-semibold text-white mb-3 border-b border-slate-600 pb-2">${category} Upgrades</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        ${upgrades.map(upgrade => {
                            const canAfford = currentEssence >= upgrade.cost;
                            const isMaxed = upgrade.currentLevel >= upgrade.maxLevel;
                            const buttonText = isMaxed ? 'MAXED' : `Buy (${upgrade.cost} Essence)`;
                            const buttonClass = isMaxed ? 'chimera-button bg-gray-600 text-gray-300 cursor-not-allowed' : 
                                              canAfford ? 'chimera-button bg-blue-600 hover:bg-blue-700' : 
                                              'chimera-button bg-red-600 text-red-300 cursor-not-allowed';
                            
                            return `
                                <div class="block p-4 border border-slate-600 rounded-lg ${isMaxed ? 'opacity-60' : ''}">
                                    <div class="flex items-start gap-3 mb-3">
                                        <div class="text-2xl">${upgrade.icon}</div>
                                        <div class="flex-1">
                                            <h4 class="text-md font-bold text-white">${upgrade.name}</h4>
                                            <p class="text-xs text-secondary">${upgrade.description}</p>
                                        </div>
                                    </div>
                                    
                                    <div class="space-y-2 mb-3">
                                        <div class="text-xs text-secondary">
                                            <span class="text-blue-300">Effect:</span> ${upgrade.effect}
                                        </div>
                                        <div class="text-xs text-secondary">
                                            <span class="text-yellow-300">Level:</span> ${upgrade.currentLevel}/${upgrade.maxLevel}
                                        </div>
                                        <div class="text-xs text-secondary">
                                            <span class="text-purple-300">Cost:</span> ${upgrade.cost} Essence
                                        </div>
                                    </div>
                                    
                                    <button class="buy-ascension-upgrade-btn w-full ${buttonClass} px-3 py-2 rounded-md text-sm" 
                                            data-upgrade-id="${upgrade.id}" 
                                            data-cost="${upgrade.cost}"
                                            ${isMaxed || !canAfford ? 'disabled' : ''}>
                                        ${buttonText}
                                    </button>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `).join('');
            
            return `
                <div class="mb-8 p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500 rounded-lg">
                    <div class="flex items-center justify-between mb-4">
                        <div>
                            <h2 class="text-2xl font-bold text-white mb-2">🌟 Essence Shop</h2>
                            <p class="text-secondary">Spend your hard-earned essence on permanent upgrades that persist through ascensions!</p>
                        </div>
                        <div class="text-right">
                            <div class="text-sm text-secondary mb-1">Current Essence</div>
                            <div class="text-3xl font-bold text-blue-300">${currentEssence}</div>
                            ${canAscend ? `<div class="text-sm text-green-300 mt-1">Ready to ascend for +${essenceToGain}!</div>` : ''}
                    </div>
                    </div>
                    
                    ${upgradeCards}
                </div>
            `;
        }

        renderWorkforceView() {
            this.game.ensureWorkerState();
            // Only include skills that actually have worker objects
            const allSkillIds = Object.keys(GAME_DATA.SKILLS).filter(skillId => 
                this.game.state.workers[skillId] !== undefined
            );
            
            // Empire overview section
            const empireOverview = this.renderEmpireOverview();
            
            // Facility management section
            const facilitiesSection = this.renderFacilitiesSection();
            
            // Equipment management section
            const equipmentSection = this.renderEquipmentSection();
            
            // Enhanced worker cards with morale and equipment
            const cards = allSkillIds.map(skillId => {
                const skill = GAME_DATA.SKILLS[skillId];
                const ws = this.game.state.workers[skillId];
                
                // Safety check - skip if worker state is undefined
                if (!ws) {
                    console.warn(`Worker state undefined for skill: ${skillId}`);
                    return '';
                }
                
                const assigned = Object.values(ws.assigned || {}).reduce((a,b)=>a+b,0);
                const free = Math.max(0, (ws.total||0) - assigned);
                const hireCost = this.game.getHireCost(skillId);
                const speedCost = this.game.getUpgradeCost(skillId, 'speed');
                const yieldCost = this.game.getUpgradeCost(skillId, 'yield');
                const speedLvl = ws.upgrades.speedLevel || 0;
                const yieldLvl = ws.upgrades.yieldLevel || 0;
                const icon = skill.icon;
                const theme = skill.theme;
                
                // Enhanced data
                const morale = ws.morale || 100;
                const moraleColor = morale >= 100 ? 'text-green-300' : morale >= 80 ? 'text-yellow-300' : 'text-red-300';
                const moraleIcon = morale >= 100 ? '😊' : morale >= 80 ? '😐' : '😞';
                const equipped = Object.values(ws.equipment.tools).reduce((a,b)=>a+b,0) + Object.values(ws.equipment.clothing).reduce((a,b)=>a+b,0);
                const equipmentCoverage = ws.total > 0 ? Math.round((equipped / ws.total) * 100) : 0;
                
                const metaMap = {
                    // Gathering Skills
                    woodcutting: { title: 'Timber Lodge', worker: 'Timberhand', emoji: '🪓' },
                    mining: { title: 'Mining Camp', worker: 'Miner', emoji: '⛏️' },
                    fishing: { title: 'Fishing Harbor', worker: 'Angler', emoji: '🎣' },
                    farming: { title: 'Farming Estate', worker: 'Farmhand', emoji: '🚜' },
                    hunter: { title: "Trapper's Outpost", worker: 'Trapper', emoji: '🪤' },
                    archaeology: { title: 'Ancient Digsite', worker: 'Excavator', emoji: '🏺' },
                    divination: { title: "Diviner's Grove", worker: 'Diviner', emoji: '🔮' },
                    
                    // Artisan Skills
                    smithing: { title: 'Blacksmith Forge', worker: 'Blacksmith', emoji: '⚒️' },
                    cooking: { title: 'Kitchen', worker: 'Cook', emoji: '👨‍🍳' },
                    woodworking: { title: 'Carpentry Workshop', worker: 'Carpenter', emoji: '🪵' },
                    runecrafting: { title: 'Rune Altar', worker: 'Runecrafter', emoji: '🔮' },
                    herblore: { title: 'Herb Garden', worker: 'Herbalist', emoji: '🌿' },
                    crafting: { title: 'Jewelry Workshop', worker: 'Jeweler', emoji: '💍' },
                };
                const meta = metaMap[skillId] || { title: `${skill.name} Camp`, worker: 'Worker', emoji: '🏕️' };
                const title = meta.title;
                const workerName = meta.worker;
                const headerEmoji = meta.emoji;

                return `
                    <div class="block p-0 border border-${theme} overflow-hidden medieval-glow ${skillId==='woodcutting'?'gradient-wood':'gradient-workforce'}">
                        <div class="relative p-5 pb-4">
                            <div class="absolute right-4 -top-3 text-4xl opacity-20 select-none">${headerEmoji}</div>
                            <div class="flex items-center gap-3">
                                <div class="text-2xl">${icon}</div>
                                <div>
                                    <h2 class="text-lg font-extrabold tracking-wide">${title}</h2>
                                    <p class="text-secondary text-sm">Manage ${workerName}${workerName.endsWith('s')?'':'s'}. Equipment ${equipmentCoverage}% equipped.</p>
                                </div>
                            </div>
                            
                            <!-- Enhanced Stats Grid -->
                            <div class="grid grid-cols-4 gap-2 mt-4">
                                <div class="glass-card rounded-md p-2 text-center shine">
                                    <div class="text-[10px] text-secondary uppercase tracking-wider">Workers</div>
                                    <div class="text-xl font-mono text-white">${ws.total}</div>
                                </div>
                                <div class="glass-card rounded-md p-2 text-center">
                                    <div class="text-[10px] text-secondary uppercase tracking-wider">Assigned</div>
                                    <div class="text-lg font-mono text-white">${assigned}</div>
                                </div>
                                <div class="glass-card rounded-md p-2 text-center">
                                    <div class="text-[10px] text-secondary uppercase tracking-wider">Free</div>
                                    <div class="text-lg font-mono text-green-300">${free}</div>
                                </div>
                                <div class="glass-card rounded-md p-2 text-center">
                                    <div class="text-[10px] text-secondary uppercase tracking-wider">Morale</div>
                                    <div class="text-lg font-mono ${moraleColor}">${moraleIcon}${Math.round(morale)}</div>
                            </div>
                            </div>
                            
                            <!-- Action Buttons -->
                            <div class="flex flex-col gap-2 mt-4">
                                <div class="flex flex-col sm:flex-row gap-2">
                                    <button class="hire-worker-btn chimera-button juicy-button px-2 py-2 rounded-md font-semibold text-sm" data-skill-id="${skillId}">
                                        <span class="mr-1">${skillId==='woodcutting'?'🪵':headerEmoji}</span> Hire ${workerName} — <span class="text-yellow-300 font-mono">${hireCost}g</span>
                                    </button>
                                    <button class="bulk-equip-btn chimera-button juicy-button px-2 py-2 rounded-md font-semibold text-sm" data-skill-id="${skillId}">
                                        <span class="mr-1">🛠️</span> Auto-Equip
                                    </button>
                                </div>
                                <div class="flex flex-col sm:flex-row gap-2">
                                    <button class="upgrade-worker-btn chimera-button px-2 py-2 rounded-md text-sm" data-skill-id="${skillId}" data-type="speed">
                                        <span class="mr-1">⚙️</span> Speed L${speedLvl} — <span class="text-yellow-300 font-mono">${speedCost}g</span>
                                    </button>
                                    <button class="upgrade-worker-btn chimera-button px-2 py-2 rounded-md text-sm" data-skill-id="${skillId}" data-type="yield">
                                        <span class="mr-1">📦</span> Yield L${yieldLvl} — <span class="text-yellow-300 font-mono">${yieldCost}g</span>
                                    </button>
                                </div>
                            </div>
                            
                            <!-- Enhanced Bonus Display -->
                            <div class="text-[11px] text-secondary mt-3 space-y-1">
                                <div>Upgrades: <span class="text-green-300">+${(yieldLvl*10).toFixed(0)}% yield</span> • <span class="text-blue-300">${Math.round(100 - (Math.pow(0.92, speedLvl)*100))}% faster</span></div>
                                <div>Morale: <span class="${moraleColor}">${morale > 100 ? '+' : ''}${Math.round(morale - 100)}% efficiency</span> • Equipment: <span class="text-purple-300">${equipmentCoverage}% coverage</span></div>
                            </div>
                            
                            <!-- Tool Equipment Section -->
                            ${this.renderWorkerToolEquipment(skillId, ws)}
                            
                            <!-- Actions/Recipes Section -->
                            ${this.renderWorkerActions(skillId, ws)}
                        </div>
                    </div>
                `;
            }).join('');

            return `
                ${empireOverview}
                <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
                    <div class="xl:col-span-2">
                        <h2 class="text-xl font-bold text-white mb-4">🏗️ Worker Camps</h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">${cards}</div>
                    </div>
                    <div class="space-y-6">
                        ${facilitiesSection}
                        ${equipmentSection}
                    </div>
                </div>
            `;
        }
        
        renderEmpireOverview() {
            const totalWorkers = Object.values(this.game.state.workers).reduce((sum, ws) => sum + (ws.total || 0), 0);
            const totalAssigned = Object.values(this.game.state.workers).reduce((sum, ws) => sum + Object.values(ws.assigned || {}).reduce((a,b)=>a+b,0), 0);
            const avgMorale = Object.values(this.game.state.workers).reduce((sum, ws) => sum + (ws.morale || 100), 0) / Object.keys(this.game.state.workers).length;
            const moraleColor = avgMorale >= 100 ? 'text-green-300' : avgMorale >= 80 ? 'text-yellow-300' : 'text-red-300';
            
            return `
                <div class="block p-5 mb-6 medieval-glow gradient-workforce">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="text-3xl">🏗️</div>
                            <div>
                                <h1 class="text-2xl font-extrabold tracking-wide">Empire Management</h1>
                                <p class="text-secondary text-sm">Advanced workforce management with equipment, morale, and facilities</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <div class="text-2xl font-mono text-white">${totalWorkers}</div>
                            <div class="text-xs text-secondary uppercase tracking-wider">Total Workers</div>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 gap-4 mt-4">
                                <div class="glass-card rounded-md p-3 text-center">
                            <div class="text-sm text-secondary">Active Workers</div>
                            <div class="text-2xl font-mono text-white">${totalAssigned}</div>
                                </div>
                                <div class="glass-card rounded-md p-3 text-center">
                            <div class="text-sm text-secondary">Average Morale</div>
                            <div class="text-2xl font-mono ${moraleColor}">${Math.round(avgMorale)}</div>
                                </div>
                        <div class="glass-card rounded-md p-3 text-center">
                            <div class="text-sm text-secondary">Free Workers</div>
                            <div class="text-2xl font-mono text-green-300">${totalWorkers - totalAssigned}</div>
                            </div>
                            </div>
                        </div>
            `;
        }
        
        renderWorkerToolEquipment(skillId, workerState) {
            const equippedTools = Object.keys(workerState.equipment.tools || {});
            const toolBonus = this.game.calculateToolBonus(skillId);
            
            // Find available tools for this skill
            const availableTools = Object.keys(GAME_DATA.ITEMS).filter(itemId => {
                const item = GAME_DATA.ITEMS[itemId];
                return item.type === 'tool' && this.game.getToolSkill(item.bonus) === skillId;
            });
            
            let toolSection = '';
            
            if (equippedTools.length > 0) {
                // Show equipped tools
                toolSection = `
                    <div class="mt-3 p-3 bg-slate-800/50 rounded-lg border border-slate-600">
                        <div class="text-xs text-secondary mb-2">🔧 Equipped Tools</div>
                        ${equippedTools.map(toolId => {
                            const tool = GAME_DATA.ITEMS[toolId];
                            const bonus = tool.bonus || '';
                            return `
                                <div class="flex items-center justify-between text-xs mb-1">
                                    <span class="text-white">${tool.icon} ${tool.name}</span>
                                    <div class="flex items-center gap-2">
                                        <span class="text-green-300">${bonus}</span>
                                        <button class="unequip-tool-btn text-red-400 hover:text-red-300 px-1" 
                                                data-skill-id="${skillId}" data-tool-id="${toolId}">✕</button>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                        <div class="text-xs text-secondary mt-2">
                            Active Bonuses: <span class="text-green-300">+${toolBonus.speed}% speed</span> • <span class="text-blue-300">+${toolBonus.yield}% yield</span>
                        </div>
                    </div>
                `;
            } else {
                // Show available tools to equip
                const availableToolItems = availableTools.filter(toolId => 
                    (this.game.state.bank[toolId] || 0) > 0
                );
                
                if (availableToolItems.length > 0) {
                    toolSection = `
                        <div class="mt-3 p-3 bg-slate-800/50 rounded-lg border border-slate-600">
                            <div class="text-xs text-secondary mb-2">🛠️ Available Tools</div>
                            ${availableToolItems.map(toolId => {
                                const tool = GAME_DATA.ITEMS[toolId];
                                const bonus = tool.bonus || '';
                                return `
                                    <div class="flex items-center justify-between text-xs mb-1">
                                        <span class="text-white">${tool.icon} ${tool.name}</span>
                                        <button class="equip-tool-btn text-green-400 hover:text-green-300 px-1" 
                                                data-skill-id="${skillId}" data-tool-id="${toolId}">⚡</button>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    `;
                }
            }
            
            return toolSection;
        }
        
        renderWorkerActions(skillId, workerState) {
            const skill = GAME_DATA.SKILLS[skillId];
            let actionsSection = '';
            
            if (GAME_DATA.ACTIONS[skillId]) {
                // Gathering skill - show actions
                const actions = GAME_DATA.ACTIONS[skillId] || [];
                if (actions.length > 0) {
                    actionsSection = `
                        <div class="mt-3 p-3 bg-slate-800/50 rounded-lg border border-slate-600">
                            <div class="text-xs text-secondary mb-2">🌾 Available Actions</div>
                            ${actions.map(action => {
                                const assigned = workerState.assigned[action.id] || 0;
                                const total = workerState.total || 0;
                                const free = Math.max(0, total - Object.values(workerState.assigned || {}).reduce((a,b)=>a+b,0));
                                const canAssign = free > 0;
                                
                                return `
                                    <div class="flex items-center justify-between text-xs mb-2 p-2 bg-slate-700/50 rounded">
                                        <div class="flex items-center gap-2">
                                            <span class="text-white">${action.name}</span>
                                            <span class="text-secondary">Lv.${action.level}</span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span class="text-yellow-300">${assigned}/${total}</span>
                                            <button class="assign-worker-btn chimera-button px-1 py-1 rounded text-xs ${canAssign ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 cursor-not-allowed'}" 
                                                    data-skill-id="${skillId}" data-action-id="${action.id}" data-dir="+1" ${!canAssign ? 'disabled' : ''}>
                                                +
                                            </button>
                                            <button class="assign-worker-btn chimera-button px-1 py-1 rounded text-xs ${assigned > 0 ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-600 cursor-not-allowed'}" 
                                                    data-skill-id="${skillId}" data-action-id="${action.id}" data-dir="-1" ${assigned <= 0 ? 'disabled' : ''}>
                                                -
                                            </button>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    `;
                }
            } else if (GAME_DATA.RECIPES[skillId]) {
                // Artisan skill - show recipes
                const recipes = GAME_DATA.RECIPES[skillId] || [];
                if (recipes.length > 0) {
                    actionsSection = `
                        <div class="mt-3 p-3 bg-slate-800/50 rounded-lg border border-slate-600">
                            <div class="text-xs text-secondary mb-2">⚒️ Available Recipes</div>
                            ${recipes.map(recipe => {
                                const assigned = workerState.assigned[recipe.id] || 0;
                                const total = workerState.total || 0;
                                const free = Math.max(0, total - Object.values(workerState.assigned || {}).reduce((a,b)=>a+b,0));
                                const canAssign = free > 0;
                                
                                // Check if player has required level
                                const playerLevel = this.game.state.player.skills[skillId]?.level || 1;
                                const canCraft = playerLevel >= recipe.level;
                                
                                return `
                                    <div class="flex items-center justify-between text-xs mb-2 p-2 bg-slate-700/50 rounded ${!canCraft ? 'opacity-50' : ''}">
                                        <div class="flex items-center gap-2">
                                            <span class="text-white">${recipe.name}</span>
                                            <span class="text-secondary">Lv.${recipe.level}</span>
                                            ${!canCraft ? '<span class="text-red-400">(Locked)</span>' : ''}
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span class="text-yellow-300">${assigned}/${total}</span>
                                            <button class="assign-worker-btn chimera-button px-1 py-1 rounded text-xs ${canAssign && canCraft ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 cursor-not-allowed'}" 
                                                    data-skill-id="${skillId}" data-action-id="${recipe.id}" data-dir="+1" ${!canAssign || !canCraft ? 'disabled' : ''}>
                                                +
                                            </button>
                                            <button class="assign-worker-btn chimera-button px-1 py-1 rounded text-xs ${assigned > 0 ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-600 cursor-not-allowed'}" 
                                                    data-skill-id="${skillId}" data-action-id="${recipe.id}" data-dir="-1" ${assigned <= 0 ? 'disabled' : ''}>
                                                -
                                            </button>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    `;
                }
            }
            
            return actionsSection;
        }
        
        renderFacilitiesSection() {
            const facilities = Object.keys(GAME_DATA.EMPIRE_FACILITIES).map(facilityId => {
                const facility = GAME_DATA.EMPIRE_FACILITIES[facilityId];
                const state = this.game.state.empire.facilities[facilityId] || { level: 0, active: true };
                const currentLevel = state.level;
                const maxLevel = facility.levels.length;
                const cost = currentLevel < maxLevel ? Math.floor(facility.baseCost * Math.pow(facility.costGrowth, currentLevel)) : 0;
                const canUpgrade = currentLevel < maxLevel;
                
                let bonusText = '';
                if (currentLevel > 0 && facility.levels[currentLevel - 1]) {
                    const levelData = facility.levels[currentLevel - 1];
                    const bonuses = Object.keys(levelData).filter(key => key !== 'maintenance').map(key => 
                        `${key.replace('_', ' ')}: ${levelData[key]}${key.includes('percent') || key.includes('bonus') || key.includes('reduction') ? '%' : ''}`
                    );
                    bonusText = bonuses.join(' • ');
                }
                
                return `
                    <div class="glass-card rounded-md p-3 ${currentLevel > 0 ? 'ring-1 ring-blue-400' : ''}">
                        <div class="flex items-center justify-between mb-2">
                            <div class="flex items-center gap-2">
                                <div class="text-lg">${facility.icon}</div>
                                <div>
                                    <div class="text-sm font-bold text-white">${facility.name}</div>
                                    <div class="text-xs text-secondary">Level ${currentLevel}/${maxLevel}</div>
                                </div>
                            </div>
                            ${canUpgrade ? `<button class="build-facility-btn chimera-button px-2 py-1 text-xs rounded" data-facility-id="${facilityId}">
                                ${currentLevel === 0 ? 'Build' : 'Upgrade'} — ${cost}g
                            </button>` : '<div class="text-xs text-green-300">MAX</div>'}
                        </div>
                        <div class="text-xs text-secondary mb-2">${facility.description}</div>
                        ${bonusText ? `<div class="text-xs text-blue-300">${bonusText}</div>` : ''}
                    </div>
                `;
            }).join('');

                return `
                <div>
                    <h3 class="text-lg font-bold text-white mb-3">🏛️ Empire Facilities</h3>
                    <div class="space-y-2">${facilities}</div>
                </div>
            `;
        }
        
        renderEquipmentSection() {
            const equipmentInventory = Object.keys(this.game.state.empire.equipment.inventory).filter(id => 
                (this.game.state.empire.equipment.inventory[id] || 0) > 0
            ).map(equipmentId => {
                const equipment = this.game.getEquipmentData(equipmentId);
                const quantity = this.game.state.empire.equipment.inventory[equipmentId] || 0;
                if (!equipment) return '';
                
                const bonusText = Object.keys(equipment.bonuses).map(key => 
                    `${key}: +${equipment.bonuses[key]}${key === 'speed' || key === 'yield' ? '%' : ''}`
                ).join(', ');
                
                return `
                    <div class="glass-card rounded-md p-2">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <div class="text-sm">${equipment.icon}</div>
                                <div>
                                    <div class="text-xs font-bold text-white">${equipment.name}</div>
                                    <div class="text-xs text-secondary">Qty: ${quantity}</div>
                            </div>
                        </div>
                            <button class="bulk-assign-equipment-btn chimera-button px-2 py-1 text-xs rounded" data-equipment-id="${equipmentId}">
                                Auto-Assign
                            </button>
                        </div>
                        <div class="text-xs text-blue-300 mt-1">${bonusText}</div>
                    </div>
                `;
            }).join('');

            // Group equipment by skill type for better organization
            const equipmentBySkill = {};
            Object.keys(GAME_DATA.WORKER_EQUIPMENT.tools).concat(Object.keys(GAME_DATA.WORKER_EQUIPMENT.clothing)).forEach(equipmentId => {
                const equipment = this.game.getEquipmentData(equipmentId);
                if (!equipment) return;
                
                if (equipment.compatibleSkills === 'all') {
                    if (!equipmentBySkill['universal']) equipmentBySkill['universal'] = [];
                    equipmentBySkill['universal'].push(equipmentId);
                } else {
                    equipment.compatibleSkills.forEach(skillId => {
                        if (!equipmentBySkill[skillId]) equipmentBySkill[skillId] = [];
                        equipmentBySkill[skillId].push(equipmentId);
                    });
                }
            });
            
            const availableEquipment = Object.keys(equipmentBySkill).map(skillId => {
                const equipmentList = equipmentBySkill[skillId];
                const skillName = skillId === 'universal' ? 'Universal' : GAME_DATA.SKILLS[skillId]?.name || skillId;
                const skillIcon = skillId === 'universal' ? '🌐' : GAME_DATA.SKILLS[skillId]?.icon || '⚙️';
                
                const equipmentItems = equipmentList.map(equipmentId => {
                    const equipment = this.game.getEquipmentData(equipmentId);
                    const marketBonus = this.game.getFacilityBonus('market', 'cost_reduction') || 0;
                    const cost = Math.floor(equipment.cost * (1 - marketBonus / 100));
                    
                    return `
                        <div class="glass-card rounded-md p-2 border-l-2 border-blue-400">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-2">
                                    <div class="text-sm">${equipment.icon}</div>
                                    <div>
                                        <div class="text-xs font-bold text-white">${equipment.name}</div>
                                        <div class="text-xs text-secondary">${cost}g each</div>
                                    </div>
                                </div>
                                <button class="buy-equipment-btn chimera-button px-2 py-1 text-xs rounded" data-equipment-id="${equipmentId}" data-cost="${cost}">
                                    Buy 10
                                </button>
                            </div>
                            <div class="text-xs text-blue-300 mt-1">${Object.keys(equipment.bonuses).map(key => 
                                `${key}: +${equipment.bonuses[key]}${key === 'speed' || key === 'yield' ? '%' : ''}`
                            ).join(', ')}</div>
                        </div>
                    `;
                }).join('');
                
                return `
                    <div class="mb-3">
                        <h5 class="text-xs font-bold text-white mb-2 flex items-center gap-2">
                            <span>${skillIcon}</span>
                            <span>${skillName} Equipment</span>
                        </h5>
                        <div class="space-y-1">${equipmentItems}</div>
                    </div>
                `;
            }).join('');
            
            return `
                <div>
                    <h3 class="text-lg font-bold text-white mb-4">🛠️ Equipment Management</h3>
                    ${equipmentInventory ? `
                        <div class="mb-4">
                            <h4 class="text-sm font-bold text-white mb-2">Inventory</h4>
                            <div class="space-y-1">${equipmentInventory}</div>
                        </div>
                    ` : ''}
                    <div>
                        <h4 class="text-sm font-bold text-white mb-2">Purchase Equipment by Skill</h4>
                        <div class="space-y-3">${availableEquipment}</div>
                    </div>
                </div>
            `;
        }

        attachViewEventListeners() {
            // Legacy task button (keep for backwards compatibility)
            const addTaskBtn = document.getElementById('add-task-btn'); if (addTaskBtn) { addTaskBtn.addEventListener('click', () => { const category = document.getElementById('task-category-select').value; const difficulty = document.getElementById('task-difficulty-select').value; this.game.completeRealLifeTask(category, difficulty); }); }
            
            // New Homestead task system
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const category = btn.dataset.category;
                    if (!this.game.state.homestead) this.game.state.homestead = {};
                    this.game.state.homestead.selectedCategory = category;
                    this.render();
                });
            });
            
            document.querySelectorAll('.task-card').forEach(card => {
                card.addEventListener('click', () => {
                    try {
                        const task = JSON.parse(card.dataset.task);
                        const category = card.dataset.category;
                        this.game.completeHomesteadTask(task, category);
                    } catch (e) {
                        console.error('Error parsing task data:', e);
                    }
                });
            });

            // Saga system event listeners
            const createSagaBtn = document.getElementById('create-saga-btn');
            if (createSagaBtn) {
                createSagaBtn.addEventListener('click', () => this.showCreateSagaModal());
            }

            document.querySelectorAll('.complete-subquest-btn').forEach(btn => {
                if (!btn.disabled) {
                    btn.addEventListener('click', () => {
                        const sagaId = btn.dataset.sagaId;
                        const subQuestId = btn.dataset.subquestId;
                        this.game.completeSagaSubQuest(sagaId, subQuestId);
                    });
                }
            });

            document.querySelectorAll('.delete-saga-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const sagaId = btn.dataset.sagaId;
                    if (confirm('Are you sure you want to delete this saga? This cannot be undone.')) {
                        this.game.deleteSaga(sagaId);
                    }
                });
            });
            
            // Well of Serenity event listeners
            const startMeditationBtn = document.getElementById('start-meditation-btn');
            if (startMeditationBtn) {
                startMeditationBtn.addEventListener('click', () => {
                    if (this.game.startMeditation()) {
                        this.renderView();
                    }
                });
            }
            
            const stopMeditationBtn = document.getElementById('stop-meditation-btn');
            if (stopMeditationBtn) {
                stopMeditationBtn.addEventListener('click', () => {
                    this.game.stopMeditation();
                    this.renderView();
                });
            }
            
            // Daily Attunement event listeners
            const syncAttunementBtn = document.getElementById('sync-attunement-btn');
            if (syncAttunementBtn) {
                syncAttunementBtn.addEventListener('click', () => {
                    const result = this.game.syncDailyAttunement();
                    if (result.success) {
                        this.showFloatingText('🌱 Wellness data synchronized!', 'text-green-400');
                        this.renderView();
                    } else if (result.reason === 'already_synced') {
                        this.showModal('Already Synchronized', `
                            <div class="text-center">
                                <p class="mb-4">You've already synchronized your wellness data today.</p>
                                <p class="text-secondary text-sm">Return tomorrow for fresh data and new rewards!</p>
                            </div>
                        `);
                    }
                });
            }
            
            const claimAttunementBtn = document.getElementById('claim-attunement-btn');
            if (claimAttunementBtn) {
                claimAttunementBtn.addEventListener('click', () => {
                    const result = this.game.claimAttunementRewards();
                    if (result.success) {
                        const rewards = result.rewards;
                        let modalContent = `
                            <div class="text-center space-y-4">
                                <div class="text-4xl mb-4">🌱</div>
                                <h3 class="text-xl font-bold text-white">Wellness Rewards Claimed!</h3>
                                <p class="text-secondary">Your dedication to self-care has been rewarded.</p>
                                
                                <div class="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500 rounded-lg p-4">
                                    <h4 class="font-bold text-white mb-2">Today's Rewards:</h4>
                                    <div class="text-sm text-secondary space-y-1">
                        `;
                        
                        if (rewards.gold > 0) modalContent += `<div>💰 +${rewards.gold} Gold</div>`;
                        if (rewards.essenceShards > 0) modalContent += `<div>✨ +${rewards.essenceShards} Essence Shards</div>`;
                        if (result.essenceFromShards > 0) modalContent += `<div>🌟 +${result.essenceFromShards} Essence (from shards)</div>`;
                        if (rewards.staminaBonus > 0) modalContent += `<div>⚡ +${rewards.staminaBonus} Max Stamina</div>`;
                        
                        modalContent += `
                                    </div>
                                </div>
                                
                                <p class="text-white">Continue your wellness journey tomorrow for more rewards!</p>
                            </div>
                        `;
                        
                        this.showModal('🌱 Daily Attunement Complete', modalContent, {
                            confirmText: 'Continue Journey',
                            confirmAction: () => {
                                this.hideModal();
                                this.renderView();
                            }
                        });
                    }
                });
            }
            const ge = document.getElementById('goto-empire'); if (ge) ge.addEventListener('click', () => { this.currentView = 'clicker'; this.render(); });
            const gw = document.getElementById('goto-woodcutting'); if (gw) gw.addEventListener('click', () => { this.currentView = 'woodcutting'; this.render(); });
            const gr = document.getElementById('goto-runecrafting'); if (gr) gr.addEventListener('click', () => { this.currentView = 'runecrafting'; this.render(); });
            const gc = document.getElementById('goto-combat'); if (gc) gc.addEventListener('click', () => { this.currentView = 'combat'; this.render(); });
            const gs = document.getElementById('goto-shop'); if (gs) gs.addEventListener('click', () => { this.currentView = 'shop'; this.render(); });
            const gwf = document.getElementById('goto-workforce'); if (gwf) gwf.addEventListener('click', () => { this.currentView = 'workforce'; this.render(); });
            document.querySelectorAll('.start-action-btn').forEach(btn => { btn.addEventListener('click', () => { this.game.startAction(btn.dataset.skillId, btn.dataset.actionId); }); });
            // Stop button event listeners are handled by document-level delegation in setupEventDelegation()
            document.querySelectorAll('.craft-action-btn, .light-action-btn').forEach(btn => { btn.addEventListener('click', () => {
                const s = btn.dataset.skillId; const a = btn.dataset.actionId;
                if (s === 'runecrafting') {
                    const recipe = (GAME_DATA.RECIPES[s] || []).find(r => r.id === a);
                    const essenceId = (recipe && recipe.input && recipe.input[0]) ? recipe.input[0].itemId : 'rune_essence';
                    const essencePer = (recipe && recipe.input && recipe.input[0]) ? recipe.input[0].quantity : 1;
                    const haveEss = this.game.state.bank[essenceId] || 0;
                    const maxQty = Math.floor(haveEss / essencePer);
                    if (maxQty <= 0) return;
                    const qty = parseInt(prompt(`How many essences to craft? (Max ${maxQty})`, `${Math.min(25, maxQty)}`), 10);
                    if (isNaN(qty) || qty <= 0) return;
                    this.game.craftItem(s, a, Math.min(qty, maxQty));
                } else {
                    this.game.craftItem(s, a, 1);
                }
            }); });

            // Bank controls and item interactions
            const bankSearch = document.getElementById('bank-search'); if (bankSearch) {
                const handler = () => { this.bankSearchQuery = bankSearch.value || ''; this.renderView(); };
                bankSearch.addEventListener('input', handler);
                bankSearch.addEventListener('change', handler);
            }
            const bankSort = document.getElementById('bank-sort'); if (bankSort) {
                bankSort.addEventListener('change', () => { this.bankSortMode = bankSort.value; this.renderView(); });
            }
            document.querySelectorAll('.bank-filter-btn').forEach(btn => { btn.addEventListener('click', () => { this.bankFilter = btn.dataset.filter; this.renderView(); }); });
            document.querySelectorAll('.bank-item-card').forEach(card => { card.addEventListener('click', () => this.showItemDetails(card.dataset.itemId)); });
            
            // Army equipment buttons
            document.querySelectorAll('.equip-army-btn').forEach(btn => { 
                btn.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent triggering the card click event
                    const itemId = btn.dataset.itemId;
                    this.game.equipArmyItem(itemId);
                }); 
            });

            // Runecrafting interactive altar handlers
            const altar = document.getElementById('altar-dropzone');
            const essenceToken = document.getElementById('essence-token');
            const qtyInput = document.getElementById('rc-qty');
            const qtyRange = document.getElementById('rc-range');
            const btnMinus = document.getElementById('rc-minus');
            const btnPlus = document.getElementById('rc-plus');
            const craftBtn = document.getElementById('rc-craft-btn');
            const haveEss = (this.game.state.bank['rune_essence'] || 0);
            const selectRecipe = (id) => { document.querySelectorAll('.rc-altar-card').forEach(c => c.classList.toggle('rc-selected', c.dataset.rcRecipeId === id)); if (craftBtn) { craftBtn.dataset.recipeId = id || ''; craftBtn.disabled = !id; } };
            document.querySelectorAll('.rc-altar-card').forEach(card => { card.addEventListener('click', () => selectRecipe(card.dataset.rcRecipeId)); });
            document.querySelectorAll('.rc-altar-card .quick-craft-btn').forEach(btn => { btn.addEventListener('click', (e) => { e.stopPropagation(); const id = btn.dataset.recipeId; const r = (GAME_DATA.RECIPES.runecrafting || []).find(x => x.id === id); if (!r) return; const per = (r.input?.[0]?.quantity || 1); const maxQty = Math.floor((this.game.state.bank['rune_essence'] || 0) / per); if (maxQty <= 0) return; this.game.craftItem('runecrafting', id, Math.min(1, maxQty)); this.render(); }); });
            if (btnMinus) btnMinus.addEventListener('click', () => { const v = Math.max(1, (parseInt(qtyInput.value || '1', 10) - 10)); qtyInput.value = v; if (qtyRange) qtyRange.value = v; });
            if (btnPlus) btnPlus.addEventListener('click', () => { const v = Math.min(haveEss, (parseInt(qtyInput.value || '1', 10) + 10)); qtyInput.value = v; if (qtyRange) qtyRange.value = v; });
            if (qtyInput) qtyInput.addEventListener('change', () => { let v = parseInt(qtyInput.value || '1', 10); if (isNaN(v) || v <= 0) v = 1; v = Math.min(v, haveEss); qtyInput.value = v; if (qtyRange) qtyRange.value = v; });
            if (qtyRange) qtyRange.addEventListener('input', () => { let v = parseInt(qtyRange.value || '1', 10); if (isNaN(v) || v <= 0) v = 1; v = Math.min(v, haveEss); qtyRange.value = v; if (qtyInput) qtyInput.value = v; });
            if (craftBtn) craftBtn.addEventListener('click', () => { const id = craftBtn.dataset.recipeId; if (!id) return; const r = (GAME_DATA.RECIPES.runecrafting || []).find(x => x.id === id); if (!r) return; const per = (r.input?.[0]?.quantity || 1); const maxQty = Math.floor((this.game.state.bank['rune_essence'] || 0) / per); const want = Math.min(maxQty, Math.max(1, parseInt(qtyInput?.value || '1', 10))); if (want <= 0) return; this.game.craftItem('runecrafting', id, want); if (altar) { for (let i = 0; i < Math.min(10, want); i++) { const spark = document.createElement('div'); spark.className = 'rune-spark'; spark.style.setProperty('--sx', `${(Math.random() - 0.5) * 120}px`); spark.style.setProperty('--sy', `${(Math.random() - 0.2) * 40}px`); spark.style.setProperty('--tx', `${(Math.random() - 0.5) * 40}px`); spark.style.setProperty('--ty', `${-140 - Math.random() * 40}px`); altar.appendChild(spark); setTimeout(() => spark.remove(), 950); } } this.render(); });
            if (altar) { altar.addEventListener('dragover', (e) => { e.preventDefault(); altar.style.borderColor = 'rgba(88,166,255,0.6)'; }); altar.addEventListener('dragleave', () => { altar.style.borderColor = 'var(--border-color)'; }); altar.addEventListener('drop', (e) => { e.preventDefault(); altar.style.borderColor = 'var(--border-color)'; const sel = document.querySelector('.rc-altar-card.rc-selected'); if (!sel) { this.game.uiManager.showFloatingText('Select an altar first', 'text-yellow-300'); return; } const id = sel.dataset.rcRecipeId; const r = (GAME_DATA.RECIPES.runecrafting || []).find(x => x.id === id); if (!r) return; const per = (r.input?.[0]?.quantity || 1); const have = (this.game.state.bank['rune_essence'] || 0); const maxQty = Math.floor(have / per); const want = Math.min(maxQty, Math.max(1, parseInt((qtyInput?.value || qtyRange?.value || '1'), 10))); if (want <= 0) return; this.game.craftItem('runecrafting', id, want); for (let i = 0; i < Math.min(10, want); i++) { const spark = document.createElement('div'); spark.className = 'rune-spark'; spark.style.setProperty('--sx', `${(Math.random() - 0.5) * 120}px`); spark.style.setProperty('--sy', `${(Math.random() - 0.2) * 40}px`); spark.style.setProperty('--tx', `${(Math.random() - 0.5) * 40}px`); spark.style.setProperty('--ty', `${-140 - Math.random() * 40}px`); altar.appendChild(spark); setTimeout(() => spark.remove(), 950); } this.render(); }); }
            if (essenceToken) { essenceToken.addEventListener('dragstart', (e) => { e.dataTransfer.setData('text/plain', 'essence'); }); }

            // Expeditions (replacing old combat system)
            document.querySelectorAll('.launch-expedition-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.game.launchExpedition(btn.dataset.expeditionId);
                });
            });

            const cancelExpeditionBtn = document.querySelector('.cancel-expedition-btn');
            if (cancelExpeditionBtn) {
                cancelExpeditionBtn.addEventListener('click', () => {
                    this.game.cancelExpedition();
                });
            }

            // Quick navigation to army from expeditions
            const gotoArmyBtn = document.getElementById('goto-army-from-expeditions');
            if (gotoArmyBtn) {
                gotoArmyBtn.addEventListener('click', () => {
                    this.currentView = 'army';
                    this.render();
                });
            }

            // Legacy combat buttons (for backward compatibility)
            document.querySelectorAll('.start-combat-btn').forEach(btn => { btn.addEventListener('click', () => { this.game.startCombat(btn.dataset.enemyId); this.currentView = 'combat'; this.render(); }); });
            const endBtn = document.getElementById('end-combat-btn'); if (endBtn) endBtn.addEventListener('click', () => this.game.endCombat(false));
            document.querySelectorAll('.eat-food-btn').forEach(btn => { btn.addEventListener('click', () => this.game.eatFood(btn.dataset.itemId)); });
            document.querySelectorAll('.equip-weapon-btn').forEach(btn => { btn.addEventListener('click', () => this.game.equipWeapon(btn.dataset.itemId)); });

            // Empire hiring events
            document.querySelectorAll('.hire-unit-btn').forEach(btn => { btn.addEventListener('click', () => this.game.hireEmpireUnit(btn.dataset.unitId)); });

            // Spells
            document.querySelectorAll('.cast-spell-btn').forEach(btn => { btn.addEventListener('click', () => this.game.castSpell(btn.dataset.spellId)); });
            // Shop
            document.querySelectorAll('.buy-chest-btn').forEach(btn => { btn.addEventListener('click', () => this.game.buyChest(btn.dataset.chestId)); });
            
            // General store item purchase
            document.querySelectorAll('.buy-item-btn').forEach(btn => { 
                btn.addEventListener('click', () => this.game.buyShopItem(btn.dataset.itemId, parseInt(btn.dataset.itemCost))); 
            });
            
            // Essence Shop - Ascension Upgrades
            document.querySelectorAll('.buy-ascension-upgrade-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const upgradeId = btn.dataset.upgradeId;
                    const cost = parseInt(btn.dataset.cost);
                    this.game.purchaseAscensionUpgrade(upgradeId, cost);
                });
            });
            // Army
            document.querySelectorAll('.hire-army-btn').forEach(btn => { btn.addEventListener('click', () => this.game.hireArmyUnit(btn.dataset.unitId)); });
            const rallyBtn = document.getElementById('rally-army-btn'); if (rallyBtn) rallyBtn.addEventListener('click', () => this.game.rallyArmy());
            document.querySelectorAll('.feed-army-btn').forEach(btn => { btn.addEventListener('click', () => this.game.feedArmy(btn.dataset.itemId)); });
            document.querySelectorAll('.supply-army-potion-btn').forEach(btn => { btn.addEventListener('click', () => this.game.supplyArmyPotion(btn.dataset.itemId)); });
            
            // Army equipment unequip buttons
            document.querySelectorAll('.unequip-army-btn').forEach(btn => { 
                btn.addEventListener('click', () => {
                    const equipmentType = btn.dataset.equipmentType;
                    this.game.unequipArmyItem(equipmentType);
                }); 
            });
            
            // Bank item action buttons
            document.querySelectorAll('.eat-food-btn').forEach(btn => { 
                btn.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent triggering the card click event
                    const itemId = btn.dataset.itemId;
                    this.game.eatFood(itemId);
                }); 
            });
            
            document.querySelectorAll('.use-rune-btn').forEach(btn => { 
                btn.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent triggering the card click event
                    const itemId = btn.dataset.itemId;
                    this.game.useRune(itemId);
                }); 
            });
            
            document.querySelectorAll('.cast-spell-btn').forEach(btn => { 
                btn.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent triggering the card click event
                    const itemId = btn.dataset.itemId;
                    this.game.castSpell(itemId);
                }); 
            });
            
            document.querySelectorAll('.open-chest-btn').forEach(btn => { 
                btn.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent triggering the card click event
                    const itemId = btn.dataset.itemId;
                    this.game.openChest(itemId);
                }); 
            });
            
            document.querySelectorAll('.activate-glyph-btn').forEach(btn => { 
                btn.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent triggering the card click event
                    const itemId = btn.dataset.itemId;
                    this.game.activateGlyph(itemId);
                }); 
            });
            
            // Artisan skill recipe selection
            document.querySelectorAll('.recipe-item').forEach(item => {
                item.addEventListener('click', () => {
                    const recipeId = item.dataset.recipeId;
                    const skillId = item.dataset.skillId;
                    this.game.state.selectedRecipe[skillId] = recipeId;
                    this.renderView();
                });
            });
            
            // Artisan skill crafting buttons
            const startCraftBtn = document.getElementById('start-craft-btn');
            if (startCraftBtn) {
                startCraftBtn.addEventListener('click', () => {
                    const recipeId = startCraftBtn.dataset.recipeId;
                    const skillId = startCraftBtn.dataset.skillId;
                    // Always craft 1 item at a time for artisan skills
                    this.game.startArtisanCrafting(skillId, recipeId, 1);
                });
            }
            

            
            // Stop crafting button
            const stopCraftBtn = document.getElementById('stop-craft-btn');
            if (stopCraftBtn) {
                stopCraftBtn.addEventListener('click', () => {
                    const skillId = stopCraftBtn.dataset.skillId;
                    this.game.stopArtisanCrafting(skillId);
                });
            }
            
            const resetBtn = document.getElementById('reset-save'); if (resetBtn) resetBtn.addEventListener('click', () => this.game.resetSave());

            // Workers - generic per skill
            document.querySelectorAll('.hire-worker-btn').forEach(btn => { btn.addEventListener('click', () => this.game.hireWorker(btn.dataset.skillId)); });
            document.querySelectorAll('.upgrade-worker-btn').forEach(btn => { btn.addEventListener('click', () => this.game.upgradeWorkers(btn.dataset.skillId, btn.dataset.type)); });
            document.querySelectorAll('.assign-worker-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const skillId = btn.dataset.skillId; const id = btn.dataset.actionId; const dir = btn.dataset.dir;
                    const ws = this.game.state.workers[skillId];
                    const sumAssigned = Object.values(ws.assigned).reduce((a,b)=>a+b,0);
                    if (dir === '+1') {
                        if (sumAssigned < ws.total) { ws.assigned[id] = (ws.assigned[id] || 0) + 1; this.renderView(); }
                    } else {
                        if ((ws.assigned[id] || 0) > 0) { ws.assigned[id] -= 1; this.renderView(); }
                    }
                });
            });
            
            // Tool equipment event listeners
            document.querySelectorAll('.equip-tool-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const skillId = btn.dataset.skillId;
                    const toolId = btn.dataset.toolId;
                    this.game.equipWorkerTool(skillId, toolId);
                });
            });
            
            document.querySelectorAll('.unequip-tool-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const skillId = btn.dataset.skillId;
                    const toolId = btn.dataset.toolId;
                    this.game.unequipWorkerTool(skillId, toolId);
                });
            });

            // Enhanced Empire Management Event Listeners
            
            // Ascension system event listeners
            const ascendBtn = document.getElementById('ascend-btn');
            if (ascendBtn) {
                ascendBtn.addEventListener('click', () => {
                    this.showAscensionConfirmation();
                });
            }
            
            // Header ascension button
            const headerAscendBtn = document.getElementById('header-ascend-btn');
            if (headerAscendBtn) {
                headerAscendBtn.addEventListener('click', () => {
                    this.showAscensionConfirmation();
                });
            }
            
            // Sidebar ascension button
            const sidebarAscendBtn = document.getElementById('sidebar-ascend-btn');
            if (sidebarAscendBtn) {
                sidebarAscendBtn.addEventListener('click', () => {
                    this.showAscensionConfirmation();
                });
            }
            
            // Homestead ascension button
            const homesteadAscendBtn = document.getElementById('homestead-ascend-btn');
            if (homesteadAscendBtn) {
                homesteadAscendBtn.addEventListener('click', () => {
                    this.showAscensionConfirmation();
                });
            }
            
            // Facility management
            document.querySelectorAll('.build-facility-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    if (this.game.buildFacility(btn.dataset.facilityId)) {
                        this.renderView();
                    }
                });
            });
            
            // Equipment purchasing
            document.querySelectorAll('.buy-equipment-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const equipmentId = btn.dataset.equipmentId;
                    const cost = parseInt(btn.dataset.cost);
                    if (this.game.purchaseWorkerEquipment(equipmentId, 10)) { // Buy 10 at a time
                        this.renderView();
                    }
                });
            });
            
            // Bulk equipment assignment
            document.querySelectorAll('.bulk-assign-equipment-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const equipmentId = btn.dataset.equipmentId;
                    const equipment = this.game.getEquipmentData(equipmentId);
                    const available = this.game.state.empire.equipment.inventory[equipmentId] || 0;
                    
                    if (available > 0 && equipment) {
                        // Auto-assign to compatible worker types
                        let assigned = 0;
                        Object.keys(this.game.state.workers).forEach(skillId => {
                            if (equipment.compatibleSkills === 'all' || equipment.compatibleSkills.includes(skillId)) {
                                const unequipped = this.game.getUnequippedWorkerCount(skillId);
                                const toAssign = Math.min(unequipped, available - assigned);
                                if (toAssign > 0) {
                                    this.game.equipWorkers(skillId, equipmentId, toAssign);
                                    assigned += toAssign;
                                }
                            }
                        });
                        
                        if (assigned > 0) {
                            this.showFloatingText(`Auto-assigned ${assigned} ${equipment.name}`, 'text-blue-300');
                            this.renderView();
                        } else {
                            this.showFloatingText('No workers need this equipment', 'text-yellow-400');
                        }
                    }
                });
            });
            
            // Auto-equip workers
            document.querySelectorAll('.bulk-equip-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const skillId = btn.dataset.skillId;
                    this.game.bulkEquipWorkers(skillId);
                    this.showFloatingText(`Auto-equipped ${skillId} workers`, 'text-green-300');
                    this.renderView();
                });
            });
        }

        showModal(title, content, options = {}) {
            let buttonsHtml = '';
            
            if (options.confirmAction && options.cancelAction) {
                // Confirmation modal with two buttons
                buttonsHtml = `
                    <div class="flex gap-3 justify-end mt-6">
                        <button class="cancel-btn chimera-button px-4 py-2 rounded-md bg-slate-600 hover:bg-slate-700">Cancel</button>
                        <button class="confirm-btn chimera-button px-4 py-2 rounded-md bg-red-600 hover:bg-red-700">${options.confirmText || 'Confirm'}</button>
                    </div>
                `;
            } else {
                // Standard modal with close button
                buttonsHtml = `
                    <div class="text-right mt-6">
                        <button class="close-btn chimera-button px-4 py-2 rounded-md">Close</button>
                    </div>
                `;
            }
            
            const html = `<h3 class="text-xl font-bold text-white">${title}</h3><div class="text-secondary my-4">${content}</div>${buttonsHtml}`;
            this.modalContent.innerHTML = html;
            
            // Add event listeners
            const closeBtn = this.modalContent.querySelector('.close-btn');
            const cancelBtn = this.modalContent.querySelector('.cancel-btn');
            const confirmBtn = this.modalContent.querySelector('.confirm-btn');
            
            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.hideModal());
            }
            
            if (cancelBtn) {
                cancelBtn.addEventListener('click', () => this.hideModal());
            }
            
            if (confirmBtn && options.confirmAction) {
                confirmBtn.addEventListener('click', () => {
                    options.confirmAction();
                    this.hideModal();
                });
            }
            
            this.modalBackdrop.classList.remove('hidden');
        }
        hideModal() { this.modalBackdrop.classList.add('hidden'); }

        showCreateSagaModal() {
            const modalContent = `
                <div class="p-6 max-w-2xl mx-auto">
                    <h2 class="text-2xl font-bold text-purple-300 mb-4">📜 Create New Saga</h2>
                    <p class="text-secondary text-sm mb-6">Transform your big real-life goal into an epic quest with 3-5 sub-quests. Think of major milestones or chapters in your journey.</p>
                    
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-bold mb-2">Saga Title *</label>
                            <input type="text" id="saga-title" placeholder="e.g., The Great Thesis Writing Saga" 
                                   class="w-full p-3 rounded bg-slate-700 text-white border border-slate-600 focus:border-purple-400 focus:outline-none">
                            <p class="text-xs text-secondary mt-1">Make it epic and memorable!</p>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-bold mb-2">Description</label>
                            <textarea id="saga-description" placeholder="Describe your real-life goal and what completing this saga means to you..." 
                                      class="w-full p-3 rounded bg-slate-700 text-white border border-slate-600 focus:border-purple-400 focus:outline-none h-20"></textarea>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-bold mb-2">Sub-Quests (3-5 major steps) *</label>
                            <div id="subquest-container" class="space-y-2">
                                <input type="text" class="subquest-input w-full p-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-purple-400 focus:outline-none" placeholder="1. First major milestone...">
                                <input type="text" class="subquest-input w-full p-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-purple-400 focus:outline-none" placeholder="2. Second major milestone...">
                                <input type="text" class="subquest-input w-full p-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-purple-400 focus:outline-none" placeholder="3. Third major milestone...">
                            </div>
                            <div class="flex gap-2 mt-2">
                                <button id="add-subquest-btn" class="text-purple-300 hover:text-purple-200 text-sm">+ Add Sub-Quest</button>
                                <span class="text-secondary text-xs">• Keep it to 3-5 major steps</span>
                            </div>
                        </div>
                        
                        <div class="bg-purple-900/20 border border-purple-600/30 rounded-lg p-4">
                            <h3 class="text-sm font-bold text-purple-300 mb-2">💡 Saga Creation Tips</h3>
                            <ul class="text-xs text-secondary space-y-1">
                                <li>• Break big goals into logical phases or chapters</li>
                                <li>• Each sub-quest should be a significant milestone</li>
                                <li>• Think about dependencies: what needs to happen first?</li>
                                <li>• Keep sub-quests specific but not too detailed</li>
                            </ul>
                        </div>
                        
                        <div class="flex gap-3 pt-4">
                            <button id="create-saga-confirm-btn" class="chimera-button px-6 py-2 rounded bg-purple-600 hover:bg-purple-700 flex-grow">
                                Create Saga
                            </button>
                            <button id="cancel-saga-btn" class="chimera-button px-6 py-2 rounded bg-slate-600 hover:bg-slate-700">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            this.showModal('Create New Saga', modalContent);
            
            // Add modal-specific event listeners
            const addSubQuestBtn = document.getElementById('add-subquest-btn');
            const container = document.getElementById('subquest-container');
            const createBtn = document.getElementById('create-saga-confirm-btn');
            const cancelBtn = document.getElementById('cancel-saga-btn');
            
            addSubQuestBtn?.addEventListener('click', () => {
                const inputs = container.querySelectorAll('.subquest-input');
                if (inputs.length < 5) {
                    const newInput = document.createElement('input');
                    newInput.type = 'text';
                    newInput.className = 'subquest-input w-full p-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-purple-400 focus:outline-none';
                    newInput.placeholder = `${inputs.length + 1}. Another milestone...`;
                    container.appendChild(newInput);
                }
            });
            
            createBtn?.addEventListener('click', () => {
                const title = document.getElementById('saga-title')?.value?.trim();
                const description = document.getElementById('saga-description')?.value?.trim();
                const subQuestInputs = document.querySelectorAll('.subquest-input');
                const subQuests = Array.from(subQuestInputs)
                    .map(input => input.value.trim())
                    .filter(value => value.length > 0)
                    .map(title => ({ title }));
                
                if (!title) {
                    alert('Please enter a saga title.');
                    return;
                }
                
                if (subQuests.length < 3) {
                    alert('Please enter at least 3 sub-quests.');
                    return;
                }
                
                this.game.createSaga(title, description || '', subQuests);
                this.hideModal();
            });
            
            cancelBtn?.addEventListener('click', () => {
                this.hideModal();
            });
        }

        showFloatingText(text, className, options = {}) {
            if (!this._fly) { this._fly = { nextLane: 0, maxLanes: 12, laneHeight: 28 }; }
            const detectType = (t, cls = '') => {
                const lower = (t || '').toLowerCase(); const c = cls || '';
                if (lower.includes('level up')) return 'fly-level';
                if (lower.includes('activated')) return 'fly-buff';
                if (lower.includes('stamina') || lower.includes('hp') || c.includes('green')) return 'fly-heal';
                if (lower.startsWith('-') || c.includes('red')) return 'fly-damage';
                if (lower.includes('crafted') || lower.includes('+1 ') || c.includes('yellow')) return 'fly-loot';
                if (lower.includes('xp')) return 'fly-xp';
                return '';
            };
            const typeClass = detectType(text, className);

            const floatText = document.createElement('div');
            floatText.className = `floating-text ${typeClass} ${className || ''}`.trim();
            floatText.textContent = text;

            const gameRect = this.floatingTextContainer.getBoundingClientRect();
            const baseX = gameRect.width / 2;
            const baseY = gameRect.height / 3;

            const lane = this._fly.nextLane; this._fly.nextLane = (this._fly.nextLane + 1) % this._fly.maxLanes;
            const jitterX = (Math.random() - 0.5) * 80; // -40..+40
            const y = baseY - lane * this._fly.laneHeight;

            floatText.style.left = `${baseX + jitterX}px`;
            floatText.style.top = `${y}px`;

            this.floatingTextContainer.appendChild(floatText);
            const duration = typeClass === 'fly-crit' || typeClass === 'fly-level' ? 1900 : (typeClass === 'fly-loot' ? 1800 : 1600);
            setTimeout(() => floatText.remove(), duration);
        }

        // Dopamine helpers
        pulseAt(el) {
            if (!el) return; el.classList.remove('pulse-pop'); void el.offsetWidth; el.classList.add('pulse-pop');
            setTimeout(() => el && el.classList && el.classList.remove('pulse-pop'), 260);
        }
        _ensureAudio() {
            if (!this._audioCtx) {
                const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return null; this._audioCtx = new AC();
            }
            return this._audioCtx;
        }
        playSound(type) {
            const ctx = this._ensureAudio(); if (!ctx) return;
            const now = ctx.currentTime; const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.type = 'triangle';
            if (type === 'hire') { osc.frequency.setValueAtTime(740, now); osc.frequency.exponentialRampToValueAtTime(1180, now + 0.18); }
            else if (type === 'upgrade') { osc.frequency.setValueAtTime(520, now); osc.frequency.exponentialRampToValueAtTime(1040, now + 0.22); }
            else { osc.frequency.setValueAtTime(660, now); osc.frequency.exponentialRampToValueAtTime(770, now + 0.08); }
            gain.gain.setValueAtTime(0.0001, now);
            gain.gain.exponentialRampToValueAtTime(0.12, now + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(now); osc.stop(now + 0.26);
        }
        juiceBurst(kind, clientX, clientY) {
            const containerRect = this.floatingTextContainer.getBoundingClientRect();
            const x = clientX - containerRect.left; const y = clientY - containerRect.top;
            const colors = kind === 'upgrade' ? ['#ffd166','#fca311','#ffe08a','#fff3c4'] : (kind === 'wood' ? ['#b08968','#7f5539','#ddb892','#e6ccb2'] : ['#ffd166','#ffd700','#fff3b0','#f1fa8c']);
            const count = kind === 'upgrade' ? 24 : 18;
            for (let i = 0; i < count; i++) {
                const p = document.createElement('div'); p.className = 'confetti-piece'; p.style.left = `${x}px`; p.style.top = `${y}px`;
                p.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
                const dx = (Math.random() - 0.5) * 180; const dy = - (Math.random() * 160 + 80); const rot = (Math.random() - 0.5) * 260;
                p.style.opacity = '1'; p.style.transform = `translate3d(-50%, -50%, 0) rotate(${rot}deg)`;
                this.floatingTextContainer.appendChild(p);
                requestAnimationFrame(() => { p.style.transition = 'transform 900ms cubic-bezier(.15,.55,.2,1), opacity 900ms ease'; p.style.transform = `translate3d(${dx}px, ${dy}px, 0) rotate(${rot+180}deg)`; p.style.opacity = '0'; });
                setTimeout(() => p.remove(), 950);
            }
            for (let i = 0; i < 6; i++) {
                const c = document.createElement('div'); c.className = 'coin-piece'; c.textContent = kind === 'wood' ? '🪵' : '💰'; c.style.left = `${x}px`; c.style.top = `${y}px`;
                this.floatingTextContainer.appendChild(c);
                const dx = (Math.random() - 0.5) * 120; const dy = - (Math.random() * 120 + 40);
                requestAnimationFrame(() => { c.style.transition = 'transform 800ms cubic-bezier(.17,.67,.32,1.31), opacity 800ms ease'; c.style.opacity = '1'; c.style.transform = `translate(${dx}px, ${dy}px) scale(0.9)`; });
                setTimeout(() => { c.style.opacity = '0'; }, 620); setTimeout(() => c.remove(), 900);
            }
        }

        renderWorkerPanel(skillId) {
            const ws = this.game.state.workers[skillId]; const hireCost = this.game.getHireCost(skillId); const speedCost = this.game.getUpgradeCost(skillId, 'speed'); const yieldCost = this.game.getUpgradeCost(skillId, 'yield'); const speedLvl = ws.upgrades.speedLevel; const yieldLvl = ws.upgrades.yieldLevel; const theme = GAME_DATA.SKILLS[skillId].theme;
            if (skillId === 'woodcutting') {
                const assigned = Object.values(ws.assigned || {}).reduce((a,b)=>a+b,0); const free = Math.max(0, (ws.total||0) - assigned);
                return `
                    <div class="block p-0 mb-5 border border-woodcutting overflow-hidden medieval-glow gradient-wood">
                        <div class="relative p-5 pb-4">
                            <div class="absolute right-4 -top-3 text-4xl opacity-20 select-none">🪓</div>
                            <div class="flex items-center gap-3">
                                <div class="text-2xl">🏕️</div>
                                <div>
                                    <h2 class="text-xl font-extrabold tracking-wide">Timber Lodge</h2>
                                    <p class="text-secondary text-sm">Command your timberhands. Assign, upgrade, and prosper.</p>
                                </div>
                            </div>
                            <div class="grid grid-cols-3 gap-3 mt-4">
                                <div class="glass-card rounded-md p-3 text-center shine">
                                    <div class="text-[11px] text-secondary uppercase tracking-wider">Workers</div>
                                    <div class="text-2xl font-mono text-white">${ws.total}</div>
                                </div>
                                <div class="glass-card rounded-md p-3 text-center">
                                    <div class="text-[11px] text-secondary uppercase tracking-wider">Assigned</div>
                                    <div class="text-xl font-mono text-white">${assigned}</div>
                                </div>
                                <div class="glass-card rounded-md p-3 text-center">
                                    <div class="text-[11px] text-secondary uppercase tracking-wider">Free</div>
                                    <div class="text-xl font-mono text-green-300">${free}</div>
                                </div>
                            </div>
                            <div class="flex flex-col sm:flex-row gap-2 mt-4">
                                <button class="hire-worker-btn chimera-button juicy-button px-3 py-3 rounded-md font-semibold" data-skill-id="woodcutting"><span class="mr-1">🪵</span> Hire Timberhand — <span class="text-yellow-300 font-mono">${hireCost}g</span></button>
                                <button class="upgrade-worker-btn chimera-button juicy-button px-3 py-3 rounded-md font-semibold" data-skill-id="woodcutting" data-type="speed"><span class="mr-1">🪓</span> Upgrade Axes <span class="text-secondary ml-1">(L${speedLvl})</span> — <span class="text-yellow-300 font-mono">${speedCost}g</span></button>
                                <button class="upgrade-worker-btn chimera-button juicy-button px-3 py-3 rounded-md font-semibold" data-skill-id="woodcutting" data-type="yield"><span class="mr-1">🛷</span> Lumber Sleds <span class="text-secondary ml-1">(L${yieldLvl})</span> — <span class="text-yellow-300 font-mono">${yieldCost}g</span></button>
                            </div>
                            <p class="text-[11px] text-secondary mt-2">Current bonuses: <span class="text-green-300">+${(yieldLvl*10).toFixed(0)}% yield</span> • <span class="text-blue-300">${Math.round(100 - (Math.pow(0.92, speedLvl)*100))}% faster</span></p>
                        </div>
                    </div>
                `;
            }
            // Themed panels for other gathering skills
            const skill = GAME_DATA.SKILLS[skillId];
            const assigned = Object.values(ws.assigned || {}).reduce((a,b)=>a+b,0);
            const free = Math.max(0, (ws.total||0) - assigned);
            const icon = skill.icon;
            const headerMeta = {
                mining: { title: 'Mining Camp', emoji: '⛏️', worker: 'Miner' },
                fishing: { title: 'Fishing Harbor', emoji: '🎣', worker: 'Angler' },
                farming: { title: 'Farming Estate', emoji: '🚜', worker: 'Farmhand' },
                hunter: { title: "Trapper's Outpost", emoji: '🪤', worker: 'Trapper' },
                archaeology: { title: 'Ancient Digsite', emoji: '🏺', worker: 'Excavator' },
                divination: { title: "Diviner's Grove", emoji: '🔮', worker: 'Diviner' },
                smithing: { title: 'Blacksmith Forge', emoji: '⚒️', worker: 'Blacksmith' },
                woodworking: { title: 'Carpenter Workshop', emoji: '🪵', worker: 'Carpenter' },
                runecrafting: { title: 'Runic Atelier', emoji: '🔮', worker: 'Runecrafter' },
            };
            if (headerMeta[skillId]) {
                const meta = headerMeta[skillId];
                return `
                    <div class="block p-0 mb-5 border border-${theme} overflow-hidden medieval-glow gradient-workforce">
                        <div class="relative p-5 pb-4">
                            <div class="absolute right-4 -top-3 text-4xl opacity-20 select-none">${meta.emoji}</div>
                            <div class="flex items-center gap-3">
                                <div class="text-2xl">${icon}</div>
                                <div>
                                    <h2 class="text-xl font-extrabold tracking-wide">${meta.title}</h2>
                                    <p class="text-secondary text-sm">Command your ${meta.worker.toLowerCase()}s. Assign, upgrade, and prosper.</p>
                                </div>
                            </div>
                            <div class="grid grid-cols-3 gap-3 mt-4">
                                <div class="glass-card rounded-md p-3 text-center shine">
                                    <div class="text-[11px] text-secondary uppercase tracking-wider">Workers</div>
                                    <div class="text-2xl font-mono text-white">${ws.total}</div>
                                </div>
                                <div class="glass-card rounded-md p-3 text-center">
                                    <div class="text-[11px] text-secondary uppercase tracking-wider">Assigned</div>
                                    <div class="text-xl font-mono text-white">${assigned}</div>
                                </div>
                                <div class="glass-card rounded-md p-3 text-center">
                                    <div class="text-[11px] text-secondary uppercase tracking-wider">Free</div>
                                    <div class="text-xl font-mono text-green-300">${free}</div>
                                </div>
                            </div>
                            <div class="flex flex-col sm:flex-row gap-2 mt-4">
                                <button class="hire-worker-btn chimera-button juicy-button px-3 py-3 rounded-md font-semibold" data-skill-id="${skillId}"><span class="mr-1">👷</span> Hire ${meta.worker} — <span class="text-yellow-300 font-mono">${hireCost}g</span></button>
                                <button class="upgrade-worker-btn chimera-button juicy-button px-3 py-3 rounded-md font-semibold" data-skill-id="${skillId}" data-type="speed"><span class="mr-1">⚙️</span> Speed <span class="text-secondary ml-1">(L${speedLvl||0})</span> — <span class="text-yellow-300 font-mono">${speedCost}g</span></button>
                                <button class="upgrade-worker-btn chimera-button juicy-button px-3 py-3 rounded-md font-semibold" data-skill-id="${skillId}" data-type="yield"><span class="mr-1">📦</span> Yield <span class="text-secondary ml-1">(L${yieldLvl||0})</span> — <span class="text-yellow-300 font-mono">${yieldCost}g</span></button>
                            </div>
                            <p class="text-[11px] text-secondary mt-2">Current bonuses: <span class="text-green-300">+${((yieldLvl||0)*10).toFixed(0)}% yield</span> • <span class="text-blue-300">${Math.round(100 - (Math.pow(0.92, (speedLvl||0))*100))}% faster</span></p>
                        </div>
                    </div>
                `;
            }
            // Fallback generic panel for other gathering skills
            return `
                <div class="block p-4 mb-4 border border-${theme}">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <div>
                            <h2 class="text-lg font-bold">Work Camp</h2>
                            <p class="text-secondary text-sm">Workers operate in the background. Assign them to tasks.</p>
                            <p class="text-white text-sm mt-1">Workers: <span class="font-bold">${ws.total}</span></p>
                        </div>
                        <div class="flex flex-col sm:flex-row gap-2">
                            <button class="hire-worker-btn chimera-button px-3 py-2 rounded-md" data-skill-id="${skillId}">Hire Worker — Cost: ${hireCost} gold</button>
                            <button class="upgrade-worker-btn chimera-button px-3 py-2 rounded-md" data-skill-id="${skillId}" data-type="speed">Upgrade Tools (Speed L${speedLvl}) — Cost: ${speedCost} gold</button>
                            <button class="upgrade-worker-btn chimera-button px-3 py-2 rounded-md" data-skill-id="${skillId}" data-type="yield">Logistics (Yield L${yieldLvl}) — Cost: ${yieldCost} gold</button>
                        </div>
                    </div>
                </div>
            `;
        }

        renderWorkerAssign(skillId, action) {
            const ws = this.game.state.workers[skillId]; const assigned = ws.assigned[action.id] || 0; const total = ws.total; const sumAssigned = Object.values(ws.assigned).reduce((a,b)=>a+b,0); const free = Math.max(0, total - sumAssigned); const speedMult = this.game.getWorkerSpeedMultiplier(skillId, action); const yieldMult = this.game.getWorkerYieldMultiplier(skillId, action);
            const NAMES = { woodcutting: { worker: 'Timberhands' }, mining: { worker: 'Miners' }, fishing: { worker: 'Anglers' }, farming: { worker: 'Farmhands' }, hunter: { worker: 'Trappers' }, archaeology: { worker: 'Excavators' }, divination: { worker: 'Diviners' }, smithing: { worker: 'Blacksmiths' }, woodworking: { worker: 'Carpenters' }, runecrafting: { worker: 'Runecrafters' }, };
            const workerName = (NAMES[skillId] || { worker: 'Workers' }).worker;
            return `
                <div class="mt-3 p-2 rounded-md bg-black/30 border border-border-color">
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-secondary">${workerName} Assigned: <span class="text-white font-mono">${assigned}</span> / Free: <span class="text-white font-mono">${free}</span></span>
                        <div class="space-x-1">
                            <button class="assign-worker-btn chimera-button juicy-button px-2 py-1 rounded" data-skill-id="${skillId}" data-action-id="${action.id}" data-dir="-1">-</button>
                            <button class="assign-worker-btn chimera-button juicy-button px-2 py-1 rounded" data-skill-id="${skillId}" data-action-id="${action.id}" data-dir="+1">+</button>
                        </div>
                    </div>
                    <p class="text-[11px] text-secondary mt-1">Eff: x${yieldMult.toFixed(2)} yield, ${Math.round(100 - speedMult*100)}% faster</p>
                </div>
            `;
        }

        // Notification stack (top-right)
        initNotify() {
            if (this._notify) return; this._notify = { map: {}, timers: {} };
            this._notify.stack = document.getElementById('top-notification-stack');
        }
        createOrUpdateNotification(key, options) {
            this.initNotify();
            const stack = this._notify.stack; if (!stack) return;
            const ttlMs = 3500; // Longer timeout for better visibility of batched notifications
            const existing = this._notify.map[key];
            if (existing) {
                existing.total += options.increment || 0;
                const countEl = existing.el.querySelector('.count');
                if (countEl) countEl.textContent = `+${existing.total.toLocaleString()}`;
                existing.el.classList.remove('notify-pulse');
                void existing.el.offsetWidth;
                existing.el.classList.add('notify-pulse');
                clearTimeout(this._notify.timers[key]);
                this._notify.timers[key] = setTimeout(() => this.removeNotification(key), ttlMs);
                return existing.el;
            }
            const card = document.createElement('div');
            card.className = `notify-card ${options.kind || ''}`.trim();
            const icon = document.createElement('div'); icon.className = 'notify-icon'; icon.innerHTML = options.icon || '';
            const count = document.createElement('div'); count.className = 'count'; count.textContent = `+${(options.increment||0).toLocaleString()}`;
            const label = document.createElement('div'); label.className = 'label'; label.innerHTML = options.label || '';
            card.appendChild(icon); card.appendChild(count); card.appendChild(label);
            stack.prepend(card);
            this._notify.map[key] = { el: card, total: options.increment || 0 };
            this._notify.timers[key] = setTimeout(() => this.removeNotification(key), ttlMs);
            return card;
        }
        removeNotification(key) {
            if (!this._notify || !this._notify.map[key]) return;
            const el = this._notify.map[key].el; el.classList.add('notify-out');
            setTimeout(() => { el.remove(); }, 220);
            clearTimeout(this._notify.timers[key]);
            delete this._notify.timers[key];
            delete this._notify.map[key];
        }
        notifyResource(type, amount) {
            if (!amount || amount <= 0) return;
            const icons = { gold: '<i class="fas fa-coins text-yellow-300"></i>', runes: '<i class="fas fa-gem text-purple-300"></i>', stamina: '<i class="fas fa-bolt text-green-400"></i>' };
            const labels = { gold: 'Gold', runes: 'Runes', stamina: 'Stamina' };
            const key = `res:${type}`;
            this.createOrUpdateNotification(key, { increment: amount, icon: icons[type] || '', label: labels[type] || type, kind: type });
        }
        notifyItem(itemId, qty) {
            if (!qty || qty <= 0) return;
            const item = GAME_DATA.ITEMS[itemId];
            const name = item?.name || itemId; const icon = item?.icon || '❔';
            const key = `item:${itemId}`;
            this.createOrUpdateNotification(key, { increment: qty, icon: icon, label: name, kind: 'item' });
        }

        // Helper: categorize items for filtering and styling
        getItemCategory(itemId) {
            if (!itemId) return 'materials';
            if (itemId === 'rune_essence' || itemId.endsWith('_rune')) return 'runes';
            const item = GAME_DATA.ITEMS[itemId] || {};
            if (typeof item.heals === 'number' && item.heals > 0) return 'food';
            if (typeof item.damage === 'number' && item.damage > 0) return 'weapons';
            if (item.type === 'weapon' || item.type === 'armor' || item.type === 'ammunition') return 'weapons';
            if (item.type === 'spell') return 'spells';
            if (item.type === 'chest') return 'chests';
            if (item.type === 'glyph') return 'glyphs';
            if (itemId.startsWith('glyph_') || itemId.includes('Glyph')) return 'glyphs';
            return 'materials';
        }

        // Helper: build tooltip HTML for items
        getItemTooltipHTML(itemId, quantity) {
            const item = GAME_DATA.ITEMS[itemId] || { name: 'Unknown', icon: '❔' };
            const lines = [];
            const category = this.getItemCategory(itemId);
            if (item.heals) lines.push(`Restores <span class="text-green-300 font-mono">${item.heals}</span> HP`);
            if (item.damage) lines.push(`Weapon Damage: <span class="text-red-300 font-mono">${item.damage}</span>`);
            if (item.dps_bonus) lines.push(`Army DPS Bonus: <span class="text-red-300 font-mono">+${item.dps_bonus}</span>`);
            if (item.hp_bonus) lines.push(`Army HP Bonus: <span class="text-blue-300 font-mono">+${item.hp_bonus}</span>`);
            if (itemId === 'rune_essence') lines.push('Material for Runecrafting');
            if (itemId.endsWith('_rune')) lines.push('Consumed when casting spells');
            // Count recipes using this item
            const uses = this.findRecipesUsing(itemId);
            if (uses.length > 0) {
                const uniqueSkills = [...new Set(uses.map(u => u.skillId))];
                lines.push(`Used in: ${uniqueSkills.map(s => `<span class="text-blue-300">${s}</span>`).join(', ')}`);
            }
            return `
                <div class="text-left">
                    <div class="flex items-center gap-2 mb-1"><span class="text-lg">${item.icon || '❔'}</span><span class="font-semibold text-white">${item.name}</span></div>
                    <div class="text-xs text-secondary">Category: <span class="uppercase">${category}</span> • Owned: <span class="text-white font-mono">${(quantity||0).toLocaleString()}</span></div>
                    ${lines.length ? `<div class="mt-1 text-xs space-y-0.5">${lines.map(l => `<div>${l}</div>`).join('')}</div>` : ''}
                </div>`;
        }

        // Helper: find recipes that consume the given item
        findRecipesUsing(itemId) {
            const matches = [];
            Object.keys(GAME_DATA.RECIPES || {}).forEach(skillId => {
                (GAME_DATA.RECIPES[skillId] || []).forEach(r => {
                    const used = (r.input || []).some(inp => inp.itemId === itemId);
                    if (used) matches.push({ skillId, recipe: r });
                });
            });
            return matches;
        }

        // Modal: show detailed item view with actions
        showItemDetails(itemId) {
            const qty = this.game.state.bank[itemId] || 0; const item = GAME_DATA.ITEMS[itemId] || { name:'Unknown', icon:'❔' };
            const category = this.getItemCategory(itemId);
            const recipes = this.findRecipesUsing(itemId);
            const hasFoodAction = !!item.heals;
            const hasEquipAction = !!item.damage;
            const hasRunecraftingNav = (itemId === 'rune_essence' || itemId.endsWith('_rune'));

            const recipeList = recipes.slice(0, 6).map(({skillId, recipe}) => {
                const canAfford = (recipe.input || []).every(inp => (this.game.state.bank[inp.itemId] || 0) >= inp.quantity);
                const outItem = GAME_DATA.ITEMS[recipe.output?.itemId] || {};
                return `
                    <div class="flex items-center justify-between gap-2 p-2 rounded border border-border-color">
                        <div class="text-xs">
                            <div class="text-white">${recipe.name} <span class="text-secondary">(${skillId})</span></div>
                            <div class="text-secondary">→ ${outItem.icon || ''} ${outItem.name || ''}</div>
                        </div>
                        <div class="flex gap-2">
                            <button class="goto-skill-btn chimera-button px-2 py-1 rounded-md text-xs" data-skill-id="${skillId}">Open</button>
                            <button class="quick-craft-btn chimera-button px-2 py-1 rounded-md text-xs" data-skill-id="${skillId}" data-recipe-id="${recipe.id}" ${canAfford ? '' : 'disabled'}>Craft 1</button>
                        </div>
                    </div>`;
            }).join('');

            const content = `
                <div class="flex items-start gap-3">
                    <div class="text-6xl">${item.icon || '❔'}</div>
                    <div>
                        <h3 class="text-xl font-bold text-white">${item.name}</h3>
                        <div class="text-xs text-secondary">Category: ${category}</div>
                        <div class="text-sm mt-1">Owned: <span class="font-mono text-white">${qty.toLocaleString()}</span></div>
                        ${item.heals ? `<div class="text-xs text-green-300">Restores ${item.heals} HP</div>` : ''}
                        ${item.damage ? `<div class="text-xs text-red-300">Weapon Damage ${item.damage}</div>` : ''}
                    </div>
                </div>
                <div class="mt-4 flex flex-wrap gap-2">
                    ${hasFoodAction ? `<button class="eat-item-btn chimera-button px-3 py-2 rounded-md" data-item-id="${itemId}"><i class="fas fa-bowl-food"></i> Eat</button>` : ''}
                    ${hasEquipAction ? `<button class="equip-item-btn chimera-button px-3 py-2 rounded-md" data-item-id="${itemId}"><i class="fas fa-sword"></i> Equip</button>` : ''}
                    ${hasRunecraftingNav ? `<button class="goto-runecrafting-btn chimera-button px-3 py-2 rounded-md"><i class="fas fa-circle-nodes"></i> Runecrafting</button>` : ''}
                </div>
                ${recipes.length ? `<div class="mt-4"><h4 class="text-sm font-semibold mb-2">Recipes using ${item.name}</h4><div class="space-y-2">${recipeList}</div></div>` : ''}
            `;
            this.showModal(item.name, content);
            // Attach modal action handlers
            const eatBtn = this.modalContent.querySelector('.eat-item-btn'); if (eatBtn) eatBtn.addEventListener('click', () => { this.game.eatFood(itemId); this.hideModal(); this.renderView(); });
            const equipBtn = this.modalContent.querySelector('.equip-item-btn'); if (equipBtn) equipBtn.addEventListener('click', () => { this.game.equipWeapon(itemId); this.hideModal(); this.renderView(); });
            const gotoRC = this.modalContent.querySelector('.goto-runecrafting-btn'); if (gotoRC) gotoRC.addEventListener('click', () => { this.currentView = 'runecrafting'; this.render(); this.hideModal(); });
            this.modalContent.querySelectorAll('.goto-skill-btn').forEach(btn => btn.addEventListener('click', () => { this.currentView = btn.dataset.skillId; this.render(); this.hideModal(); }));
            this.modalContent.querySelectorAll('.quick-craft-btn').forEach(btn => btn.addEventListener('click', () => { this.game.craftItem(btn.dataset.skillId, btn.dataset.recipeId, 1); this.render(); this.hideModal(); }));
        }
        
        updateAscensionUI() {
            const { canAscend, essenceToGain } = this.game.calculateAscensionData();
            const currentEssence = this.game.state.player.essence || 0;
            const currentLifePath = this.game.state.player.life_path;
            
            // Update header ascension button
            const headerContainer = document.getElementById('header-ascension-container');
            const headerButton = document.getElementById('header-ascend-btn');
            if (headerContainer && headerButton) {
                if (canAscend) {
                    headerContainer.classList.remove('hidden');
                    headerButton.textContent = `🌟 ASCEND (${essenceToGain}) 🌟`;
                } else {
                    headerContainer.classList.add('hidden');
                }
            }
            
            // Update sidebar ascension section
            const sidebarSection = document.getElementById('sidebar-ascension-section');
            const sidebarEssence = document.getElementById('sidebar-essence-display');
            const sidebarButton = document.getElementById('sidebar-ascend-btn');
            const sidebarInfo = document.getElementById('sidebar-ascension-info');
            
            if (sidebarSection && sidebarEssence && sidebarButton && sidebarInfo) {
                sidebarEssence.textContent = currentEssence.toLocaleString();
                
                if (canAscend) {
                    sidebarSection.classList.remove('hidden');
                    sidebarButton.textContent = `🚀 ASCEND (${essenceToGain})`;
                    sidebarInfo.textContent = `Ready to ascend!`;
                    sidebarInfo.className = 'text-xs text-center text-green-300 mt-2';
                } else {
                    sidebarSection.classList.add('hidden');
                }
            }
            
            // Update essence display in header
            const essenceDisplay = document.getElementById('essence-display');
            if (essenceDisplay) {
                essenceDisplay.textContent = currentEssence.toLocaleString();
            }
            
            // Update life path display if it exists
            this.updateLifePathDisplay();
        }
        
        updateLifePathDisplay() {
            const currentLifePath = this.game.state.player.life_path;
            
            // Update header life path display
            const headerLifePathDisplay = document.getElementById('header-life-path-display');
            if (headerLifePathDisplay) {
                if (currentLifePath && GAME_DATA.LIFE_PATHS[currentLifePath]) {
                    const path = GAME_DATA.LIFE_PATHS[currentLifePath];
                    headerLifePathDisplay.innerHTML = `
                        <div class="flex items-center space-x-2">
                            <span class="text-lg">${path.icon}</span>
                            <span class="text-sm font-semibold ${path.color}">${path.name}</span>
                        </div>
                    `;
                    headerLifePathDisplay.classList.remove('hidden');
                } else {
                    headerLifePathDisplay.classList.add('hidden');
                }
            }
            
            // Update sidebar life path display
            const sidebarLifePathDisplay = document.getElementById('sidebar-life-path-display');
            if (sidebarLifePathDisplay) {
                if (currentLifePath && GAME_DATA.LIFE_PATHS[currentLifePath]) {
                    const path = GAME_DATA.LIFE_PATHS[currentLifePath];
                    sidebarLifePathDisplay.innerHTML = `
                        <div class="text-center p-2">
                            <div class="text-2xl mb-1">${path.icon}</div>
                            <div class="text-xs font-semibold ${path.color}">${path.name}</div>
                        </div>
                    `;
                    sidebarLifePathDisplay.classList.remove('hidden');
                } else {
                    sidebarLifePathDisplay.classList.add('hidden');
                }
            }
        }
        
        hideAllAscensionUI() {
            // Hide header ascension button
            const headerContainer = document.getElementById('header-ascension-container');
            if (headerContainer) {
                headerContainer.classList.add('hidden');
            }
            
            // Hide sidebar ascension section
            const sidebarSection = document.getElementById('sidebar-ascension-section');
            if (sidebarSection) {
                sidebarSection.classList.add('hidden');
            }
            
            // Hide any ascension banners or notifications
            const ascensionBanners = document.querySelectorAll('[id*="ascension"]');
            ascensionBanners.forEach(element => {
                if (element.id !== 'header-ascension-container' && element.id !== 'sidebar-ascension-section') {
                    element.classList.add('hidden');
                }
            });
        }
        
        showAscensionConfirmation() {
            // Get the latest ascension data
            const { essenceToGain } = this.game.calculateAscensionData();
            
            // Show confirmation modal
            this.showModal(
                '🌟 Are you sure you want to Ascend? 🌟',
                `
                <div class="text-center space-y-4">
                    <div class="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-4 rounded-lg border border-purple-500/50">
                        <h4 class="text-lg font-bold text-yellow-300 mb-2">🚀 Ascension Rewards</h4>
                        <div class="text-2xl font-bold text-white">You will gain <span class="text-yellow-300">${essenceToGain} Essence</span></div>
                        <div class="text-sm text-secondary mt-1">Essence is permanent currency that persists through ascensions</div>
                    </div>
                    
                    <div class="bg-slate-800/50 p-4 rounded-lg text-left">
                        <h4 class="font-bold text-white mb-2">🔄 What will be reset:</h4>
                        <ul class="text-sm text-secondary space-y-1">
                            <li>• Gold, Runes, and Bank items</li>
                            <li>• All Skills and Meta Skills (back to Level 1)</li>
                            <li>• Empire units and Army units</li>
                            <li>• Expedition progress and history</li>
                            <li>• Current Homestead tasks and active Sagas</li>
                        </ul>
                        
                        <h4 class="font-bold text-green-300 mt-3 mb-2">💎 What will be preserved:</h4>
                        <ul class="text-sm text-secondary space-y-1">
                            <li>• Essence (permanent currency)</li>
                            <li>• Ascension Upgrades (permanent bonuses)</li>
                            <li>• Completed Saga titles (memorialized)</li>
                        </ul>
                    </div>
                    
                    <div class="text-sm text-yellow-300 font-bold">
                        ⚠️ This action cannot be undone! You will start a completely new game with your permanent rewards.
                    </div>
                </div>
                `,
                {
                    confirmAction: () => this.game.ascend(),
                    cancelAction: () => this.hideModal(),
                    confirmText: 'Confirm Ascension'
                }
            );
        }
        
        showLifePathSelection() {
            const lifePaths = GAME_DATA.LIFE_PATHS;
            
            // Create the life path selection modal
            const modalContent = `
                <div class="text-center space-y-6">
                    <div class="text-6xl mb-4">🌟</div>
                    <h2 class="text-3xl font-bold text-white mb-2">Welcome to Your Second Life</h2>
                    <p class="text-lg text-secondary mb-6">
                        You have ascended with newfound wisdom. Now you must choose your path in this incarnation.<br>
                        Each path offers unique bonuses and will shape your journey forward.
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                        ${Object.entries(lifePaths).map(([pathId, path]) => `
                            <div class="life-path-option bg-gradient-to-br ${path.bgColor} border ${path.borderColor} rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-200" data-path-id="${pathId}">
                                <div class="text-4xl mb-3">${path.icon}</div>
                                <h3 class="text-lg font-bold text-white mb-2">${path.name}</h3>
                                <p class="text-xs text-secondary mb-3">${path.description}</p>
                                
                                <div class="text-left space-y-2">
                                    <div class="text-xs">
                                        <span class="font-semibold ${path.color}">Starting Bonuses:</span>
                                        ${Object.entries(path.starting_bonuses).map(([bonus, value]) => {
                                            if (typeof value === 'number' && value > 1) {
                                                return `<div class="ml-2">• +${value > 10 ? value : value * 100} ${bonus.replace(/_/g, ' ')}</div>`;
                                            } else if (typeof value === 'number' && value < 1) {
                                                return `<div class="ml-2">• ${Math.round(value * 100)}% ${bonus.replace(/_/g, ' ')}</div>`;
                                            } else {
                                                return `<div class="ml-2">• +${value} ${bonus.replace(/_/g, ' ')}</div>`;
                                            }
                                        }).join('')}
                                    </div>
                                    
                                    <div class="text-xs">
                                        <span class="font-semibold ${path.color}">Permanent Bonuses:</span>
                                        ${Object.entries(path.bonuses).map(([bonus, value]) => {
                                            if (typeof value === 'number' && value > 1) {
                                                return `<div class="ml-2">• ${Math.round((value - 1) * 100)}% ${bonus.replace(/_/g, ' ')}</div>`;
                                            } else {
                                                return `<div class="ml-2">• +${Math.round((value - 1) * 100)}% ${bonus.replace(/_/g, ' ')}</div>`;
                                            }
                                            }).join('')}
                                    </div>
                                </div>
                                
                                <div class="mt-3 pt-3 border-t border-white/20">
                                    <button class="choose-path-btn w-full ${path.color.replace('text-', 'bg-').replace('-400', '-600')} hover:${path.color.replace('text-', 'bg-').replace('-400', '-700')} text-white font-bold py-2 px-4 rounded transition-colors duration-200" data-path-id="${pathId}">
                                        Choose This Path
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <p class="text-sm text-secondary mt-4">
                        Choose wisely - your path will determine your strengths and weaknesses in this life.
                    </p>
                </div>
            `;
            
            // Show the modal
            this.showModal('🌟 Choose Your Life Path', modalContent, {
                showCloseButton: false,
                closeOnEscape: false,
                closeOnClickOutside: false
            });
            
            // Add event listeners for path selection
            setTimeout(() => {
                document.querySelectorAll('.choose-path-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const pathId = btn.dataset.pathId;
                        this.selectLifePath(pathId);
                    });
                });
                
                // Add hover effects for path options
                document.querySelectorAll('.life-path-option').forEach(option => {
                    option.addEventListener('click', (e) => {
                        if (e.target.classList.contains('choose-path-btn')) return;
                        const pathId = option.dataset.pathId;
                        this.selectLifePath(pathId);
                    });
                });
            }, 100);
        }
        
        selectLifePath(pathId) {
            const path = GAME_DATA.LIFE_PATHS[pathId];
            if (!path) return;
            
            // Apply the life path to the player
            this.game.state.player.life_path = pathId;
            
            // Apply starting bonuses
            this.applyLifePathStartingBonuses(pathId);
            
            // Save the game
            this.game.saveGame();
            
            // Show confirmation and start the new life
            this.showModal('🌟 Path Chosen!', `
                <div class="text-center space-y-4">
                    <div class="text-4xl mb-4">${path.icon}</div>
                    <h3 class="text-xl font-bold text-white">You have chosen: ${path.name}</h3>
                    <p class="text-secondary">${path.description}</p>
                    
                    <div class="bg-gradient-to-br ${path.bgColor} border ${path.borderColor} rounded-lg p-4">
                        <h4 class="font-bold text-white mb-2">Your new life begins with:</h4>
                        <div class="text-sm text-secondary space-y-1">
                            ${Object.entries(path.starting_bonuses).map(([bonus, value]) => {
                                if (typeof value === 'number' && value > 1) {
                                    return `<div>• +${value > 10 ? value : value * 100} ${bonus.replace(/_/g, ' ')}</div>`;
                                } else if (typeof value === 'number' && value < 1) {
                                    return `<div>• ${Math.round(value * 100)}% ${bonus.replace(/_/g, ' ')}</div>`;
                                } else {
                                    return `<div>• +${value} ${bonus.replace(/_/g, ' ')}</div>`;
                                }
                            }).join('')}
                        </div>
                    </div>
                    
                    <p class="text-white">Welcome to your new incarnation! Your journey continues...</p>
                </div>
            `, {
                confirmText: 'Begin New Life',
                confirmAction: () => {
                    this.hideModal();
                    // Refresh the UI to show new stats and hide ascension elements
                    this.renderView();
                    this.updateDynamicElements();
                    this.updateAscensionUI(); // This will hide ascension elements since canAscend will be false
                }
            });
        }
        
        applyLifePathStartingBonuses(pathId) {
            const path = GAME_DATA.LIFE_PATHS[pathId];
            if (!path) return;
            
            const bonuses = path.starting_bonuses;
            
            // Apply starting stat bonuses
            if (bonuses.stamina) {
                this.game.state.player.stamina += bonuses.stamina;
                this.game.state.player.staminaMax += bonuses.stamina;
            }
            
            if (bonuses.hp) {
                this.game.state.player.hp += bonuses.hp;
            }
            
            if (bonuses.max_hp) {
                this.game.state.player.hpMax += bonuses.max_hp;
            }
            
            if (bonuses.gold) {
                this.game.state.player.gold += bonuses.gold;
            }
            
            if (bonuses.runes) {
                this.game.state.player.runes += bonuses.runes;
            }
            
            if (bonuses.meta_skill_levels) {
                Object.values(this.game.state.player.meta_skills).forEach(skill => {
                    skill.level += bonuses.meta_skill_levels;
                });
            }
            
            if (bonuses.empire_units) {
                Object.keys(this.game.state.empire.units).forEach(unitId => {
                    this.game.state.empire.units[unitId] += bonuses.empire_units;
                });
            }
            
            if (bonuses.worker_levels) {
                // This will be applied when workers are initialized
                this.game.state.workerLevelBoost = bonuses.worker_levels;
            }
            
            if (bonuses.artistic_skills) {
                // Apply to artistic skills if they exist
                const artisticSkills = ['painting', 'music', 'writing', 'crafting'];
                artisticSkills.forEach(skillId => {
                    if (this.game.state.player.skills[skillId]) {
                        this.game.state.player.skills[skillId].level += bonuses.artistic_skills;
                    }
                });
            }
        }
        
        // Well of Serenity methods
        startMeditation() {
            if (this.state.homestead.wellOfSerenity.hasReceivedBoon) {
                return false; // Already received the boon
            }
            
            if (this.state.homestead.wellOfSerenity.isMeditating) {
                return false; // Already meditating
            }
            
            this.state.homestead.wellOfSerenity.isMeditating = true;
            this.state.homestead.wellOfSerenity.meditationStartTime = Date.now();
            this.state.homestead.wellOfSerenity.meditationProgress = 0;
            
            this.saveGame();
            return true;
        }
        
        updateMeditation() {
            const well = this.state.homestead.wellOfSerenity;
            if (!well.isMeditating) return;
            
            const now = Date.now();
            const elapsed = now - well.meditationStartTime;
            const totalDuration = GAME_DATA.WELL_OF_SERENITY.meditationDuration;
            
            well.meditationProgress = Math.min(100, (elapsed / totalDuration) * 100);
            
            if (well.meditationProgress >= 100) {
                this.completeMeditation();
            }
        }
        
        completeMeditation() {
            const well = this.state.homestead.wellOfSerenity;
            const boon = GAME_DATA.WELL_OF_SERENITY.boon;
            
            // Grant the boon
            this.state.player.gold += boon.gold;
            if (this.state.bank.rations === undefined) {
                this.state.bank.rations = 0;
            }
            this.state.bank.rations += boon.rations;
            
            // Mark as completed
            well.isMeditating = false;
            well.meditationStartTime = null;
            well.meditationProgress = 0;
            well.hasReceivedBoon = true;
            
            // Show success message
            this.uiManager.showFloatingText(`🌅 Boon of Clarity granted! +${boon.gold} Gold +${boon.rations} Rations`, 'text-amber-400');
            this.uiManager.showModal('🌅 Meditation Complete', `
                <div class="text-center space-y-4">
                    <div class="text-4xl mb-4">🌅</div>
                    <h3 class="text-xl font-bold text-white">Boon of Clarity Received</h3>
                    <p class="text-secondary">${boon.message}</p>
                    
                    <div class="bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-500 rounded-lg p-4">
                        <h4 class="font-bold text-white mb-2">Your reward:</h4>
                        <div class="text-sm text-secondary space-y-1">
                            <div>• +${boon.gold} Gold</div>
                            <div>• +${boon.rations} Rations</div>
                        </div>
                    </div>
                    
                    <p class="text-white">You have found inner peace and clarity. Your journey begins with wisdom and purpose.</p>
                </div>
            `, {
                confirmText: 'Continue Journey',
                confirmAction: () => this.uiManager.hideModal()
            });
            
            this.saveGame();
        }
        
        stopMeditation() {
            const well = this.state.homestead.wellOfSerenity;
            if (!well.isMeditating) return;
            
            well.isMeditating = false;
            well.meditationStartTime = null;
            well.meditationProgress = 0;
            
            this.saveGame();
        }
        
        // Daily Attunement - Health Data Integration
        generateMockHealthData() {
            // Generate realistic mock health data for demonstration
            // In a real implementation, this would sync with actual health APIs
            const baseSteps = 3000 + Math.floor(Math.random() * 8000); // 3k-11k steps
            const baseMindful = Math.floor(Math.random() * 30); // 0-30 minutes
            const baseSleep = 5 + Math.random() * 4; // 5-9 hours
            
            return {
                steps: baseSteps,
                mindfulMinutes: baseMindful,
                sleepHours: Math.round(baseSleep * 10) / 10 // Round to 1 decimal
            };
        }
        
        syncDailyAttunement() {
            const attunement = this.state.homestead.dailyAttunement;
            const today = new Date().toDateString();
            
            // Check if already synced today
            if (attunement.lastSyncDate === today) {
                return { success: false, reason: 'already_synced' };
            }
            
            // Generate health data (in real app, this would come from health APIs)
            const healthData = this.generateMockHealthData();
            
            // Update health data
            attunement.healthData = healthData;
            attunement.lastSyncDate = today;
            attunement.hasClaimedToday = false;
            
            // Calculate rewards
            const rewards = this.calculateAttunementRewards(healthData);
            attunement.pendingRewards = rewards;
            
            // Update total stats
            attunement.totalStats.totalSteps += healthData.steps;
            attunement.totalStats.totalMindfulMinutes += healthData.mindfulMinutes;
            attunement.totalStats.totalSleepHours += healthData.sleepHours;
            attunement.totalStats.daysTracked++;
            
            this.saveGame();
            return { success: true, healthData, rewards };
        }
        
        calculateAttunementRewards(healthData) {
            const rewards = GAME_DATA.DAILY_ATTUNEMENT.rewards;
            
            // Calculate step rewards (1 gold per 100 steps)
            const stepGold = Math.floor(healthData.steps / rewards.steps.rate) * rewards.steps.goldPer;
            
            // Calculate mindfulness rewards (10 shards per minute)
            const mindfulShards = healthData.mindfulMinutes * rewards.mindfulness.shardsPer;
            
            // Calculate sleep bonus (stamina regen bonus based on hours slept)
            let sleepBonus = 0;
            const sleepRates = rewards.sleep.rates;
            for (const rate of sleepRates) {
                if (healthData.sleepHours >= rate.hours) {
                    sleepBonus = rate.bonus;
                    break;
                }
            }
            
            return {
                gold: stepGold,
                essenceShards: mindfulShards,
                staminaBonus: sleepBonus
            };
        }
        
        claimAttunementRewards() {
            const attunement = this.state.homestead.dailyAttunement;
            const today = new Date().toDateString();
            
            // Check if rewards are available
            if (attunement.lastSyncDate !== today || attunement.hasClaimedToday) {
                return { success: false, reason: 'no_rewards' };
            }
            
            const rewards = attunement.pendingRewards;
            
            // Grant rewards
            this.state.player.gold += rewards.gold;
            this.state.player.essence_shards += rewards.essenceShards;
            
            // Convert shards to essence if enough (100 shards = 1 essence)
            const essenceFromShards = Math.floor(this.state.player.essence_shards / 100);
            if (essenceFromShards > 0) {
                this.state.player.essence += essenceFromShards;
                this.state.player.essence_shards -= essenceFromShards * 100;
            }
            
            // Apply stamina bonus for the day
            if (rewards.staminaBonus > 0) {
                this.state.player.staminaMax += rewards.staminaBonus;
                this.state.player.stamina = Math.min(this.state.player.stamina + rewards.staminaBonus, this.state.player.staminaMax);
            }
            
            // Mark as claimed
            attunement.hasClaimedToday = true;
            
            // Show rewards
            let rewardText = '';
            if (rewards.gold > 0) rewardText += `+${rewards.gold} Gold `;
            if (rewards.essenceShards > 0) rewardText += `+${rewards.essenceShards} Essence Shards `;
            if (essenceFromShards > 0) rewardText += `+${essenceFromShards} Essence `;
            if (rewards.staminaBonus > 0) rewardText += `+${rewards.staminaBonus} Max Stamina `;
            
            this.uiManager.showFloatingText(`🌱 Daily Attunement: ${rewardText}`, 'text-green-400');
            
            this.saveGame();
            return { success: true, rewards, essenceFromShards };
        }
        
        getDailyAttunementStatus() {
            // Ensure homestead and dailyAttunement exist
            if (!this.state.homestead || !this.state.homestead.dailyAttunement) {
                return {
                    hasData: false,
                    hasClaimed: false,
                    canClaim: false,
                    healthData: { steps: 0, mindfulMinutes: 0, sleepHours: 0 },
                    pendingRewards: { gold: 0, essenceShards: 0, staminaBonus: 0 },
                    totalStats: { totalSteps: 0, totalMindfulMinutes: 0, totalSleepHours: 0, daysTracked: 0 }
                };
            }
            
            const attunement = this.state.homestead.dailyAttunement;
            const today = new Date().toDateString();
            
            return {
                hasData: attunement.lastSyncDate === today,
                hasClaimed: attunement.hasClaimedToday,
                canClaim: attunement.lastSyncDate === today && !attunement.hasClaimedToday,
                healthData: attunement.healthData,
                pendingRewards: attunement.pendingRewards,
                totalStats: attunement.totalStats
            };
        }
        
        claimDailyAttunement() {
            const status = this.getDailyAttunementStatus();
            if (!status.canClaim) {
                return { success: false, message: 'No rewards available to claim' };
            }
            
            const attunement = this.state.homestead.dailyAttunement;
            const rewards = attunement.pendingRewards;
            
            // Grant rewards
            this.state.player.gold += rewards.gold;
            this.state.player.essence_shards += rewards.essenceShards;
            
            // Convert shards to essence if enough (100 shards = 1 essence)
            const essenceFromShards = Math.floor(this.state.player.essence_shards / 100);
            if (essenceFromShards > 0) {
                this.state.player.essence += essenceFromShards;
                this.state.player.essence_shards -= essenceFromShards * 100;
            }
            
            // Apply stamina bonus for the day
            if (rewards.staminaBonus > 0) {
                this.state.player.staminaMax += rewards.staminaBonus;
                this.state.player.stamina = Math.min(this.state.player.stamina + rewards.staminaBonus, this.state.player.staminaMax);
            }
            
            // Mark as claimed
            attunement.hasClaimedToday = true;
            
            // Show rewards
            let rewardText = '';
            if (rewards.gold > 0) rewardText += `+${rewards.gold} Gold `;
            if (rewards.essenceShards > 0) rewardText += `+${rewards.essenceShards} Essence Shards `;
            if (essenceFromShards > 0) rewardText += `+${essenceFromShards} Essence `;
            if (rewards.staminaBonus > 0) rewardText += `+${rewards.staminaBonus} Max Stamina `;
            
            this.uiManager.showFloatingText(`🌱 Daily Attunement: ${rewardText}`, 'text-green-400');
            
            this.saveGame();
            return { success: true, rewards, essenceFromShards };
        }
    }

    const game = new GameManager(); game.init(); window.chimeraGame = game;
    
    // Debug utilities
    window.debugActions = {
        list: () => { console.log('Active actions:', game.state.activeActions); return game.state.activeActions; },
        stop: (skillId) => { game.stopAction(skillId); console.log(`Stopped ${skillId}`); },
        clearAll: () => { 
            Object.keys(game.state.activeActions).forEach(skillId => delete game.state.activeActions[skillId]);
            game.state.activeAction = null;
            game.uiManager.render();
            console.log('All actions cleared');
        },
        checkGemVein: () => {
            const mining = game.state.activeActions.mining;
            console.log('Mining action:', mining);
            if (mining && mining.id === 'gem_vein') {
                console.log('Gem Vein is active - trying to stop...');
                game.stopAction('mining');
            } else {
                console.log('No Gem Vein action found');
            }
        },
        emergencyReset: () => {
            // Clear stuck actions from localStorage
            const saveData = JSON.parse(localStorage.getItem('chimeraSaveData_web_v1') || '{}');
            saveData.activeActions = {};
            saveData.activeAction = null;
            localStorage.setItem('chimeraSaveData_web_v1', JSON.stringify(saveData));
            console.log('Emergency reset complete - refresh page');
            location.reload();
        },
        viewSaveData: () => {
            const saveData = JSON.parse(localStorage.getItem('chimeraSaveData_web_v1') || '{}');
            console.log('Save data activeActions:', saveData.activeActions);
            console.log('Save data activeAction:', saveData.activeAction);
            return saveData;
        }
    };
});