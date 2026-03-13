export type Story = {
  id: string
  title: string
  category: string
  readingTime: number
  image: string
  text: string
}

export const CATEGORIES = [
  'Animals',
  'Adventure',
  'Friendship',
  'Magic',
  'Space',
  'Dreams',
]

export const stories: Story[] = [
  // ── Animals ──────────────────────────────────────────────
  {
    id: 'animals_sleepy_fox',
    title: 'The Sleepy Little Fox',
    category: 'Animals',
    readingTime: 6,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=400&fit=crop&q=80',
    text: `
Once upon a time, deep in a quiet forest where the pine trees grew tall and the moss was soft as a pillow, there lived a small red fox named Luma.

Luma loved to explore. Every morning she would wake up early, shake the dew from her fluffy tail, and trot off along the winding paths between the trees. She sniffed wild mushrooms and chased falling leaves and watched the river tumble cheerfully over smooth stones.

But one evening, after a very long day of exploring, Luma found herself far from home. The sky had turned the color of blueberries, and the first stars were beginning to appear.

"I should head back," she said to herself softly.

She followed the scent of pine and wet earth, her little paws padding silently through the fallen leaves. The forest was calm now. The birds had tucked their heads under their wings. The rabbits had disappeared into their burrows. Even the wind had gone still, as if the whole world was getting ready for sleep.

Luma climbed a gentle hill and found her favorite tree — an old oak with roots like armchairs, just the right size for a small fox. She curled up in the hollow between two great roots, her bushy tail wrapped around her nose.

The moon rose slowly, round and golden, casting long silver shadows through the branches. Fireflies drifted between the ferns, blinking softly like tiny lanterns.

Luma watched them for a while, her eyes growing heavy.

She thought about the day. She had found a beautiful blue feather by the river. She had watched a family of deer step through the meadow in the early morning mist. She had heard a wood thrush sing from the very top of a spruce tree, a song so clear and sweet it had made her heart feel warm.

A little owl landed in the oak above her and looked down with wide amber eyes.

"Heading to sleep, Luma?" the owl asked quietly.

"Almost," she said.

"Rest well," said the owl, and tucked his feathers close.

Luma closed her eyes. Around her the forest breathed slowly — in and out, in and out — like a great gentle creature resting. The soft rustle of leaves, the faint trickle of the distant stream, and the steady chirping of crickets wrapped around her like a blanket.

She thought about tomorrow. Maybe she would follow the stream all the way to the meadow at the edge of the forest. Maybe she would find more feathers, or perhaps a shiny stone, or a new path she had never walked before.

But those thoughts grew quieter and quieter, like music fading in the distance.

Luma sighed a small, contented sigh.

And soon the little fox was fast asleep, dreaming of sunlit clearings and river songs and a whole wide forest waiting gently for morning.
    `.trim(),
  },
  {
    id: 'animals_rabbit_moon',
    title: 'The Rabbit Who Touched the Moon',
    category: 'Animals',
    readingTime: 6,
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&h=400&fit=crop&q=80',
    text: `
High on a hill above a sleeping village lived a little white rabbit named Pip. Pip had the softest ears, the twitchiest nose, and the most curious eyes in all the land.

Every night, while the other rabbits nibbled clover and dozed in the warm grass, Pip would sit at the very top of the hill and stare at the moon.

"It looks so close tonight," Pip would whisper. "I wonder what it feels like."

The other rabbits thought this was a very strange thing to wonder about. "The moon is just the moon," they said. "It's far away and cold and very bright. Come eat some clover."

But Pip kept wondering.

One warm summer evening, the moon was especially large and golden, hovering just above the line of the darkened hills. It was so low that Pip thought — truly thought — that if he climbed high enough, he might just reach it.

He hopped up the steepest part of the hill. Then he climbed onto a large round boulder. Then, very carefully, he stood on the very tips of his back paws and stretched his front paws as high as they would go.

And something remarkable happened.

A beam of moonlight fell across his paws, warm and silver and real, like cool water and starlight mixed together.

Pip held very still. The moonlight stayed.

For a long moment, the whole world was quiet. He could see the village below, its windows glowing amber. He could see the dark shape of the forest. He could see the river, a thin silver ribbon winding through the fields.

"Hello," Pip whispered to the moon.

The moon didn't answer in words. But it seemed to glow a little warmer, a little brighter, just for a moment.

Pip carefully climbed back down and hopped to where the other rabbits were sleeping in the clover. He curled up beside his friend Blossom and tucked his nose under her ear.

"Did you reach it?" Blossom murmured, half-asleep.

"Sort of," Pip said softly.

And that was enough. More than enough.

He closed his eyes, still feeling the warm silver tingle in his paws, and drifted off to sleep while the moon sailed slowly overhead, keeping watch over the hill, the village, and one very happy little rabbit.
    `.trim(),
  },

  // ── Adventure ────────────────────────────────────────────
  {
    id: 'adventure_lighthouse',
    title: 'The Lighthouse at the Edge of the Bay',
    category: 'Adventure',
    readingTime: 7,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop&q=80',
    text: `
On the rocky shore at the edge of a small bay stood an old lighthouse. Its white tower rose high above the cliffs, and at the very top, a warm light turned slowly round and round, sending its glow far out across the dark water.

Two children named Mara and Finn lived in the cottage just below the lighthouse. Their grandmother was the lighthouse keeper, and every evening she would climb the long spiral staircase to light the lamp.

One autumn evening, just as the sun was sinking behind the hills, Grandmother came inside looking worried.

"The lamp won't start," she said. "There must be something wrong with the mechanism. I'll need to go into the village for a spare part. But I can't leave the light unlit — there are boats out on the water tonight."

"We'll do it," said Mara at once.

Finn nodded. "We know how. You showed us."

Grandmother looked at them for a long moment. Then she smiled. "I'll be back before midnight. Keep the lamp burning."

The children climbed the spiral stairs together, step by step, round and round, until they reached the lamp room at the top. Through the great glass windows they could see the whole bay spread out below — the water dark as ink, the distant lights of fishing boats moving slowly in the dusk.

Mara opened the maintenance panel the way Grandmother had shown them. Inside was a tangle of gears and small parts and a winding mechanism.

"It's the winding spring," Finn said, pointing. "It's slipped off."

Together they carefully guided the spring back into its groove. Mara held it in place while Finn turned the small brass key to wind it tight.

The mechanism clicked. Then hummed. Then, with a slow and stately grace, the great lamp began to turn.

Light swept out across the water. Far below, on the nearest fishing boat, they saw a lantern swing side to side — the sailors' way of saying thank you.

Mara and Finn sat by the window together and watched the light turn, round and round, steady and sure, lighting the way for everyone on the water.

When Grandmother came home, she found them both there, fast asleep against each other, the lamp burning faithfully above them.

She put a warm blanket around their shoulders, kissed them each on the head, and whispered, "Well done."

And the light kept turning.
    `.trim(),
  },
  {
    id: 'adventure_map',
    title: "The Map in Grandpa's Attic",
    category: 'Adventure',
    readingTime: 6,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop&q=80',
    text: `
On a rainy Saturday, when the sky was the color of warm grey wool and the windows were streaked with drops, a girl named Rosie climbed up to her grandfather's attic.

It smelled of old wood and lavender and something dusty and sweet that she couldn't quite name. Boxes were stacked along the walls, and a round window let in soft, pearly light.

In the corner, under an old quilt, she found a wooden chest with a brass latch. She opened it and found books, a toy train, and, at the very bottom, a folded piece of paper, brown with age.

It was a map.

Not a map of any country she recognized — this was a map of Grandpa's garden, drawn long ago when he was young. There was the old apple tree, marked with a tiny tree drawing. The vegetable patch. The stone wall. And in the far corner, marked with a small star: Treasure here.

Rosie ran downstairs.

"Grandpa! I found your old map!"

Her grandfather set down his cup of tea and smiled a slow, warm smile. "Oh my goodness. I forgot all about that."

"Can we go look for the treasure?"

Even though it was raining, they put on their boots and their coats and walked into the garden together. The grass was wet and the apple tree dripped softly and everything smelled wonderfully green.

They found the far corner — and there, at the base of the old stone wall, half-hidden by ivy, was a flat stone with a small carved star.

Together they lifted it.

Beneath it was a small tin box. Inside the box was a smooth blue marble, a tiny brass compass, and a note in a child's handwriting: For whoever finds this — hello from the past!

Rosie held the marble up to the grey sky. It glowed like a little moon.

"You made this," she said.

"I did," said Grandpa. "I was about your age. I wanted someone to find it someday."

She tucked the marble carefully into her pocket, took her grandfather's hand, and they walked back inside together.

That evening, while the rain fell quietly outside, Rosie drew her own map of the garden — with new treasures to find, and a note at the bottom: For whoever finds this — hello from me.
    `.trim(),
  },

  // ── Friendship ───────────────────────────────────────────
  {
    id: 'friendship_bear_bird',
    title: 'The Bear and the Little Bird',
    category: 'Friendship',
    readingTime: 6,
    image: 'https://images.unsplash.com/photo-1448375240586-3d0c7ebb7df8?w=600&h=400&fit=crop&q=80',
    text: `
In a forest full of birch trees and berry bushes, there lived a large brown bear named Bruno. Bruno was very kind, but also very shy. He spent most of his days alone, sitting by the river or wandering slowly through the trees.

One morning a small bird landed on a branch right in front of him. The bird was the color of the sky just before sunset — a soft, warm blue — and she had bright black eyes and a cheerful voice.

"Hello," she said.

Bruno blinked. No one usually spoke to him first.

"Hello," he said very quietly.

"I'm Wren," said the bird. "I just flew in from the mountains. Are you from here?"

"Yes," said Bruno. "I've always been here."

"Lucky you," said Wren. "This forest is beautiful." She tilted her head. "You look like you know all the best spots. Would you show me around?"

Bruno felt something warm and shy unfold in his chest. "I could try," he said.

He showed her the old hollow tree where mushrooms grew in perfect circles. He showed her the meadow that filled with golden light in the afternoon. He showed her the place where the river widened into a still, clear pool, and you could see the stones at the bottom as easily as if the water weren't there at all.

Wren sang as they walked, small cheerful songs that made the walk feel lighter.

By evening they sat together on a mossy log by the river, watching the water turn bronze in the last of the light.

"Do you have friends in the forest?" Wren asked.

Bruno was quiet for a moment. "Not really," he said. "I'm not very good at talking."

"You're wonderful at talking," Wren said simply. "You've been talking to me all day."

Bruno looked at her. He hadn't realized that was true.

"I suppose I have," he said.

"Same time tomorrow?" Wren asked.

"Same time tomorrow," said Bruno.

And every day after that, the large brown bear and the small blue bird walked together through the forest, and the woods felt less quiet, and Bruno felt less alone.
    `.trim(),
  },
  {
    id: 'friendship_new_neighbor',
    title: 'The New Neighbor',
    category: 'Friendship',
    readingTime: 6,
    image: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=600&h=400&fit=crop&q=80',
    text: `
One morning in late summer, a moving van pulled up next door, and a family began carrying boxes into the yellow house that had been empty all spring.

A boy named Leo watched from his bedroom window.

Among all the boxes and furniture and potted plants, he noticed a girl about his age carrying a birdcage covered with a purple cloth. She walked very carefully, holding the cage with both hands, taking small steady steps.

Leo was curious. He wondered what was inside the cage.

He thought about going over. Then he thought maybe he shouldn't. Then he thought about the cage again.

He went over.

The girl was sitting on the front steps, the cage beside her, looking a little bit tired and a little bit lost.

"Hi," said Leo.

"Hi," said the girl.

"What's in the cage?" he asked.

She lifted the purple cloth. Inside was a small canary, the color of sunshine, sitting very still on his perch and looking at Leo with one round eye.

"This is Oliver," she said. "He doesn't like moving. He gets very quiet."

"What does he sound like when he's happy?" Leo asked.

"Like this," she said, and she whistled a small bright trill.

Oliver ruffled his feathers. Then, very slowly, he sang it back — quiet at first, then a little louder, then a full warm flowing song that poured out of the cage and into the summer air.

The girl smiled for the first time.

"I'm Ida," she said.

"I'm Leo," he said.

"Do you know good places around here?"

"Lots," said Leo. "There's a park with a good climbing tree and a bakery that makes cinnamon rolls on Fridays and a path by the stream where you can find fossils."

Ida's eyes lit up. "Can you show me?"

"Tomorrow," said Leo. "Let Oliver settle in first."

Ida nodded and covered the cage gently with the purple cloth.

"He'll be singing by morning," Leo said confidently.

He was right.
    `.trim(),
  },

  // ── Magic ─────────────────────────────────────────────────
  {
    id: 'magic_golden_thread',
    title: 'The Golden Thread',
    category: 'Magic',
    readingTime: 7,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&q=80',
    text: `
In a village at the edge of an enchanted wood, there lived a girl named Clara who was always losing things. She lost her mittens. She lost her hair ribbons. She lost her way home from school three times in one week.

One evening she wandered too deep into the wood, following what she thought was the path home, and found herself in a part of the forest she had never seen before.

The trees here were ancient and tall, and their roots made great arching shapes over the soft earth. The air smelled of rain and old leaves and something that Clara could only describe as golden.

Then she saw it.

A tiny old woman sat on a root, knitting. But instead of yarn, she was knitting with light — a fine, glowing thread that moved and shimmered like a captured sunrise.

"Excuse me," Clara said politely. "I'm lost."

The old woman looked up. Her eyes were warm and dark and full of something deep.

"You're not lost," the woman said. "You're exactly where you needed to be."

"I can't find the path home."

"Ah," said the woman. "That's different." She reached into her basket and pulled out a small spool with a length of golden thread still attached. "Hold one end," she said.

Clara held it. It felt warm between her fingers, almost alive.

"Walk toward home," the woman said. "The thread will guide you."

"How?"

"You already know the way," said the woman. "You just don't trust yourself yet."

Clara wasn't sure what to say to that. She looked at the thread. She thought about home — the warm kitchen, the smell of soup on the stove, the sound of her mother humming while she read.

She took a step. Then another.

The thread didn't pull. But it glowed a little warmer when she went the right way.

She walked through the forest, step by careful step, following the warmth rather than the light. And sure enough, after a while the trees thinned, and there was the meadow, and there were the lights of the village, and there was her own front door.

She turned to look back at the wood.

The thread in her hand had vanished. But her fingers still felt warm.

From then on, Clara found that she never got quite as lost as she used to — not in the forest, and not anywhere else. She had learned to listen to the quiet voice that knew the way.
    `.trim(),
  },
  {
    id: 'magic_moonstone_jar',
    title: 'The Moonstone Jar',
    category: 'Magic',
    readingTime: 6,
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&h=400&fit=crop&q=80',
    text: `
On the shelf above Nico's bed sat a small glass jar filled with a soft blue light. His grandmother had given it to him on his fifth birthday and said only this: "It's a little bit of moonlight. Keep it close when you need it."

For two years the jar had sat on its shelf, glowing gently, always there when Nico went to sleep and always there when he woke up.

But one night Nico had a bad dream. He woke up with his heart beating fast and the room feeling too big and too dark. He reached for the jar.

It felt warm. He held it against his chest and sat up in bed, looking out the window at the real moon, which hung low and round above the rooftops.

Then something happened that had never happened before.

The light inside the jar brightened.

It shifted from blue to silver to a gentle gold, and as it did, the room filled with soft moving light, like sunlight through water. Shapes appeared on the walls — not shadows, but pictures. A forest. A river. A mountain. A meadow full of flowers.

They moved slowly, as if the jar was telling a story in light.

Nico watched, his heart slowing down, his breath growing calm.

The pictures showed a traveler walking through the forest, crossing the river on stepping stones, climbing the mountain slowly and carefully, and finally arriving at the meadow, where she sat down and looked at the sky.

And then the light in the jar slowly faded back to its usual soft blue.

Nico set the jar back on the shelf. He lay down. He looked at its glow for a while.

He thought about the traveler and the journey. He thought about how every hard thing in the story had led somewhere beautiful.

He closed his eyes.

This time, he slept all the way until morning.
    `.trim(),
  },

  // ── Space ─────────────────────────────────────────────────
  {
    id: 'space_small_astronaut',
    title: 'The Small Astronaut',
    category: 'Space',
    readingTime: 7,
    image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=600&h=400&fit=crop&q=80',
    text: `
Every night before bed, a girl named Yuki would stand at her window and look at the stars.

She had names for her favorites. The three bright ones in a row she called the Steps. The cluster of tiny ones near the north she called the Spilled Salt. The single very bright one low on the horizon she simply called the Lantern.

One night Yuki made a wish on the Lantern.

"I wish I could go up there," she whispered.

That night she dreamed she was an astronaut.

She was wearing a white suit with a gold visor, and she was floating — really floating — in the darkness between the stars. It wasn't cold or scary at all. It felt like swimming, but without the water, without the sound, without anything except stillness and light.

The Earth was below her, blue and white and round, turning slowly. She could see the curve of the oceans and the shapes of the continents through wisps of cloud. It looked, she thought, like the most beautiful marble she had ever seen.

She floated further out and found herself near the moon. Up close it was all silver and grey and covered in gentle hills and wide flat plains. She landed softly, her boots pressing into the dust that was as fine as flour.

She left footprints.

She stood there for a moment and looked back at the Earth. It was night on her side of the world, and she could see the soft glow of cities — not loud or busy from up here, just a warm scatter of light, like embers.

Somewhere in that glow, she thought, was her house. Her window. Her pillow.

She felt a long, quiet happiness.

A small silver spacecraft came gliding silently past. The pilot waved. Yuki waved back.

She looked up at the stars — all of them, billions of them, pouring across the darkness in a great river of light.

"Hello," she said to all of them.

And then, slowly, gently, she began to drift back toward home.

She woke up just as the sun was coming up, the room filled with early light. She lay still for a moment, remembering every detail.

Then she got up and looked out the window. The Lantern was gone — it only appeared at night. But she found it again that evening, steady and bright, right where it always was.

She smiled at it.

"Thank you," she said.
    `.trim(),
  },

  // ── Dreams ────────────────────────────────────────────────
  {
    id: 'dreams_door_in_the_garden',
    title: 'The Door in the Garden',
    category: 'Dreams',
    readingTime: 6,
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=400&fit=crop&q=80',
    text: `
In the corner of the old garden, behind the rosebushes and the leaning pear tree and the section of wall covered in soft green moss, there was a small wooden door that no one ever used.

Its paint was the color of the sky, faded and gentle. It had a round brass handle polished smooth from many hands. But in all the years that Eli had played in the garden, he had never once seen it open.

One night Eli dreamed he was standing in the garden.

The moon was up and everything was silver-blue — the grass, the roses, the pear tree, the old stone wall. Everything was still.

He walked to the corner.

The little door was glowing faintly around its edges, as if there was a warm light on the other side.

He turned the round brass handle. It moved easily, quietly, as if it had been waiting.

He stepped through.

On the other side was a valley he had never seen — wide and green and lit by a golden afternoon light that seemed to come from everywhere at once. There were hills covered in wildflowers and a river that made a sound like the softest music. In the distance, white birds circled lazily above a silver lake.

There were other children there, playing in the long grass, some he knew and some he didn't. A girl was braiding flowers into a crown. Two boys were building a small dam across the river, laughing quietly at how the water redirected itself.

Eli walked down into the valley. The air smelled of warm grass and clover and something sweet he couldn't name.

He played there for what felt like a long, lovely afternoon. He built a tower of flat stones. He waded in the cold water. He lay on his back and watched the birds and the slow-moving clouds.

When the sky began to turn the soft deep blue of early evening, he knew it was time to go back. He found the door — it was there in the hillside, exactly as he'd left it, the warm light still glowing at its edges.

He stepped through.

He was back in the garden. The moon was in the same place. The roses were still.

Eli stood there for a moment, feeling very full and very quiet.

He went back to bed and slept deeply and without any more dreams.

In the morning he ran straight to the garden. The little blue door was there, just as it always was. He tried the handle. It was locked, as it always had been.

But the brass was warm in his fingers.

And he smiled, because he knew — he would find it open again, someday, when it was time.
    `.trim(),
  },

  // ── Animals ──────────────────────────────────────────────
  {
  id: 'animals_hedgehog_lantern',
  title: 'The Hedgehog and the Lantern',
  category: 'Animals',
  readingTime: 6,
  image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&h=400&fit=crop&q=80',
  text: `
In a quiet meadow at the edge of the forest lived a small hedgehog named Theo.

Theo liked evenings best. When the sun dipped below the hills and the sky turned lavender and blue, the meadow became calm and peaceful.

One evening Theo noticed a warm golden light glowing softly between the tall grasses.

Curious, he waddled closer.

It was a lantern hanging from a crooked wooden post.

Inside the lantern was not a candle, but hundreds of tiny fireflies resting together. Their soft glow made the meadow look magical.

A field mouse named Lina peeked out from a nearby burrow.

"Oh good," she said. "You found the lantern."

"Who made it?" Theo asked.

"No one knows," said Lina. "But every evening it lights up the meadow so everyone can find their way home."

Theo sat beside the lantern for a while, watching the tiny lights drift gently inside the glass.

Soon the rabbits hopped past on their way to their burrows. The crickets began their quiet song. The sky filled with stars.

Theo felt warm and sleepy.

"Goodnight, lantern," he whispered.

And the lantern glowed softly as Theo curled up beneath the tall grass and drifted into a peaceful sleep.
`.trim(),
},

{
  id: 'animals_otter_river',
  title: 'The Otter and the Quiet River',
  category: 'Animals',
  readingTime: 6,
  image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&h=400&fit=crop&q=80',
  text: `
Along a winding river lived a playful young otter named Mira.

During the day Mira loved to splash and swim and slide down the muddy banks.

But when evening came, the river became quiet and still.

One night Mira floated gently on her back, watching the sky change from blue to deep purple.

The first star appeared.

Then another.

Soon the whole river reflected the stars like a shimmering mirror.

An old turtle slowly paddled past.

"Beautiful night," he said.

Mira nodded.

They drifted quietly together for a while.

The water moved slowly, rocking Mira like a cradle.

She listened to the soft lap of the river against the stones.

Her eyes grew heavy.

And before long the little otter fell asleep, floating peacefully beneath the starlit sky.
`.trim(),
},

// ── Adventure ────────────────────────────────────────────
{
  id: 'adventure_hidden_bridge',
  title: 'The Hidden Bridge',
  category: 'Adventure',
  readingTime: 6,
  image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=400&fit=crop&q=80',
  text: `
One summer afternoon, two friends named Noor and Elias followed a narrow path through the forest behind their village.

The path twisted between tall trees and mossy stones until it reached a small stream they had never seen before.

Across the stream stood a tiny wooden bridge.

"I don't remember this being here," Elias said.

The bridge looked old but sturdy, with smooth wooden rails and little flowers growing between the planks.

They crossed carefully.

On the other side the forest opened into a sunny clearing filled with butterflies.

The air smelled like warm pine and wildflowers.

They sat on a fallen log and watched the butterflies drift lazily through the sunlight.

"This might be my favorite place in the whole forest," Noor said.

Elias nodded.

They stayed until the sky began turning gold.

Then they crossed the little bridge again and followed the path home, knowing they had discovered a quiet secret place they could always return to.
`.trim(),
},

{
  id: 'adventure_boat_in_the_bay',
  title: 'The Small Boat in the Bay',
  category: 'Adventure',
  readingTime: 6,
  image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop&q=80',
  text: `
At the edge of a peaceful bay, a small wooden boat rocked gently against the dock.

A boy named Mateo loved to sit in that boat in the evenings.

One night he untied the rope just enough to drift a little way into the quiet water.

The boat moved slowly, carried by the soft tide.

Above him the sky was filled with stars.

The lighthouse on the distant cliff sent a bright beam across the sea.

Round and round it turned.

Mateo lay back and watched the sky.

The boat drifted softly, like a cradle.

The sea was calm. The wind was gentle.

For a moment it felt as if the whole ocean was peacefully breathing.

Mateo closed his eyes and listened to the quiet rhythm of the waves.

And the little boat rocked him gently into sleep.
`.trim(),
},

// ── Friendship ───────────────────────────────────────────
{
  id: 'friendship_two_clouds',
  title: 'The Two Clouds',
  category: 'Friendship',
  readingTime: 6,
  image: 'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=600&h=400&fit=crop&q=80',
  text: `
High in the sky floated two small clouds named Lilo and Piko.

All day they drifted slowly across the blue sky together.

They watched birds glide below them and shadows slide gently across the hills.

One evening the wind began to blow a little stronger.

Piko drifted ahead.

Lilo drifted behind.

For a moment they were far apart.

But soon the wind softened again.

Little by little they floated closer together until their edges touched once more.

"There you are," said Piko.

"Right here," said Lilo.

And together they drifted peacefully across the evening sky while the sun painted the clouds pink and gold.
`.trim(),
},

{
  id: 'friendship_the_shared_book',
  title: 'The Shared Book',
  category: 'Friendship',
  readingTime: 6,
  image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop&q=80',
  text: `
In a quiet library, two children named Sara and Milo both reached for the same book at the same time.

They looked at each other and laughed.

"You can read it first," Sara said.

"No, you can," said Milo.

Finally they had an idea.

They sat at a table together and read the book side by side.

The story was about explorers sailing across a shining sea.

Every few pages they whispered about what might happen next.

Soon they forgot they had ever been strangers.

When they finished the book, Milo closed it carefully.

"Same time tomorrow?" he asked.

Sara smiled.

"Same time tomorrow."
`.trim(),
},

// ── Magic ─────────────────────────────────────────────────
{
  id: 'magic_sleeping_forest',
  title: 'The Sleeping Forest',
  category: 'Magic',
  readingTime: 7,
  image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop&q=80',
  text: `
At the edge of a quiet valley stood a forest that only woke up at night.

During the day the trees looked ordinary.

But when the moon rose, tiny lights appeared among the branches.

A girl named Elin discovered the secret one evening while walking home late.

The leaves shimmered softly.

Fireflies floated like golden stars.

A narrow glowing path appeared between the trees.

Elin followed it slowly.

The deeper she walked, the calmer she felt.

The forest seemed to whisper gentle stories in the rustling leaves.

Soon she reached a small clearing filled with glowing mushrooms.

She sat down and listened to the quiet night.

When she finally walked home again, the glowing path faded behind her.

But she knew the forest would always be there, waiting for another peaceful night.
`.trim(),
},

{
  id: 'magic_starry_pocket',
  title: 'The Pocket Full of Stars',
  category: 'Magic',
  readingTime: 6,
  image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&h=400&fit=crop&q=80',
  text: `
One night a boy named Oliver discovered something surprising.

When he reached into the pocket of his jacket, he felt something sparkling.

He pulled out a tiny glowing star.

Then another.

And another.

His pocket was full of them.

He gently tossed them into the sky one by one.

Each star floated upward and joined the others.

Soon the sky glittered brighter than ever.

Oliver smiled.

He climbed into bed and looked out the window.

The stars twinkled softly.

And he fell asleep knowing he had helped light the night sky.
`.trim(),
},

// ── Space ─────────────────────────────────────────────────
{
  id: 'space_planet_garden',
  title: 'The Garden on a Small Planet',
  category: 'Space',
  readingTime: 6,
  image: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=600&h=400&fit=crop&q=80',
  text: `
Far away among the stars floated a tiny round planet covered entirely in flowers.

A young astronaut named Lina landed there one quiet night.

Every flower glowed faintly in the darkness.

Blue flowers. Pink flowers. Silver flowers.

The planet smelled sweet and peaceful.

Lina walked slowly through the glowing garden.

When she sat down among the flowers, they gently swayed as if saying hello.

She stayed for a long quiet while, watching the stars drift slowly across the sky.

Then she climbed back into her little spacecraft and waved goodbye.

The glowing garden grew smaller and smaller as she drifted back toward home.
`.trim(),
},

// ── Dreams ────────────────────────────────────────────────
{
  id: 'dreams_cloud_train',
  title: 'The Cloud Train',
  category: 'Dreams',
  readingTime: 6,
  image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&h=400&fit=crop&q=80',
  text: `
In a dream one night, Theo heard a soft whistle outside his window.

When he looked outside he saw a train made entirely of clouds.

The doors opened.

Theo stepped inside.

The train floated gently through the sky, passing stars and quiet moonlit hills.

Each carriage was softer than the last, filled with pillows and warm blankets.

The train moved slowly and peacefully across the night.

Soon Theo felt his eyes grow heavy.

He curled up in a soft cloud seat.

And the cloud train carried him gently through the quiet sky until morning.
`.trim(),
},

// ── Animals ──────────────────────────────────────────────
{
  id: 'animals_turtle_stars',
  title: 'The Turtle Who Counted the Stars',
  category: 'Animals',
  readingTime: 6,
  image: 'https://images.unsplash.com/photo-1490127252417-7c393f0b51f8?w=600&h=400&fit=crop&q=80',
  text: `
By a quiet lake lived a small turtle named Sol.

Every evening Sol climbed onto his favorite smooth stone to watch the sky.

He liked to count the stars.

"One star for the lake," he would whisper.

"One star for the trees."

"One star for the wind."

The frogs croaked softly in the reeds and the water shimmered with reflected light.

One night a young duck paddled close to Sol.

"What are you doing?" the duck asked.

"I'm counting the stars," said Sol.

"But there are too many."

Sol smiled.

"I know," he said. "That's why I do it slowly."

They sat together for a while.

The stars kept appearing, one by one, like tiny lanterns in the sky.

Soon the duck grew sleepy.

Sol did too.

He slid gently into the cool water and drifted beneath the quiet sky, dreaming of endless shining stars.
`.trim(),
},

{
  id: 'animals_deer_meadow',
  title: 'The Deer in the Silver Meadow',
  category: 'Animals',
  readingTime: 6,
  image: 'https://images.unsplash.com/photo-1501706362039-c6e80948bb16?w=600&h=400&fit=crop&q=80',
  text: `
At the edge of a quiet forest there was a wide meadow where the grass shimmered silver in the moonlight.

A young deer named Liri loved visiting that meadow.

Every night she stepped softly through the tall grass while the moon rose above the hills.

The crickets played their quiet music and the wind brushed gently across the field.

One evening an old stag joined her.

"This meadow has been here a very long time," he said.

"It feels peaceful," Liri said.

"It is," said the stag.

They stood together watching the moon climb higher.

Soon the silver grass swayed like waves on the ocean.

Liri lay down in the soft grass.

The night air was cool and calm.

And before long the young deer drifted into sleep while the meadow shimmered quietly beneath the stars.
`.trim(),
},

// ── Adventure ────────────────────────────────────────────
{
  id: 'adventure_island_path',
  title: 'The Path on the Small Island',
  category: 'Adventure',
  readingTime: 6,
  image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop&q=80',
  text: `
A small island rested quietly in the middle of a blue lake.

Two friends named Theo and Arin rowed their little boat there one calm afternoon.

When they stepped onto the island they noticed a narrow winding path through the tall grass.

"Let's see where it goes," said Theo.

The path curved past smooth stones and clusters of wildflowers.

Butterflies drifted slowly in the warm air.

Soon they reached the center of the island where a single old tree stood.

Its branches stretched wide like open arms.

They climbed onto a low branch and sat together watching the lake sparkle around them.

The sun slowly began to set.

The water turned gold and pink.

"It feels like we discovered a secret place," Arin said.

Theo nodded.

They followed the path back to their boat, knowing the quiet island would always be there waiting for another peaceful adventure.
`.trim(),
},

{
  id: 'adventure_hill_wind',
  title: 'The Hill Where the Wind Sings',
  category: 'Adventure',
  readingTime: 6,
  image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=400&fit=crop&q=80',
  text: `
Behind a small village there was a grassy hill where the wind always sang.

Two siblings named Maya and Lio climbed the hill one evening just before sunset.

The wind moved gently through the tall grass, making a soft whispering sound.

"It sounds like music," said Maya.

They sat at the top of the hill and listened.

The sky slowly filled with colors — orange, pink, and violet.

Birds glided quietly overhead on their way home.

Lio stretched out on the warm grass.

The wind hummed softly around them.

"It's the best place to watch the sky," he said.

Maya nodded.

They stayed until the first stars appeared.

Then they walked down the hill together while the wind continued its quiet song behind them.
`.trim(),
},

// ── Friendship ───────────────────────────────────────────
{
  id: 'friendship_firefly_path',
  title: 'The Path of Fireflies',
  category: 'Friendship',
  readingTime: 6,
  image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=400&fit=crop&q=80',
  text: `
One warm summer evening two friends named Lina and Noor walked along a forest path.

As the sky darkened, tiny lights began appearing around them.

Fireflies.

Hundreds of them.

They blinked softly in the air like floating stars.

Lina laughed.

"It's like the forest made its own sky," she said.

The fireflies drifted slowly along the path, lighting the way forward.

The two friends followed the glowing trail deeper into the woods.

Soon they reached a small clearing filled with even more golden lights.

They sat in the grass together and watched the quiet glowing dance.

Neither of them said much.

They didn't need to.

Some evenings were perfect just as they were.
`.trim(),
},

{
  id: 'friendship_shared_swing',
  title: 'The Swing Under the Oak',
  category: 'Friendship',
  readingTime: 6,
  image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop&q=80',
  text: `
In the middle of a small park stood a large oak tree.

From one strong branch hung an old wooden swing.

Two friends named Alba and Kian loved to take turns on the swing every evening.

One would push while the other soared gently through the air.

Higher and higher the swing would glide.

The leaves rustled softly above them.

Soon the sun began to set and the sky turned warm and golden.

Kian slowed the swing until it moved only a little.

They sat together on the wooden seat, watching the colors fade into night.

"It's the quietest place in the park," Alba said.

"And the best," said Kian.

They stayed until the stars appeared above the oak tree.
`.trim(),
},

// ── Magic ─────────────────────────────────────────────────
{
  id: 'magic_whispering_lake',
  title: 'The Whispering Lake',
  category: 'Magic',
  readingTime: 7,
  image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=400&fit=crop&q=80',
  text: `
Deep in the mountains there was a lake so still it looked like a mirror.

A girl named Elia discovered it while walking along a quiet forest trail.

When she knelt beside the water she heard something surprising.

The lake was whispering.

Soft gentle voices drifted across the surface like wind through grass.

They were stories.

Stories of clouds crossing the sky.

Stories of birds flying over distant valleys.

Stories of travelers who once rested beside the water.

Elia sat quietly and listened.

The lake spoke slowly and peacefully.

When the moon rose above the mountains the whispers grew softer.

Elia thanked the lake and walked back through the forest.

She carried the quiet stories with her all the way home.
`.trim(),
},

{
  id: 'magic_lantern_tree',
  title: 'The Lantern Tree',
  category: 'Magic',
  readingTime: 6,
  image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&h=400&fit=crop&q=80',
  text: `
In the center of a quiet village square stood a tall tree.

Every night small lanterns appeared among its branches.

No one knew who placed them there.

They simply glowed softly like warm stars.

Children would gather beneath the tree to watch the lights sway in the evening breeze.

One night a boy named Sami counted them.

There were dozens.

Each lantern glowed a slightly different color.

Gold. Blue. Silver.

The lights flickered gently as if the tree itself were breathing.

Soon the whole square felt calm and peaceful.

Sami leaned against the trunk and looked up at the glowing branches.

And before long he drifted into sleep beneath the magical lantern tree.
`.trim(),
},

// ── Dreams ────────────────────────────────────────────────
{
  id: 'dreams_sailing_clouds',
  title: 'Sailing on the Clouds',
  category: 'Dreams',
  readingTime: 6,
  image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&h=400&fit=crop&q=80',
  text: `
One night Mila dreamed she was sailing across the sky.

Her boat was made of soft white clouds.

The wind carried her slowly above sleeping towns and dark forests.

Below her rivers shimmered like silver ribbons.

Above her the stars shone brighter than ever.

The boat moved gently, rocking like a cradle.

A small glowing star drifted close and floated beside the boat.

"Where are you going?" Mila asked.

"Everywhere," said the star.

They traveled quietly together through the peaceful sky.

Soon Mila felt sleepy.

She lay down in the cloud boat and watched the stars blur into soft glowing shapes.

And the cloud boat carried her gently into deeper dreams.
`.trim(),
},

{
  id: 'dreams_starry_bridge',
  title: 'The Bridge of Stars',
  category: 'Dreams',
  readingTime: 6,
  image: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=600&h=400&fit=crop&q=80',
  text: `
In a dream one night, a boy named Tomas found himself standing at the edge of a wide dark sky.

Across the sky stretched a bridge made entirely of stars.

Each step sparkled softly beneath his feet.

He walked slowly across the glowing path.

Below him the night stretched endlessly.

Above him the moon shone bright and calm.

Halfway across the bridge he stopped and looked around.

The stars shimmered gently in every direction.

It felt peaceful and quiet.

Tomas continued walking until he reached the other side where a warm golden light waited.

And as he stepped into that light, the dream slowly faded into morning.
`.trim(),
  },
]