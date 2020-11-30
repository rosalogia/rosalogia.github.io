function createElem(elemType, className, textContent) {
    var elem = document.createElement(elemType);
    elem.className = className;
    var textNode = document.createTextNode(textContent);
    elem.appendChild(textNode);
    return elem;
}

function generateResultsList(results) {
    var resultsList = document.getElementById("results");
    resultsList.innerHTML = "";

    var header = createElem("li", "collection-header", "");
    header.innerHTML = "<h4>Available Courses</h4>";

    resultsList.appendChild(header);

    results
        .forEach(result => resultsList.appendChild(createElem("li", "collection-item", result)));
}

document.getElementById("submitButton").addEventListener("click", () => {
    var chipsInstance = M.Chips.getInstance(document.getElementById("courseChips"));
    var courses = escape(chipsInstance.chipsData.map(chip => chip.tag).map(tag => tag.includes(" - ") ? tag.split(" - ")[0] : tag).join());
    var requestString = `https://rucs24.tk/allowed?courses=${courses}`;
    console.log(requestString);

    let getResults = async function () {
        var results = await fetch(requestString).then(response => response.json());
        var resultsList = document.getElementById("results");

        generateResultsList(results);

        document.getElementById("resultsRow").style.visibility = "visible";
    }

    getResults();

});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.chips');

    var hardCodedAutocompleteOptions = {
        "01:198:107 - Computing for Math and the Sciences": null,
        "01:198:111 - Introduction to Computer Science": null,
        "01:198:112 - Data Structures": null,
        "01:198:205 - Introduction to Discrete Structures I": null,
        "01:198:206 - Introduction to Discrete Structures II": null,
        "01:198:211 - Computer Architecture": null,
        "01:198:213 - Software Methodology": null,
        "01:198:214 - Systems Programming": null,
        "01:198:314 - Principles of Programming Languages": null,
        "01:198:323 - Numerical Analysis and Computing": null,
        "01:198:324 - Numerical Methods": null,
        "01:198:334 - Introduction to Imaging and Multimedia": null,
        "01:198:336 - Principles of Information and Data Management": null,
        "01:198:344 - Design and Analysis of Computer Algorithms": null,
        "01:198:352 - Internet Technology": null,
        "01:198:411 - Computer Architecture II": null,
        "01:198:415 - Compilers": null,
        "01:198:416 - Operating Systems Design": null,
        "01:198:417 - Distributed Systems: Concepts and Design": null,
        "01:198:419 - Computer Security": null,
        "01:198:424 - Modeling and Simulation of Continuous Systems": null,
        "01:198:425 - Brain-Inspired Computing": null,
        "01:198:428 - Introduction to Computer Graphics": null,
        "01:198:431 - Software Engineering": null,
        "01:198:437 - Database Systems Implementation": null,
        "01:198:439 - Introduction to Data Science": null,
        "01:198:440 - Introduction to Artificial Intelligence": null,
        "01:198:452 - Formal Languages and Automata": null,
        "01:198:460 - Introduction to Computational Robotics": null,
        "01:640:001 - Computational Skills": null,
        "01:640:025 - Elementary Algebra": null,
        "01:640:026 - Intermediate Algebra": null,
        "01:640:103 - Topics in Mathematics for the Liberal Arts": null,
        "01:640:103:H - Topics in Mathematics for the Liberal Arts - Honors Section": null,
        "01:640:104 - Introduction to Probability": null,
        "01:640:106 - Mathematics of Money": null,
        "01:640:107 - Number and Operation for K-8 Teaching": null,
        "01:640:108 - Problem Solving and Reasoning with Discrete Mathematics": null,
        "01:640:109 - Geometry and Measurement for Elementary Teaching": null,
        "01:640:110 - Algebra for Middle School Teachers": null,
        "01:640:111 - Precalculus I": null,
        "01:640:112 - Precalculus II": null,
        "01:640:115 - Precalculus College Mathematics": null,
        "01:640:123 - Preparation for Calculus I": null,
        "01:640:135 - Calculus I for the Life and Social Sciences": null,
        "01:640:136 - Calculus II for the Life and Social Sciences": null,
        "01:640:151 - Calculus I for the Mathematical and Physical Sciences": null,
        "01:640:152 - Calculus II for the Mathematical and Physical Sciences": null,
        "01:640:191 - Honors Calculus I": null,
        "01:640:192 - Honors Calculus II": null,
        "01:640:196 - First and Second Year Honors Seminar": null,
        "01:640:244 - Differential Equations for Engineering and Physics": null,
        "01:640:250 - Introductory Linear Algebra": null,
        "01:640:251 - Multivariable Calculus": null,
        "01:640:252 - Elementary Differential Equations": null,
        "01:640:285 - Introduction to Interest Theory for Actuarial Science": null,
        "01:640:291 - Honors Calculus III": null,
        "01:640:292 - Honors Calculus IV": null,
        "01:640:300 - Introduction to Mathematical Reasoning": null,
        "01:640:300:H - Introduction to Mathematical Reasoning (Honors)": null,
        "01:640:311 - Introduction to Real Analysis I": null,
        "01:640:312 - Introduction to Real Analysis II": null,
        "01:640:321 - Introduction to Applied Mathematics": null,
        "01:640:325 - Special Topics (Foundations of Quantum Mechanics)": null,
        "01:640:336 - Dynamical Models in Biology": null,
        "01:640:338 - Discrete and Probabilistic Models in Biology": null,
        "01:640:348 - Cryptography": null,
        "01:640:350 - Linear Algebra": null,
        "01:640:351 - Introduction to Abstract Algebra I": null,
        "01:640:354 - Linear Optimization": null,
        "01:640:355 - Game Theory": null,
        "01:640:356 - Theory of Numbers": null,
        "01:640:357 - Topics in Applied Algebra": null,
        "01:640:361 - Set Theory": null,
        "01:640:373 - Numerical Analysis I": null,
        "01:640:395 - Studies in Mathematics": null,
        "01:640:403 - Introduction to Theory of Functions of a Complex Variable": null,
        "01:640:411 - Mathematical Analysis I": null,
        "01:640:412 - Mathematical Analysis II": null,
        "01:640:421 - Advanced Calculus for Engineering": null,
        "01:640:423 - Elementary Partial Differential Equations": null,
        "01:640:428 - Graph Theory": null,
        "01:640:432 - Introduction to Differential Geometry": null,
        "01:640:435 - Geometry": null,
        "01:640:437 - History of Mathematics": null,
        "01:640:441 - Introductory Topology": null,
        "01:640:442 - Introductory Topology II": null,
        "01:640:451 - Abstract Algebra I": null,
        "01:640:452 - Abstract Algebra II": null,
        "01:640:453 - Theory of Linear Optimization": null,
        "01:640:454 - Combinatorics": null,
        "01:640:461 - Mathematical Logic": null,
        "01:640:468 - Connections Seminar": null,
        "01:640:477 - Mathematical Theory of Probability": null,
        "01:640:478 - Introduction to Stochastic Processes": null,
        "01:640:481 - Mathematical Theory of Statistics": null,
        "01:640:485 - Introduction to Mathematical Finance": null,
        "01:640:486 - Mathematics of Life Contingent Risk Models I": null,
        "01:640:487 - Mathematics of Life Contingent Risk Models II": null,
        "01:640:491 - Mathematics Problem Solving Seminar": null,
    }

    

    var instances = M.Chips.init(elems, {
        placeholder: "E.g. 01:198:111",
        autocompleteOptions: {
            data: hardCodedAutocompleteOptions,
            limit: Infinity
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, options);
});

