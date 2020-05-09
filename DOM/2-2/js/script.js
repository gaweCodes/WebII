function task1() {
  const tr = document.getElementById("data1");
  console.log(tr.firstChild.nextSibling.firstChild.nodeValue);
}
function Task2() {
  const allTr = document.getElementsByTagName("tr");
  for (let i = 0; i < allTr.length; i++) {
    const dataElement = allTr[i].firstChild.nextSibling;
    if (dataElement.nodeName === "TD") {
      console.log(dataElement.firstChild.nodeValue);
    }
  }
}

function Task3() {
  const allBrightElements = document.getElementsByClassName("bright");
  for (let i = 0; i < allBrightElements.length; i++) {
    allBrightElements[i].removeAttribute("class");
  }
}

function Task4(element) {
  document.getElementById("data" + element).setAttribute("class", "bright");
}

function Task5() {
  document.getElementById("data3").lastChild.previousSibling.previousSibling
    .previousSibling.firstChild.nodeValue++;
}

function Task6(name) {
  const allTd = document.getElementsByTagName("td");
  for (let i = 0; i < allTd.length; i++) {
    const element = allTd[i];
    if (element.firstChild.nodeValue === name) {
      element.nextSibling.nextSibling.nextSibling.nextSibling.firstChild
        .nodeValue++;
    }
  }
}

function Task7() {
  let stuff = new Array(
    {
      firstname: undefined,
      lastname: undefined,
      age: undefined,
      department: undefined,
    },
    {
      firstname: undefined,
      lastname: undefined,
      age: undefined,
      department: undefined,
    },
    {
      firstname: undefined,
      lastname: undefined,
      age: undefined,
      department: undefined,
    }
  );
  const data1 = document.getElementById("data1");
  stuff[0].firstname = data1.childNodes[1].firstChild.nodeValue;
  stuff[0].lastname = data1.childNodes[3].firstChild.nodeValue;
  stuff[0].age = data1.childNodes[5].firstChild.nodeValue;
  stuff[0].department = data1.childNodes[7].firstChild.nodeValue;

  const data2 = document.getElementById("data2");
  stuff[1].firstname = data2.childNodes[1].firstChild.nodeValue;
  stuff[1].lastname = data2.childNodes[3].firstChild.nodeValue;
  stuff[1].age = data2.childNodes[5].firstChild.nodeValue;
  stuff[1].department = data2.childNodes[7].firstChild.nodeValue;

  const data3 = document.getElementById("data3");
  stuff[2].firstname = data3.childNodes[1].firstChild.nodeValue;
  stuff[2].lastname = data3.childNodes[3].firstChild.nodeValue;
  stuff[2].age = data3.childNodes[5].firstChild.nodeValue;
  stuff[2].department = data3.childNodes[7].firstChild.nodeValue;

  console.log(stuff);
}

function Task8(position) {
  document
    .getElementById("data" + position)
    .parentNode.removeChild(document.getElementById("data" + position));
}
