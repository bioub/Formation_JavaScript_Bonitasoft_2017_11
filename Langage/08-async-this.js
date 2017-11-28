var contactES3 = {
  prenom: 'Romain',
  hello: function() {
    console.log('ES3 Bonjour je m\'appelle ' + this.prenom);
  },
  helloAsync: function() {
    var self = this;
    setTimeout(function() {
      console.log('ES3 Bonjour je m\'appelle ' + self.prenom);
    }, 1000);
  }
};

contactES3.hello();
contactES3.helloAsync();

var contactES5 = {
  prenom: 'Romain',
  hello: function() {
    console.log('ES5 Bonjour je m\'appelle ' + this.prenom);
  },
  helloAsync: function() {
    setTimeout(this.hello.bind(this), 1000);
  }
};

contactES5.hello();
contactES5.helloAsync();

var contactES6 = {
  prenom: 'Romain',
  hello() {
    console.log('ES6 Bonjour je m\'appelle ' + this.prenom);
  },
  helloAsync() {
    setTimeout(() => {
      console.log('ES6 Bonjour je m\'appelle ' + this.prenom);
    }, 1000);
  }
};

contactES6.hello();
contactES6.helloAsync();

/*
btn.addEventListener('click', e => {
  e.target au lieu de this ici
});
 */