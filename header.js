var xhr= new XMLHttpRequest();
xhr.open('GET', 'header.html', true);
xhr.onreadystatechange= function() {
    if (this.readyState!==4) return;
    if (this.status!==200) return; // or whatever error handling you want
    document.getElementById('navbar-p').innerHTML=this.responseText
};
xhr.send();

// This solution found at https://stackoverflow.com/a/3535356/9303665

// Before this, I was actually trying to recreate the header line by line

// I intended to recreate something I saw from when I was learning RoR
// While it works, I am having an issue at this moment of this comment
// with making sure that each page title is properly given

// To explain in detail with this comment, all this does is make sure the navbar
// is drawn automatically across every page. Orginally, it did the whole of the
// upper bar, but I gave up on trying to automate on a page by page basis what
// the two header texts would say. I am certain what I wanted to do was possible
// but it is 7:09 AM and I've been at this for maybe five hours now

// further update: on the live site, this doesn't actually work as well I
// would have liked. Each page load causes the navbar to sort of pop in
// Will likely need to do more research

// At least we avoided writing a crap ton of statements for appendChild

// Still, what I describe is obviously the result of loading in the header from a seperate file

