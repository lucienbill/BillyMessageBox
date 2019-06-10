# In English
## What am I looking at?
This is a simple tool that display some predefined messages in random order at regular intervals.

[Here is what it looks like](https://twitter.com/BillyTheTroll/status/1137787015540482050)

## Who is this for?
Do you stream on Twitch or YouTube? Would you like some funny messages to be displayed on your stream? Then you are the targeted audience.
If you want to use this with [OBS](https://obsproject.com/fr):
1. Download the files on your computer (example: `C:/somefolder/stream`)
2. In OBS, create a new "Browser" source, and enter the path to the HTML file (example: `C:/somefolder/stream/printSomeRandomPeriodicMessages.html`)
3. Place your source in the appropriate location. Tip: change the time interval in `printSomeRandomPeriodicMessages.html` to 3 seconds just to try and see how things work.
4. Customize everything (the colors, the messages, the animations...)

Notes:
- That's right, my thing doesn't require a webserver.
- The messages are stored in `lib_messages.js`
- The animations and styles are coded id `style.css`

## But, why?
I occasionally watch Overwatch League's official streams, it's neatly produced. Sometimes, some relevant facts are displayed on the screen (here is an [example](https://clips.twitch.tv/DarkTardyWoodpeckerAMPEnergy)). I thinks it is very cool, and it inspired me to do this.

## Great, but can it do <some specific stuff I haven't coded>?
No, it can't... Unless you code it. Please do fork/copy/adapt/redistribute my code. It's there, it's free, enjoy!

## I want to tweak it. What do I need to know?
You need to learn a bit of HTML, CSS and Javascript. If you're a noob it's okay: try, fail, learn and eventually you'll do some magic.
If you're realy lost, submit an issue and I'll look into it.

# En Français
## C'est quoi ce truc ?
Ceci est un outil simple pour afficher des messages prédéfinis dans le désordre à intervalles réguliers.

[Voici à quoi cela ressemble](https://twitter.com/BillyTheTroll/status/1137787015540482050)

## A qui est-ce destiné ?
Vous streamez sur Twitch ou sur YouTube ? Vous souhaiteriez afficher quelques messages un peu débiles sur votre stream ? Alors vous êtes le public ciblé.
Pour utiliser cet outil avec [OBS](https://obsproject.com/fr):
1. Téléchargez les fichiers sur votre ordinateur (exemple: `C:/somefolder/stream`)
2. dans OBS, créez une source de type "navigateur" et entrez le chemin du fichier HTML (exemple: `C:/somefolder/stream/printSomeRandomPeriodicMessages.html`)
3. Placez la source à l'endroit qui convient le mieux. Astuce : changez le timing 'interval' dans `printSomeRandomPeriodicMessages.html` à 3 seconds juste pour essayer et voir comment tout fonctionne.
4. Customisez tout (les couleurs, les messages, les animations...)

Notes:
- Vous ne rêvez pas, mon truc n'a pas besoin d'un webserveur pour fonctionner
- Les messages sont stockés dans `lib_messages.js`
- Les animations et les tyles sont gérés dans `style.css`

## Mais, pourquoi ?
Je regarde parfois les streams officiels de l'Overwatch League, c'est vraiment bien produit. De temps en temps la réal affiche des messages avec quelques informations pertinentes à l'écran (voici un [exemple](https://clips.twitch.tv/DarkTardyWoodpeckerAMPEnergy)). Je trouve que c'est très cool, je m'en suis inspiré.

## C'est cool, mais est-ce que ça peut faire <truc spécifique que je n'ai pas codé>?
Non, pas vraiment... Sauf si vous le codez. Je vous inviter à forker/copier/adapter/redistribuer mon code. Il est là, il est gratuit, profitez-en !

## Je veux le bidouiller. Qu'ai-je besoin de savoir ?
Vous aurez besoin d'apprendre un peu d'HTML, de CSS et de Javascript. Si vous débutez ce n'est pas grave : essayez, échouez, apprenez et recommencez, vous finirez par faire des étincelles.
Si vous êtes vraiment perdu, soumettez une "issue" et je regarderai ce que je peux faire
