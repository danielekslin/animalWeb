// const express = require('express');
// const app = express();
// const { json } = require("express");
// const fs = require('fs');
// const port = 3100;



// app.use(express.json())
// app.use(express.urlencoded({extended:true}));

// if(!fs.existsSync('animal.json')){
//     fs.writeFileSync('animal.json','[]')
// }


// app.get('/all', (req,res)=>{
//     let animalInfo = fs.readFileSync('animal.json').toString()
//     let y = JSON.parse(animalInfo)
//     res.send(y)
//     res.status(200)
// })

// app.get('/data',(req,res)=>{
//     let z = fs.readFileSync('animal.json').toString()
//     let x = JSON.parse(z)
//     res.send(`<h2>hellooooo</h2>
//                <p>${x}</p>`)
// })

// app.post('/data',(req,res)=>{
//     let d = fs.readFileSync('animal.json').toString()
//     d = JSON.parse(d)
    
//     d.push(req.body)

//     fs.writeFileSync('animal.json',JSON.stringify(d))
//     res.send(`<p>the data is:${d}</p>`)
// })


// app.post('/add',(req,res)=>{

//     let newAnimalInfo = fs.readFileSync('animal.json').toString();
//     newAnimalInfo = JSON.parse(newAnimalInfo)
//       //לוקח את המידע הקיים ודוחף אליו מידע חדש
//     newAnimalInfo.push(req.body)
//     // כותב מידע חדש בחזרה
//     fs.writeFileSync('animal.json',JSON.stringify(newAnimalInfo));

    
//     res.status(201)
//     res.send('new data written')
   
// })

// app.put('/update/:animal',(req,res)=>{
//     let updatedAnimal = JSON.parse(fs.readFileSync('animal.json').toString())

//     let myAnimal = updatedAnimal.find(a==a.animalName===req.params.animal)

//     if(myAnimal !== undefined){
//     myAnimal.animalInfo = req.body.animalNewInfo
//     // כותב מידע ערוך וחדש בחזרה
//     fs.writeFileSync('animal.json',JSON.stringify(updatedAnimal))
//     res.send('animal data was changed succsesfully')
// }
// res.send('no data was changed')
// })

// app.delete('/delete/:life',(req,res)=>{
//     let deleteAnimal = JSON.parse(fs.readFileSync('animal.json').toString())

//     let length = deleteAnimal.length

//     deleteAnimal = deleteAnimal.filter(n => n.lifespan != +req.params.life)

//     if(deleteAnimal.length < length){
//         fs.writeFileSync('animal.json',JSON.stringify(deleteAnimal))
//         res.send('animal was deleted succsesfully')
//     }
//     res.send('no animal was harmed during the process')
// })




// app.listen(port, ()=>console.log(`listening in port ${port}`))





const { json } = require("express");
const express = require("express");
// const connectDb = require('./DBconnect/connection')
const fs = require('fs');
const Form = require('./models/form');

const mango = require('mongoose');
const uri = 'mongodb+srv://ekslin123:ekslin123@cluster0.glrty.mongodb.net/db-name?retryWrites=true&w=majority';

mango.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>console.log('connected to db'))
.catch((err)=>console.log(err));


const app = express();
const PORT = 3000;

//creating ablity to use public directory
app.use(express.static("public"));

app.get('/add-form',(req,res)=>{
  const form2 = new Form({
      userName: 'daniDb'
  });
  form2.save().then((result)=> {
      res.send(result)
  }).catch((err)=>{
      console.log(err)
  });
})

// app.use('/api/userModel',require('./API/User'))


// like toString
app.use(express.json({extended: false}));
// app.use(express.urlencoded({extended:true}))

if(!fs.existsSync('recipe.json')){
    fs.writeFileSync('recipe.json','[]')
}

