var app = new Vue({
  el: "#app",
  data: {
     items: [],
     newItems: [],
     open: false,
     gainedItem: [],
     scroll: 36,
     tryAgain: true,
     saldo: 100,
    meusItems: []
   },
  mounted() {
     this.itemsAdd("AK-47 | Safari Mesh", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zFdC5K08i3mr-GkvP9JrbummpD78A_2LnF9NT0jADj_0BlNWChLdOWewFoNV2C-1TrwOa6h8K66c_JzXVmsz5iuyiPLPTaCA/360fx360f", 0, 1)
    this.itemsAdd("AK-47 | Predator", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zSdD9Q7d-3mb-GkvP9JrbummpD78A_iOyZ8Nqk0Vey8hJsMTqnd4eWdw9vMljS-VjtxbzrhcXtu53PwXNmuj5iuyjGLEfnUQ/360fx360f", 1, 3)
    this.itemsAdd("AK-47 | Redline", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPv9NLPFqWdQ-sJ0xL6VrNj3jlCy_0tpZj-nINOTIwRqMwzZ8lLrle6-h5K_75XJnCRruSA8pSGKEtwySt8/360fx360f", 2, 20)
    this.itemsAdd("AK-47 | Case Hardened", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO7kYSCgvrLP7rDkW4fuZEk37mYpNun3FXtqUpvMGymIYLEd1U3YF-Eq1S5kOfoh5-_vpiYmGwj5HetcqhLqw/360fx360f", 2, 50)
    this.itemsAdd("StatTrak™ AK-47 | Asiimov", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLP7LWnn9u5MRjjeyPo9qgjlfnqUtvMGHzIICWew45aV-B_1bqw7u5gse16JTKwXBnvigg5WGdwUL3VYtbUA/360fx360f", 2, 177)
    this.itemsAdd("AK-47 | The Empress", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09m7hJKOhOTLPr7Vn35c18lwmO7Eu9ql2gDg8kBoYWqlddLHIVI8YFnZqFTrk73mjMW-v87ByHRluiB2533D30vgNUkukuM/360fx360f", 2, 107)
    this.itemsAdd("StatTrak™ AK-47 | Fire Serpent", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teTE8YXghWu4qgE7NnfzdtCTIQM-ZFnWqFLqyb270ZHt6MyanHMxvHYitHzVzBHk1RtOarc8m7XAHlYw1xU4/360fx360f", 2, 1201)
    this.itemsAdd("FAMAS | Colony", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRfwPz3Yi1D79mJmYGZnvnxDLPUl31I18lwmO7Eu933igfg-hY-NWCgctSTIw5qN13Z_QTrx7znjMTotc6dnHIxuHJx4ivD30vggTWRqsA/360fx360f", 0, 0.4)
this.itemsAdd("FAMAS | Cyanospatter", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf2-r3YzhH6uO6nYeDg8j4MqnWkyVVu5Qi0u-VodWkigHg-kBuZ2ihcoCRIw48NFjV_lTqlb3r1p_ptJ2d1zI97ZO9rvjR/360fx360f", 0, 0.7)
this.itemsAdd("FAMAS | Colony", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRfwPz3Yi1D79mJmYGZnvnxDLfYkWNF18lwmO7Eu4722FXl-kNkYzr6doXHdwZtYFuErgPrxb-51JXqusvAz3Fiu3Z3tnvD30vgxIiUCnE/360fx360f", 0, 0.1)
this.itemsAdd("MP9 | Sand Dashed", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FBRw7OfJYTh9_9S5hpS0hPb6N4Tck29Y_chOhujT8om7ileyqkNoYzqhcYTHcAE2NwnRrwK5k7_sgpK5uM7Am3ZmuHUk5n6Ilwv3309WTFFgAQ/360fx360f", 0, 0.1)
this.itemsAdd("Negev | Army Sheen", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0v73cC9P9eOlnImFksj5Nr_Yg2Zu5MRjjeyPoI2jjgzg8kY9NWymddeTcFRqNwvU_Va8wua7hZO66M_KwXA3uCArtGGdwUJV2Zztrg/360fx360f", 0, 0.1)
this.itemsAdd("Negev | Dazzle", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf2-r3fzhF6cqJkIGRjfvxDLbUkmJE5fp9i_vG8MKm2gWwrRdqNWimII6dIQFsZl3T_1DtlLrpgJ_p7Z6dn3MwuiMms3yMgVXp1g766OZB/360fx360f", 1, 0.1)
this.itemsAdd("Negev | Desert-Strike", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3fzhF6cqJgImflvnnJ7TDm1Rd4cJ5ntbN9J7yjRqxqUQ-Mj2gI4PAIVRsYArUqQXowuu908S5v53BwXVgu3JwsH7czEe3n1gSOTH2kiU7/360fx360f", 1, 0.1)
this.itemsAdd("Negev | Man-o'-war", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0v73fzhF6cqJk4yEhe7LPr7Vn35c18lwmO7Eu9mk0A3n8kpoYW73d9Scd1Q7aV7Ur1W7lLu9hZS0uZ7LyiA26SJ3tHrD30vgGKT5wks/360fx360f", 0, 0.15)
this.itemsAdd("Glock-18 | Sand Dune", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxfwPz3YjxM6OO0hoGdmMj4OrzZglRd6dd2j6fDoNyg2QXhqUo5ZDjwcYCRegY4aF-G-lO4w7rog8W1uZzBmnRm7yUi-z-DyOb8VQSL/360fx360f", 1, 1)
this.itemsAdd("StatTrak™ Glock-18 | Weasel", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79fnzL-ckvbnNrfummJW4NFOhujT8om7jQTmrkU5Zmj6ItPHJlNrZV-D_1i7xufm08C8vZydnXRnvyEm4nrdmgv3309W5awQKQ/360fx360f", 1, 1)
    this.generateItem()
    this.meusItems = localStorage.meusItems ? JSON.parse(localStorage.meusItems): []
    this.saldo = localStorage.saldo ? JSON.parse(localStorage.saldo): 100
  },
  methods: {
     itemsAdd(name, image, rari, preco){
       this.items.push({
         name: name,
         image: image,
         rari: rari,
         preco: preco,
         theme: 'color' + rari
       })
     },
    generateItem(){
      this.newItems = []
      for(var i = 0; i < 50; i++){
      var itemRandom = Math.floor(Math.random() * this.items.length);
      this.newItems.push({
         name: this.items[itemRandom].name,
         image: this.items[itemRandom].image,
         rari: this.items[itemRandom].rari,
         preco: this.items[itemRandom].preco,
         theme: 'color' + this.items[itemRandom].rari
      })
      }
    },
    openCases(){
      if(this.saldo >= 20){
      this.saldo -= 20
      this.scroll = 36
      this.open = true
      var itemRandom = Math.floor(Math.random() * 30)
      this.gainedItem = {
         name: this.newItems[itemRandom].name,
         image: this.newItems[itemRandom].image,
         rari: this.newItems[itemRandom].rari,
         preco: this.newItems[itemRandom].preco,
         theme: 'color' + this.newItems[itemRandom].rari
      }
      this.scroll -= itemRandom * 18 
      console.log("Você ganhou "+ this.gainedItem.name + "id" + itemRandom)
      this.meusItems.push({
         name: this.newItems[itemRandom].name,
         image: this.newItems[itemRandom].image,
         rari: this.newItems[itemRandom].rari,
         preco: this.newItems[itemRandom].preco,
         theme: 'color' + this.newItems[itemRandom].rari
      })
      localStorage.meusItems = JSON.stringify(this.meusItems)
      setTimeout(() => this.open = false, 2000);
      setTimeout(() => this.tryAgain = false, 2000);
      }
    },
    tryAgainOk(){
      this.scroll = 36
      this.generateItem()
      this.tryAgain = true
    },
    sellItemUnico(item){
       const index = this.meusItems.indexOf(item)
       this.saldo += this.meusItems[index].preco
       this.meusItems.splice(index, 1)
      localStorage.saldo = JSON.stringify(this.saldo)
      localStorage.meusItems = JSON.stringify(this.meusItems)
    }
   }
})