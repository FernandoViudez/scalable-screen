
// let itemsArray = [];
// let staticItemsArray = ["div1", "div2", "div3"];
// let con = 0;

// window.onload = () => {
    // staticItemsArray.forEach(item => {
        // itemsArray.push({
        //     name: item,
        //     enabled: item == "div1" ? true : false,
        // })
    // });

//     checkItems();
// }

// function next() {
//     con++;

//     if (con >= itemsArray.length) return con = itemsArray.length - 1;

//     // Actions when you need to load the new div
//     itemsArray[con].enabled = true;

//     checkItems();
// }

// function previous() {
//     if (con <= 0) return con = 0;

//     // Actions when you need to hide the current div
//     itemsArray[con].enabled = false;

//     con--;

//     checkItems();
// }

// function checkItems() {
//     itemsArray.forEach(item => {
//         if (item.enabled) {
//             document.getElementById(item.name).style.display = "flex";
//         } else {
//             document.getElementById(item.name).style.display = "none";
//         }
//     })
// }

function showDivs(arrayOfDivsToShow, hideOther, arrayOfDivsToHide) {
    // Show divs into the array
    arrayOfDivsToShow.forEach(item => {
        document.getElementById(item).style.display = "flex";
    })

    // If you need to hide other, just read the array and show them
    if (hideOther) {
        arrayOfDivsToHide.forEach(item => {
            document.getElementById(item).style.display = "none";
        })
    }
}

function hideDivs(arrayOfDivsToHide, showOther, arrayOfDivsToShow) {

    // Hide divs into the array
    arrayOfDivsToHide.forEach(item => {
        document.getElementById(item).style.display = "none";
    })

    // If you need to shoe other, just read the array and show them
    if (showOther) {
        arrayOfDivsToShow.forEach(item => {
            document.getElementById(item).style.display = "flex";
        })
    }
}