app.get('/show',(req,res)=>{
    let theCode = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <!-- JavaScript Bundle with Popper -->
      <title>my animal/trips website</title>
    
      <link rel="stylesheet" href="style.css">
    </head>
       
        
    
    <body>
        <!-- <table id="recipes" border="1"></table> -->
        <header>
            
            <nav>
        <h3 style="text-align: center;">my Animals/Trips website</h3>
                    <ul>
                        <li><a href="http://localhost:3000/translated">hebrew page</a></li>
                    </ul>
             </nav>
           
        </header>
    
        
        
       
         <div id="firstDiv">
             <h3 id="creatureName">elephant</h3>
             <h3 id="creatureName">whale</h3>
             <h3 id="creatureName">mouse</h3>
             <h3 id="creatureName">eagle</h3>
             <!-- width was 350px for img -->
            <img src="elephant-g301930c9a_640.jpg" height="200px" width="200px">
            
            <img src="humpback-g4875139ca_640.jpg" height="200px" width="200px">
            <img src="mouse-gfbfb26bed_640.jpg" height="200px" width="200px"> 
            <img src="bird-ga0064536f_640.jpg" height="200px" width="200px">
    
            <!-- <p id="para">Lorem ipsum dolor sit amet <br>consectetur adipisicing elit. </p>     <br>     
                  <p id="para">Lorem ipsum dolor sit amet consectetur <br>adipisicing elit. </p>
                       <p id="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p id="para">Lorem ipsum, dolor sit amet consectetur </p> -->
            
            <textarea name="elephant" id="animalsText" cols="31" rows="13"> The African elephant is the world's largest land mammal with males on average measuring up to 3m high and weighing up to 6 tonnes. Males only reach their full size at 35-40 years - that's well over half their lifespan as wild elephants can live for up to 60-70 years</textarea>
            <textarea name="lizard" id="animalsText" cols="31" rows="13">Whales are a widely distributed and diverse group of fully aquatic placental marine mammals. They are an informal grouping within the infraorder Cetacea, which usually excludes dolphins and porpoises. Whales, dolphins and porpoises belong to the order Cetartiodactyla,</textarea>
            <textarea name="whale" id="animalsText" cols="31" rows="13">A Mouse is a small mammal. Characteristically, mice are known to have a pointed snout, small rounded ears, a body-length scaly tail, and a high breeding rate. The best known mouse species is the common house mouse</textarea>
            <textarea name="mouse" id="animalsText" cols="31" rows="13">Eagles are some of the largest birds. They are at the top of the food chain, with some species feeding on big prey like monkeys and sloths. Eagles have amazing eyesight and can detect prey up to two miles away.</textarea>
        </div>
    
      
      
    
      
       <br>
        <form class="animal">
            <h2 class="an1">Animals</h2>
            <br><br>
            <p class="an2">Do you want to add info for animals?</p>
    
            <input type="radio" name="yes" id="option-1" class="an2">
            <label for="option-1" class="an2">yes</label>
            <input type="radio" name="no" id="option-2" >
            <label for="option-2">no</label>
            <br><br>
            <label for="name">Enter your name:</label>
          <input type="text" id="name" placeholder="Enter your name..">
          <br><br>
            <label for="AniSpecie">Choose animal species</label>
            <select name="AniSpecie" id="AniSpecie">
            <option value="An1">Mammals</option><br>
            <option value="An2">Birds</option><br>
            <option value="An3">Lizards</option><br>
        </select>
            <br><br>
            <label for="animalData">Add info about the animal</label><br>
            <textarea name="animalData" id="animalData" cols="30" rows="10" placeholder="About the animal..."></textarea>
            <br><br>
            <button type="submit" onclick="myfunc()">add</button>
        </form>
        <br><br>
        <div id="secondDiv">
        <h3 id="creatureName2">ashdod</h3>
             <h3 id="creatureName2">galil</h3>
             <h3 id="creatureName2">negev</h3>
             <h3 id="creatureName2">jerusalem</h3>
            
            <img src="away-g0c8747752_640.jpg" height="200px" width="200px">
            
            <img src="flower-field-g7a39d2233_640.jpg" height="200px" width="200px">
            <img src="mountains-ga8afe1ed6_640.jpg" height="200px" width="200px"> 
            <img src="mountains-g7d073cdfa_640.jpg" height="200px" width="200px">
    
           
            
            <textarea name="elephant" id="animalsText2" cols="31" rows="13">loloLorem loloLorem loloLorem loloLorem loloLorem loloLorem loloLorem loloLorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde, laudantium facilis dignissimos totam quas. Quisquam alias aliquam dolor nisi vitae quas quaerat! Impedit ab in omnis corporis distinctio amet?</textarea>
            <textarea name="lizard" id="animalsText2" cols="31" rows="13">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odio nemo aspernatur, assumenda hic harum id itaque ad. Vel eveniet cumque ut ipsa dignissimos ea quaerat ullam aut beatae odit!</textarea>
            <textarea name="whale" id="animalsText2" cols="31" rows="13">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quisquam nostrum itaque facere nihil autem expedita nulla obcaecati dolor, voluptatibus, labore exercitationem delectus. Perferendis aperiam ipsa exercitationem incidunt obcaecati ex.</textarea>
            <textarea name="mouse" id="animalsText2" cols="31" rows="13">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur atque natus expedita magnam dolorum iste saepe recusandae soluta delectus impedit perspiciatis vel, aut ipsa dolore sed perferendis temporibus. Quo, amet.</textarea>
        </div>
        <form class="trips">
                    <h2>Trips</h2>
                  <br><br>
                  <p>Do you want to add info for trips?</p>
                  <input type="radio" name="yes" id="option-3">
                    <label for="option-3">yes</label>
                  <input type="radio" name="no" id="option-4" >
                   <label for="option-4">no</label>
            <br><br>
            <label for="name2">Enter your name:</label>
          <input type="text" id="name2" placeholder="Enter your name..">
          <br><br>
          <label for="loacation">Location for Trip</label>
            <select name="loacation" id="loacation">
            <option value="T1">Jerusalem</option><br>
            <option value="T2">Galil-Kineret</option><br>
            <option value="T3">Negev</option><br>
        </select>
        <br><br>
            <label for="TripData">Add info about the Trip</label><br>
            <textarea name="TripData" id="TripData" cols="30" rows="10" placeholder="About the trip..."></textarea>
            <br><br>
            <button type="submit" >add</button>
        </form>
    
    
    </body>
    
    <script>
        let animalForm = document.getElementById('animal');
    
        animalForm.addEventListener('submit',function(event){
            event.preventDefault();
            let name = document.getElementById('name').value
            console.log(name)
            let creaturedata = document.getElementById('animalData').value
            console.log(creaturedata)
        })
    
        function myfunc(){
          let showName = document.getElementById('name').value
           console.log(showName)
        }
    
        var tripForm = document.getElementById('trips');
    
        tripForm.addEventListener('submit',function(event){
            event.preventDefault();
            var Name2 = document.getElementById('name2').value
            console.log(Name2)
            var tripdata = document.getElementById('TripData').value
            console.log(tripdata)
        })
    </script>
    </html>`
    res.send(theCode)
})

app.get('/translated',(req,res)=>{
    let hebrewCode = `<!DOCTYPE html>
    <html lang="">
    <head>
      <!-- JavaScript Bundle with Popper -->
      <title>אתר החיות/טיולים שלי</title>
    
      <link rel="stylesheet" href="style.css">
    </head>
       
        
    
    <body>
        <title>תרגום לעברית</title>
        <!-- <table id="recipes" border="1"></table> -->
        <header>
            
            <nav>
        <h3 style="text-align: center;">אתר הטיולים/והחיות שלי</h3>
                    <ul>
                        <li><a href="http://localhost:3000/show">לאתר באנגלית</a></li>
                    </ul>
             </nav>
           
        </header>
    
        
        
       
         <div id="firstDiv">
             <h3 id="creatureName">פיל</h3>
             <h3 id="creatureName">לוייתן</h3>
             <h3 id="creatureName">עכבר</h3>
             <h3 id="creatureName">נשר</h3>
             <!-- width was 350px for img -->
            <img src="elephant-g301930c9a_640.jpg" height="200px" width="200px">
            
            <img src="humpback-g4875139ca_640.jpg" height="200px" width="200px">
            <img src="mouse-gfbfb26bed_640.jpg" height="200px" width="200px"> 
            <img src="bird-ga0064536f_640.jpg" height="200px" width="200px">
    
            <!-- <p id="para">Lorem ipsum dolor sit amet <br>consectetur adipisicing elit. </p>     <br>     
                  <p id="para">Lorem ipsum dolor sit amet consectetur <br>adipisicing elit. </p>
                       <p id="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p id="para">Lorem ipsum, dolor sit amet consectetur </p> -->
            
            <textarea name="elephant" id="animalsText" cols="31" rows="13"> הפיל האפריקאי הוא היונק היבשתי הגדול בעולם עם זכרים בממוצע בגובה של עד 3 מ' ומשקל של עד 6 טון. הזכרים מגיעים לגודלם המלא רק בגיל 35-40 שנים - זה הרבה יותר ממחצית תוחלת חייהם שכן פילי בר יכולים לחיות עד 60-70 שנים</textarea>
            <textarea name="lizard" id="animalsText" cols="31" rows="13">לווייתנים הם קבוצה בתפוצה רחבה ומגוונת של יונקים ימיים שליה מימית מלאה. הם קבוצה בלתי רשמית בתוך סדר אינפרא-Cetacea, אשר בדרך כלל אינו כולל דולפינים ודובנים. לווייתנים, דולפינים ופורפוסים שייכים לסדר Cetartiodactyla,</textarea>
            <textarea name="whale" id="animalsText" cols="31" rows="13">עכבר הוא יונק קטן. באופן אופייני, ידוע כי לעכברים יש חוטם מחודד, אוזניים קטנות מעוגלות, זנב קשקשי באורך הגוף וקצב רבייה גבוה. זן העכברים הידוע ביותר הוא עכבר הבית המצוי</textarea>
            <textarea name="mouse" id="animalsText" cols="31" rows="13">נשרים הם חלק מהציפורים הגדולות ביותר. הם נמצאים בראש שרשרת המזון, עם כמה מינים שניזונים מטרף גדול כמו קופים ועצלנים. לנשרים יש ראייה מדהימה והם יכולים לזהות טרף במרחק של עד שני קילומטרים.</textarea>
        </div>
    
      
      
    
      
       <br>
        <form class="animal">
            <h2 class="an1">חיות</h2>
            <br><br>
            <p class="an2">אתה רוצה להוסיף מידע על חיות?</p>
    
            <input type="radio" name="yes" id="option-1" class="an2" >
            <label for="option-1" class="an2">כן</label>
            <input type="radio" name="no" id="option-2" >
            <label for="option-2">לא</label>
            <br><br>
            <label for="name">הקלד את שמך</label>
          <input type="text" id="name" placeholder="..הקלד את שמך">
          <br><br>
            <label for="AniSpecie">בחר סוג חיה</label>
            <select name="AniSpecie" id="AniSpecie">
            <option value="An1">יונקים</option><br>
            <option value="An2">ציפורים</option><br>
            <option value="An3">לטאות</option><br>
        </select>
            <br><br>
            <label for="animalData">הוסף מידע לגבי החיה</label><br>
            <textarea name="animalData" id="animalData" cols="30" rows="10" placeholder="...לגבי החיה"></textarea>
            <br><br>
            <button type="submit" onclick="myfunc()">הוסף</button>
        </form>
        <br><br>
        <div id="secondDiv">
        <h3 id="creatureName2">אשדוד</h3>
             <h3 id="creatureName2">גליל</h3>
             <h3 id="creatureName2">נגב</h3>
             <h3 id="creatureName2">ירושלים</h3>
            
            <img src="away-g0c8747752_640.jpg" height="200px" width="200px">
            
            <img src="flower-field-g7a39d2233_640.jpg" height="200px" width="200px">
            <img src="mountains-ga8afe1ed6_640.jpg" height="200px" width="200px"> 
            <img src="mountains-g7d073cdfa_640.jpg" height="200px" width="200px">
    
           
            
            <textarea name="elephant" id="animalsText2" cols="31" rows="13">אַשְׁדּוֹד היא העיר הגדולה במחוז הדרום בגודל אוכלוסייתה, והשישית בגודל אוכלוסייתה במדינת ישראל. היא נוסדה ב-1956 והוכרזה כעיר ב-1968. העיר שוכנת לחופו של הים התיכון במישור החוף הדרומי, מדרום ליבנה, מצפון לאשקלון וממערב לגן יבנה, בקצה הדרומי של מטרופולין גוש דן.</textarea>
            <textarea name="lizard" id="animalsText2" cols="31" rows="13">הַגָּלִיל הוא חבל ארץ הררי בצפון ארץ ישראל. גבולותיו של הגליל הם עמק יזרעאל ועמק בית שאן בדרום, בקעת הירדן, הכנרת ועמק החולה במזרח, חוף הים התיכון ועמק זבולון במערב, ודרום לבנון בצפון. בקרב הקהילה הגאוגרפית בישראל מקובל לראות בגבול המדיני בין מדינת ישראל ללבנון כגבולו הצפוני של הגליל</textarea>
            <textarea name="whale" id="animalsText2" cols="31" rows="13">הַנֶּגֶב הוא אזור גאוגרפי המשתרע בחלקה הדרומי של ארץ ישראל. הנגב הוא חלק מרצועת המדבריות העולמית, וזו הסיבה לתנאי האקלים השוררים בו. הנגב מכסה כ-60% משטח מדינת ישראל, ובחלקו הקטן הוא נמצא מחוץ לה. קיימות הגדרות שונות לתיחום המדויק של הנגב, שניתנו על ידי חוקרים שונים</textarea>
            <textarea name="mouse" id="animalsText2" cols="31" rows="13">יְרוּשָׁלַיִם היא עיר הבירה של מדינת ישראל, והעיר הגדולה ביותר בישראל בגודל האוכלוסייה. נכון לשנת 2021, מתגוררים בה כ-957 אלף תושבים. בירושלים שוכנים מוסדות הממשל של ישראל: הכנסת, בית המשפט העליון, משכן הנשיא, בית ראש הממשלה ורוב משרדי הממשלה</textarea>
        </div>
        <form class="trips">
                    <h2>טיולים</h2>
                  <br><br>
                  <p>אתה רוצה להוסיף מידע לגבי טיולים?</p>
                  <input type="radio" name="yes" id="option-3">
                    <label for="option-3">כן</label>
                  <input type="radio" name="no" id="option-4" >
                   <label for="option-4">לא</label>
            <br><br>
            <label for="name2">הקלד את שמך:</label>
          <input type="text" id="name2" placeholder="..הקלד את שמך">
          <br><br>
          <label for="loacation">יעד לטיול</label>
            <select name="loacation" id="loacation">
            <option value="T1">ירושלים</option><br>
            <option value="T2">גליל-כינרת</option><br>
            <option value="T3">נגב</option><br>
        </select>
        <br><br>
            <label for="TripData">הוסף מידע לגבי הטיול</label><br>
            <textarea name="TripData" id="TripData" cols="30" rows="10" placeholder="...לגבי הטיול"></textarea>
            <br><br>
            <button type="submit" >הוסף</button>
        </form>
    
    
    </body>
    
    <script>
        let animalForm = document.getElementById('animal');
    
        animalForm.addEventListener('submit',function(event){
            event.preventDefault();
            let name = document.getElementById('name').value
            console.log(name)
            let creaturedata = document.getElementById('animalData').value
            console.log(creaturedata)
        })
    
        function myfunc(){
          let showName = document.getElementById('name').value
           console.log(showName)
        }
    
        var tripForm = document.getElementById('trips');
    
        tripForm.addEventListener('submit',function(event){
            event.preventDefault();
            var Name2 = document.getElementById('name2').value
            console.log(Name2)
            var tripdata = document.getElementById('TripData').value
            console.log(tripdata)
        })
    </script>
    </html>`
    res.send(hebrewCode);
})

// sending the array of the recipes to the client
app.get('/all', (req,res) =>{
    let recipeArr = fs.readFileSync('recipe.json').toString()
    res.send(recipeArr)
    res.status(200)
})



//adding new recipe
app.post('/add',(req,res)=>{
    // get all the arr from the file & convert to json
    let recipeArr = JSON.parse(fs.readFileSync('recipe.json').toString())
    // adding new recipe from req.body to the array
    recipeArr.push(req.body)
    // wrting new array back to the file
    fs.writeFileSync('recipe.json',JSON.stringify(recipeArr))
    
    res.send('new recipe was added succsesfully')
    res.status(201)

})


//update recipe's difficulty
app.put('/update/:food', (req,res)=>{
    //get all the array from the file & convert to json arr
    let recipeArr = JSON.parse(fs.readFileSync('recipe.json').toString())

    // find the first elemental that return true for condition
    let myRecipe = recipeArr.find(r=>r.foodName ===req.params.food)

    if(myRecipe !== undefined){
        myRecipe.difficulty = req.body.newDifficulty
        //write new arr back to the file
        fs.writeFileSync('recipe.json',JSON.stringify(recipeArr))
        res.send("recipe's difficulty was updated succesfully")
    }
    res.send("no recipe was updated")
})



//delete recipe by id
app.delete('/delete/:id', (req,res)=>{
    // agien get all arr from file and convert to json arr..
    let recipeArr = JSON.parse(fs.readFileSync('recipe.json').toString())
    
    let len = recipeArr.length
     // doing prefix(+) to params since its originlly a string
    recipeArr = recipeArr.filter(r => r.id != +req.params.id)

    // if recipe was deleted:
    if(recipeArr.length < len){
        fs.writeFileSync('recipe.json',JSON.stringify(recipeArr))
        res.send("recipe was deleted succesfully")
    }
    res.send("no recipe was deleted")
})



// listen(port, callback function) -> activate the app
app.listen(PORT, () => console.log(`Listening in port ${PORT}...`));
