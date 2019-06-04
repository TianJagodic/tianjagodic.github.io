const ImageList = document.querySelector('#listOfImages');

    function renderImage(doc){
        let img = document.createElement('img');
        let name = document.createElement('span');

        name.textContent = doc.data().name;
        url= doc.data().url;
        img.appendChild(name);
        img.className = "imgRenders";


        var test = url;
        img.src= test;



        ImageList.appendChild(img);
    }

db.collection('Renders').get().then((snapshot) => {
    console.log(snapshot.docs);
    snapshot.docs.forEach(doc => {
        renderImage(doc);
    });
});
