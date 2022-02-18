const {test}=QUnit
let memoriaJatek = new Jatek()
let tomb =[]
let tesztfelulet =$("#qunit-fixture")
let memoriaKartya= new Kartya(tomb,tesztfelulet)
      QUnit.module('A függvény tesztelése', function() {
      test('letezik e a metódus', function(assert) {
        assert.ok(memoriaJatek.kepekTombFeltoltese,"letezik");
      });
      test(' függvény e ', (assert) => {
        assert.ok(typeof memoriaJatek.kepekTombFeltoltese==="function", "Ez egy függvény");
    });
    
});

QUnit.module('A felület tesztelése ', function(j) {
    this.memoriaJatek= new Jatek()
    j.before(()=>{
        this.memoriaJatek= new Jatek()
    })
    test('a képek tömb véletlenszerű rendezés', (assert) => {
        let tomb=[
            {ertek:"kepek/kep1.jpg"},
            {ertek:"kepek/kep2.jpg"},
            {ertek:"kepek/kep3.jpg"},
            {ertek:"kepek/kep4.jpg"},
            {ertek:"kepek/kep5.jpg"},
            {ertek:"kepek/kep6.jpg"},
            {ertek:"kepek/kep7.jpg"},
            {ertek:"kepek/kep8.jpg"},
            {ertek:"kepek/kep9.jpg"},
            {ertek:"kepek/kep10.jpg"},
            {ertek:"kepek/kep11.jpg"},
            {ertek:"kepek/kep12.jpg"},
            {ertek:"kepek/kep13.jpg"},
            {ertek:"kepek/kep14.jpg"},
            {ertek:"kepek/kep15.jpg"},
            {ertek:"kepek/kep16.jpg"},
            {ertek:"kepek/kep17.jpg"},
            {ertek:"kepek/kep18.jpg"},
            {ertek:"kepek/kep19.jpg"},
            {ertek:"kepek/kep20.jpg"},
        ]
        this.memoriaJatek.kepekTombFeltoltese()
        for (let index = 0; index < kepekTomb.length; index++) {
            assert.notEqual(kepekTomb[index],tomb[index],"Nem egyenlő");
        }
    });
    test('Kártyára kattintáskor megváltozik e az állapota?', (assert) => {
        this.memoriaJatek= new Jatek()
        kartyaTomb[0].kattintas()
        assert.equal(kartyaTomb[0].allapot==true,true); 
        assert.equal(kartyaTomb[1].allapot==true,false); 
        assert.equal(kartyaTomb[2].allapot==false,true); 
             
    });
    test('Kártyára kattintáskor megváltozik e a blokkolt adattag? ', (assert) => {
        this.memoriaJatek= new Jatek()
        kartyaTomb[0].kattintas()
        assert.equal(kartyaTomb[0].blokkolt==false,true);   
                      
    });

    test('Ha még csak egy kártyára kattintunk, akkor egyik kártya sincs blokkolva?? ', (assert) => {
        this.memoriaJatek= new Jatek()
        kartyaTomb[0].kattintas()
        assert.equal(kartyaTomb[0].blokkolt==false,true);  
        assert.equal(kartyaTomb[1].blokkolt==false,true);  
        assert.equal(kartyaTomb[2].blokkolt==false,true);                     
    });

});