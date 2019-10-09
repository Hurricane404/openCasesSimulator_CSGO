var rollete = new Audio('roulette_spin.wav');
rollete.loop = true;

const app = new Vue({
    el: "#app",
    data: {
        items: [],
        newItems: [],
        open: false,
        gainedItem: [],
        scroll: 677,
        tryAgain: true,
        saldo: 100,
        meusItems: [],
        casesValue: 100,
        startMoney: 1200,
        links: [
            { "name": "Roleta" },
            { "name": "Ganhos" }
        ],
        linkAtivo: { "name": "Roleta" },
        abertas: 0,
        rank: 0,
        rankX: -52,
        rankY: -11,
        upgradeMyItem: {},
        closeEscolherItem: false,
        closeEscolherItemUpgrade: false,
        itemPraUpgrade: {},
        ganhouUpgrade: false,
        isActive: true,
        hasError: false,
        clicou: false,
        itemBlank: {"name" : "AK-47 | Safari Mesh","image" :  "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zFdC5K08i3mr-GkvP9JrbummpD78A_2LnF9NT0jADj_0BlNWChLdOWewFoNV2C-1TrwOa6h8K66c_JzXVmsz5iuyiPLPTaCA/360fx360f"},
        winImage: {"name" : "0", "image": "http://pluspng.com/img-png/win-png-subscribe-343.png"},
        loseImage: {"name" : "0", "image": "https://pngimage.net/wp-content/uploads/2018/06/you-lose-png-4.png"}
    },
    mounted() {
        this.itemsAdd("AK-47 | Safari Mesh", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zFdC5K08i3mr-GkvP9JrbummpD78A_2LnF9NT0jADj_0BlNWChLdOWewFoNV2C-1TrwOa6h8K66c_JzXVmsz5iuyiPLPTaCA/360fx360f", 0, 1)
        this.itemsAdd("AK-47 | Predator", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zSdD9Q7d-3mb-GkvP9JrbummpD78A_iOyZ8Nqk0Vey8hJsMTqnd4eWdw9vMljS-VjtxbzrhcXtu53PwXNmuj5iuyjGLEfnUQ/360fx360f", 1, 3)
        this.itemsAdd("AK-47 | Redline", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPv9NLPFqWdQ-sJ0xL6VrNj3jlCy_0tpZj-nINOTIwRqMwzZ8lLrle6-h5K_75XJnCRruSA8pSGKEtwySt8/360fx360f", 2, 20)
        this.itemsAdd("AK-47 | Case Hardened", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO7kYSCgvrLP7rDkW4fuZEk37mYpNun3FXtqUpvMGymIYLEd1U3YF-Eq1S5kOfoh5-_vpiYmGwj5HetcqhLqw/360fx360f", 2, 50)
        this.itemsAdd("StatTrak™ AK-47 | Asiimov", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLP7LWnn9u5MRjjeyPo9qgjlfnqUtvMGHzIICWew45aV-B_1bqw7u5gse16JTKwXBnvigg5WGdwUL3VYtbUA/360fx360f", 2, 177)
        this.itemsAdd("AK-47 | The Empress", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09m7hJKOhOTLPr7Vn35c18lwmO7Eu9ql2gDg8kBoYWqlddLHIVI8YFnZqFTrk73mjMW-v87ByHRluiB2533D30vgNUkukuM/360fx360f", 2, 107)
        this.itemsAdd("StatTrak™ AK-47 | Fire Serpent", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teTE8YXghWu4qgE7NnfzdtCTIQM-ZFnWqFLqyb270ZHt6MyanHMxvHYitHzVzBHk1RtOarc8m7XAHlYw1xU4/360fx360f", 2, 1201)
        this.itemsAdd("FAMAS | Colony", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRfwPz3Yi1D79mJmYGZnvnxDLPUl31I18lwmO7Eu933igfg-hY-NWCgctSTIw5qN13Z_QTrx7znjMTotc6dnHIxuHJx4ivD30vggTWRqsA/360fx360f", 0, 1)
        this.itemsAdd("FAMAS | Cyanospatter", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf2-r3YzhH6uO6nYeDg8j4MqnWkyVVu5Qi0u-VodWkigHg-kBuZ2ihcoCRIw48NFjV_lTqlb3r1p_ptJ2d1zI97ZO9rvjR/360fx360f", 0, 1)
        this.itemsAdd("FAMAS | Colony", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRfwPz3Yi1D79mJmYGZnvnxDLfYkWNF18lwmO7Eu4722FXl-kNkYzr6doXHdwZtYFuErgPrxb-51JXqusvAz3Fiu3Z3tnvD30vgxIiUCnE/360fx360f", 0, 1)
        this.itemsAdd("MP9 | Sand Dashed", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FBRw7OfJYTh9_9S5hpS0hPb6N4Tck29Y_chOhujT8om7ileyqkNoYzqhcYTHcAE2NwnRrwK5k7_sgpK5uM7Am3ZmuHUk5n6Ilwv3309WTFFgAQ/360fx360f", 0, 1)
        this.itemsAdd("Negev | Army Sheen", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0v73cC9P9eOlnImFksj5Nr_Yg2Zu5MRjjeyPoI2jjgzg8kY9NWymddeTcFRqNwvU_Va8wua7hZO66M_KwXA3uCArtGGdwUJV2Zztrg/360fx360f", 0, 1)
        this.itemsAdd("Negev | Dazzle", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf2-r3fzhF6cqJkIGRjfvxDLbUkmJE5fp9i_vG8MKm2gWwrRdqNWimII6dIQFsZl3T_1DtlLrpgJ_p7Z6dn3MwuiMms3yMgVXp1g766OZB/360fx360f", 1, 1)
        this.itemsAdd("Negev | Desert-Strike", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3fzhF6cqJgImflvnnJ7TDm1Rd4cJ5ntbN9J7yjRqxqUQ-Mj2gI4PAIVRsYArUqQXowuu908S5v53BwXVgu3JwsH7czEe3n1gSOTH2kiU7/360fx360f", 1, 1)
        this.itemsAdd("Negev | Man-o'-war", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0v73fzhF6cqJk4yEhe7LPr7Vn35c18lwmO7Eu9mk0A3n8kpoYW73d9Scd1Q7aV7Ur1W7lLu9hZS0uZ7LyiA26SJ3tHrD30vgGKT5wks/360fx360f", 0, 1)
        this.itemsAdd("Glock-18 | Sand Dune", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxfwPz3YjxM6OO0hoGdmMj4OrzZglRd6dd2j6fDoNyg2QXhqUo5ZDjwcYCRegY4aF-G-lO4w7rog8W1uZzBmnRm7yUi-z-DyOb8VQSL/360fx360f", 1, 1)
        this.itemsAdd("StatTrak™ Glock-18 | Weasel", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79fnzL-ckvbnNrfummJW4NFOhujT8om7jQTmrkU5Zmj6ItPHJlNrZV-D_1i7xufm08C8vZydnXRnvyEm4nrdmgv3309W5awQKQ/360fx360f", 1, 1)
        this.itemsAdd("Glock-18 | Death Rattle", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf2-r3fzhQ49i_lb-GkvP9JrbummpD78A_jOjE843z0FHj_0c_Y2ugdYWRelJoNw3WqVO3ku7qhJC8tcnPyXdk7D5iuyhw2A8smw/360fx360f", 0, 1)
        this.itemsAdd("Glock-18 | Oxide Blaze", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79fnzL-ImOXmPL_UmFRZ7cRnk9bN9J7yjRrs8hFsMW7zdtCdJAE2YF-B_Qe9wey6hcS_75jBmHoy6Ch3sXrUmEfjn1gSOb6uNx0f/360fx360f", 0, 1)
        this.itemsAdd("AWP | Dragon Lore", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH-t26q4SZlvD7PYTQgXtu5cB1g_zMyoD0mlOx5UM5ZWClcYCUdgU3Z1rQ_FK-xezngZO46MzOziQ1vSMmtCmIyxfkgx5SLrs4SgJFJKs/360fx360f", 2, 2210)
        this.itemsAdd("AWP | Dragon Lore", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH-t26q4SZlvD7PYTQgXtu4MBwnPD--Y3nj1H68hE-NW_2JNPAdVNtYV_Q_wO6le7u1pS-7pWfzCFnvCEq7SyOnBzi0wYMMLK7E03aCQ/360fx360f", 2, 1050)
        this.itemsAdd("AWP | Medusa", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdShR7eO3g5C0n_L1JaLummpD78A_jLHE8d-jjQex_0duY2qlJdOQIwM6M1zV_FDqkObvhcK4uMudwXVruD5iuygDtt1P9Q/360fx360f", 2, 810)
        this.itemsAdd("AUG | Contractor", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRv7OPFcgJK6d2gjb-HluXzNvWEzm5X7Jx02LGZrdut2wy3rxA_NjuiIYCSJlBsZFmEq1W4w-i9g5O1ot2XnvjLm6nU/360fx360f", 0, 1)
        this.itemsAdd("AUG | Sweeper", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRw7P7NYjV9_92wkZSSlfv1MLDum25V4dB8teXA54vwxg2y8hJkNWvxJYGReg4_N1mB-VC8xr3mhcftvM-dn3Bq6Cggty3VnRGpwUYblAKYImM/360fx360f", 2, 1)
        this.itemsAdd("USP-S | Forest Leaves", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ08-mq4yOluHxIITck29Y_chOhujT8om73QCw-BE6amiiLdWVcgA_YAzZq1HoyO_n15LvvpvIySYyvigm4S7flwv33099HeXqqg/360fx360f", 0, 1)
        this.itemsAdd("USP-S | Cortex", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3Jq_ummJW4NFOhujT8om73QPnrRBkMGz6IICTdVM9ZlCG-QTqyObmhcXpuJWbmyBmsiZ37SuInwv330-gQJA5lg/360fx360f", 2, 19)
        this.itemsAdd("StatTrak™ USP-S | Kill Confirmed", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j_OrfdqWhe5sN4mOTE8bP9jVWisiwwMiukcZiXJ1I_Z1vYrFC8wrzsg5W4tJudmCBr7nN3sX_ezUe1gxtKPOQ71_KbVxzAUJrOt7MZ/360fx360f", 2, 59)
        this.itemsAdd("★ Navaja Knife | Scorched", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1OrYYiR95t21n4uFnvHxDKjBqW9Q-NV9j9bM8Ij8nVmLpxIuNDztd4XEelNtZA7S_QDrl-3qjJC8us-Yy3RlsnJ25SmImxG-1UwYbOZohOveFwugxkI3yg/360fx360f", 2, 58)
        this.itemsAdd("Five-SeveN | Forest Night", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09q5hoWYg8j6OrzZglRc7cF4n-T--Y3nj1H6qBJpNmv2dtCceg5qYlDQqVe_xuq8hpbtu5ianyBks3Mm4XzYyxC0hgYMMLI-3seReg/360fx360f", 0, 1)
        this.itemsAdd("Five-SeveN | Coolant", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09ijl5SYqPDmNr7fqWZU7Mxkh9bN9J7yjRqx8hBuZzjwJNLAdQM9MFjWqQe3wO-8hZW_6pjIwSQ27iMh4CvanBzin1gSOZ8Ao7Up/360fx360f", 0, 1)
        this.itemsAdd("★ M9 Bayonet | Doppler", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjwPKvBmm5D19V5i_rEprP5gVO8vywwMiukcZicd1BtZFiG-gPqkLjm1JO56ZqYnXJl6SAhtHePm0G0g0lIO-VpjfHMVxzAUO3kMgPo/360fx360f", 0, 360)
        this.itemsAdd("★ StatTrak™ Karambit | Doppler", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20k_jkI7fUhFRB4MRij7j--YXygECLpxIuNDztJYDGcg4_aFjS8gDoxOfn15G7vpXLzyFh6HMk4nranhfmgExJP7NsguveFwu10KRx-Q/360fx360f", 0, 690)
        this.itemsAdd("Graffiti | Double (Jungle Green)", "https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBG0pe2YHnjyVzzNIy3mEF96GuZAYT2I_TKn4OqQQ2rAQ-EoSwlRf6MN8TFBaMGLbBJo1tYI_DLoxRwuR1g4fMIAcwC3xWYeJLExwTEePJZWmCOhIsUhqW2w8w/360fx360f", 0, 1)
        this.itemsAdd("Graffiti | Lambda (SWAT Blue)", "https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBG0qe6yEHX6ajPFEC3YDlltU-ZWPGnQ-DHwtrmTFjmfQbt6S1tSK_cEpGBNbpqOORI83YEJ-zXtxRQzDhgvNMZJfACpx2EfJbQ1xDhPcchXyy34w97N8h0/360fx360f", 0, 1)
        this.itemsAdd("Graffiti | Popdog (Battle Green)", "https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBG0se2dGHvwVzvFPSbcUls6SbsPPGjerGKn5LzHRTCcQuh4FQ8CeKFRpzYdNZ-JPxs9gYRa8zb2h0p6WBUnfspUfRq33n0DPaR4n3lLIZ5RQo4G3wE/360fx360f", 0, 1)
        this.itemsAdd("Graffiti | Chess King (Monster Purple)", "https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBG0ouqID2fIYz7KKB7VHUxvGK1WYW-P_2Gi7buUQDHAFeApQAEFdPAG9DZJPM3fbENshoNfrTa-kkAlUAYmdYNFfwO02HkGPaks2C0LeJ0HnXL5cOaf7wgx/360fx360f", 0, 1)
        this.itemsAdd("AWP | Pit Viper", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957ODGcDZH_9e_mr-HnvD8J4Tdl3lW7Yt03OjF8Y733A21_ENuZz_7JIbEcQNtaA3Q8lC6wey-h8W0up7IyXBrpGB8sr1DtlQN/360fx360f", 1, 2)
        this.itemsAdd("AWP | Pit Viper", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957ODGcDZH_9e_mr-HnvD8J4Tdl3lW7Yt03OjF8Y733A21_ENuZz_7JIbEcQNtaA3Q8lC6wey-h8W0up7IyXBrpGB8sr1DtlQN/360fx360f", 1, 2)
        this.itemsAdd("AWP | BOOM", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PHEcDB9_9W7hIyOqPv9NLPFqWdQ-sJ0xOzFpN2h0QDj_0ttNmnwIoDHcFVqNFjZ-AC2lbq-1pLou5_MyXVkv3I8pSGK_P3OCnU/360fx360f", 2, 48)
        this.itemsAdd("StatTrak™ AWP | Worm God", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZx7PLfYQJW-9W4kb-HnvD8J4Tdl3lW7Yt3076X9tikigyy8kRkN2uhLNKUcQE9ZQ7R_ge4xObpjJ6-6JXMwCRipGB8spTEjD1p/360fx360f", 1, 5)
        this.itemsAdd("★ Bayonet | Forest DDPAT", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJG6My3gL-DkvbiKoTdl3lW7Yt30-3HpIqsiwS18xFlY2jwLYGWdAE3aFvXrADol7zqgJC0tJ_IyHI1pGB8smaas5HW/360fx360f", 2, 215)
        this.itemsAdd("★ Bayonet | Forest DDPAT", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJG6My3gL-HnvD8J4Tdl3lW7Yt337rC99iijASxrUs-Z2ryJYeTcgY2NAvT8li4l-a80MLuu5zLnyBmpGB8ss5wKTWe/360fx360f", 2, 245)
        this.itemsAdd("★ Bayonet | Autotronic", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zPYgJA7cW5moWfqPbhJ7TFhGRf4cZOhuDG_ZjKhFWmrBZyZzv0co6Ve1A6NA3U-VXql7jn05S7vM_JzXNiuiAi5H2LnBzkhE0eO_sv26L9s_p6DA/360fx360f", 2, 545)
        this.itemsAdd("★ StatTrak™ Bayonet | Marble Fade", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJP7c60mIW0kfbwNoTdn2xZ_Pp9i_vG8ML0jFfm80U6YGCgLY7EewA9YV7S-gC3xubshMXtvsjMyXdjuCIrsSmLgVXp1iqhnkny/360fx360f", 2, 645)
        this.itemsAdd("★ StatTrak™ Bayonet | Lore", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zLZAJA7cW5moWfqPv7Ib7um25V4dB8teXA54vwxlXs_BVpZz-ldYbDcwJsaAzUqATswu3v08Xo7syYyHphvCcm43iOnUCpwUYbyMGRBAc/360fx360f", 2, 645)
        this.itemsAdd("★ Butterfly Knife | Crimson Web", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqODxMajum25V4dB8teXA54vwxgW2qEc5NW-iIYORcFI5NwzQ8lS7lOq50MW7tJSbnXQy7yRx4H7bnRGpwUYbInjudbk/360fx360f", 2, 493)
        this.itemsAdd("★ Butterfly Knife | Fade", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GKqPH1N77ummJW4NFOhujT8om7igW1qUY6MWqmcIadcw47MFrW_FK9xbzpgZ607Z7PzSAxuXYg53-Llwv330-D9XTwcQ/360fx360f", 2, 900)
        this.itemsAdd("★ Talon Knife | Doppler", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-KmsjwPKvBmm5D19V5i_rEprPigVC7vCwwOj6rYOnJI0RpNEbVrAXvlOi8gcDtvZrJziA1vCAqt3-MyRHm0hoYaec-1_3PQF7NVfNIAuDcUWvXnfMD/360fx360f", 2, 720)
        this.itemsAdd("Revolver Case Key", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUxuxpJSXPbQv2S1MDeXkh6LBBOiev1ZVNkgqeRdWUV7o3kltLdzvOjauqCwDlUupAj0-rD843zjAbt_hVtMDjtZNjCJHQgy4g/360fx360f", 0, 2)
        this.itemsAdd("Chroma Case Key", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUxuxpJSXPbQv2S1MDeXkh6LBBOiezrLVYygaCYdDlB79_mwdKIlq-tY-LUlzgB6sYm27-W8dvx0Vey_0ZrY3ezetEQGWlygA/360fx360f", 0, 2)
        this.itemsAdd("eSports Key", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUlrBpNQ0LvROW-0vDYVkRLNhRStbOkJzgxnaXLdDkTuNnmzYbak6byYb2ExGoHvJ1z2b7Fp9igjlflrUJoYmCiJ4KLMlhpukSlLYY/360fx360f", 0, 1)
        this.itemsAdd("CS:GO Capsule Key", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUhvRJeR0nCeOe_1tvWbFZxPEoGt-72fQJiivWeJ2sSvt3uktTcxfbwNenQkGoHuJUj3biRoNqm3wS35QMyNL4TTAx3/360fx360f", 0, 1)
        this.itemsAdd("Revolver Case", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYwnfKfcG9HvN7iktaOkqD1auLTxD5SvZYgiLvFpo7xjVLh-kdrYWnzcoGLMlhpsyM-5vg/360fx360f", 0, 0.2)
        this.itemsAdd("Revolver Case", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYwnfKfcG9HvN7iktaOkqD1auLTxD5SvZYgiLvFpo7xjVLh-kdrYWnzcoGLMlhpsyM-5vg/360fx360f", 0, 0.2)
        this.itemsAdd("Danger Zone Case", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUxnaPLJz5H74y1xtTcz6etNumIx29U6Zd3j7yQoYih3lG1-UJqY27xJIeLMlhpaD9Aclo/360fx360f", 0, 0.4)
        this.itemsAdd("★ StatTrak™ Huntsman Knife | Safari Mesh", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0mvLnO4TFl2Vu4MBwnPD--Y3nj1H6rxFvajz3LYTBelBqMA6E8lnolLvtg5e97Z6cnyRlvSIg4C7dzRKw1AYMMLLMmZlrnA/360fx360f", 2, 253)
        this.itemsAdd("★ Huntsman Knife | Ultraviolet", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJl5W0h-LmI7fUqWNE5tFih-jPyoHwjF2hpiwwMiukcZicIAE4MFjRrgXqxOvqhMDptMmfynRluSl0tnfelkDiiBgdbLZmhvPNVxzAUD7WvYVt/360fx360f", 2, 223)
        this.itemsAdd("★ StatTrak™ Huntsman Knife | Damascus Steel", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0k_b5MqjSg3husZVOhuDG_ZjKhFWmrBZyNWHycNPDdg43Z17Rq1C2kLvogZfvuJTJyHM3vSB05HnemhC10kwfO_sv26Ix5Gf1Rg/360fx360f", 2, 193)
        this.itemsAdd("Desert Eagle | Blaze", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLJTjtO7dGzh7-HnvD8J4Tdl3lW7Yt1jriVpY-migfh8hBtZTqgcI7Aewc2MgnWqwW-k-zph569uZyfnHMwpGB8slBfgSNs/360fx360f", 2, 403)
        this.itemsAdd("StatTrak™ Desert Eagle | Code Red", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PTbTjlH7du6kb-KkPDmNqjCmXlu5Mx2gv3--Y3nj1H6_kI6NTv7I9CVcVdrYQzTqVW4xrrrgZe-6p6ay3ZluiYl4nvVyhO21QYMMLLk7OGppA/360fx360f", 2, 303)
        this.itemsAdd("★ Shadow Daggers | Urban Masked", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfw-bbeQJR_OOilZCOqOLmMbrfqWZU7Mxkh9bN9J7yjRri-Bc6N2umJ9fGdQJvM1uC_VDow-a6hZa5u8nMzyE27CAhsC7dlhW1n1gSOQVoKPxT/360fx360f", 2, 90)
        this.itemsAdd("★ Shadow Daggers | Rust Coat", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfw-bbeQJD_eOlgIWOm8j_PbLXk1Rc7cF4n-T--Y3nj1H6r0BoN2_7doHHdFQ4MAuB-AK4xby-jZ_o75_AmCMy6yhw4nyMl0Hl1AYMMLJNvl0WOA/360fx360f", 2, 100)
        this.itemsAdd("★ StatTrak™ Shadow Daggers | Marble Fade", "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfw-bbeQJD4eO7lZKJm_LLNbrVk1Rd4cJ5ntbN9J7yjRqyqBZvNW3wdYWVdQU3ZQyDrAC5wOfnjZG0u8mbm3c3uHV04y7emRS2n1gSOSPHTU8J/360fx360f", 2, 354)
        this.generateItem()
        if (this.abertas > 10) {
            this.rank = 1;
        } else if (this.abertas > 20) {
            this.rank = 2;
        } else if (this.abertas > 40) {
            this.rank = 3;
        }
        this.meusItems = localStorage.meusItems ? JSON.parse(localStorage.meusItems) : []
        this.saldo = localStorage.saldo ? JSON.parse(localStorage.saldo) : this.startMoney
        this.rank = localStorage.rank ? JSON.parse(localStorage.rank) : 0
        this.rankX = -52
        this.rankY = -30 * this.rank
        this.saldo = Math.round(this.saldo, 2)
    },
    methods: {
        itemsAdd(name, image, rari, preco) {
            this.items.push({
                name: name,
                image: image,
                rari: rari,
                preco: preco,
                theme: 'color' + rari
            })
        },
        generateItem() {
            this.newItems = []
            for (var i = 0; i < 50; i++) {
                var itemRandom = Math.floor(Math.random() * this.items.length);
                var itemRaro = Math.floor(Math.random() * 45)
                var itemRandom = Math.floor(Math.random() * this.items.length)
                var haha = 0;
                if (itemRaro <= 10) {
                    haha = 1
                } else {
                    while (this.items[itemRandom].preco >= 100 && this.items[itemRandom].preco <= 2000) {
                        var itemRandom = Math.floor(Math.random() * 30)
                    }
                }
                this.newItems.push({
                    name: this.items[itemRandom].name,
                    image: this.items[itemRandom].image,
                    rari: this.items[itemRandom].rari,
                    preco: this.items[itemRandom].preco,
                    theme: 'color' + this.items[itemRandom].rari
                })
            }
        },
        openCases() {
            if (this.saldo >= this.casesValue) {
                for(var i = 0; i < 9; i++){
                rollete.play();
                }
                this.saldo -= this.casesValue
                this.scroll = 36
                this.open = true
                this.abertas++
                var itemRandom = 30
                this.gainedItem = {
                    name: this.newItems[itemRandom].name,
                    image: this.newItems[itemRandom].image,
                    rari: this.newItems[itemRandom].rari,
                    preco: this.newItems[itemRandom].preco,
                    theme: 'color' + this.newItems[itemRandom].rari
                }
                this.scroll -= itemRandom * 677
                console.log("Você ganhou " + this.gainedItem.name + "id" + itemRandom)
                this.meusItems.push({
                    name: this.newItems[itemRandom].name,
                    image: this.newItems[itemRandom].image,
                    rari: this.newItems[itemRandom].rari,
                    preco: this.newItems[itemRandom].preco,
                    theme: 'color' + this.newItems[itemRandom].rari
                })
                this.saldo = Math.round(this.saldo, 2)
                localStorage.meusItems = JSON.stringify(this.meusItems)
                localStorage.saldo = JSON.stringify(this.saldo)
                localStorage.rank = JSON.stringify(this.rank)
                setTimeout(() => this.scroll = 677, 4000)
                setTimeout(() => rollete.pause(), 3400)
                setTimeout(() => this.open = false, 4000)
                setTimeout(() => this.tryAgain = false, 4000)
            }
        },
        tryAgainOk() {
            this.scroll = 677
            this.generateItem()
            this.tryAgain = true
        },
        sellItemUnico(item) {
            const index = this.meusItems.indexOf(item)
            this.saldo += this.meusItems[index].preco
            this.meusItems.splice(index, 1)
            this.saldo = Math.round(this.saldo, 2)
            localStorage.saldo = JSON.stringify(this.saldo)
            localStorage.meusItems = JSON.stringify(this.meusItems)
            localStorage.rank = JSON.stringify(this.rank)
        },
        acessarLink(link) {
            this.linkAtivo = link
            console.log(link.name)
        },
        escolherItemPraUpgrade(item){
            this.upgradeMyItem = item
            this.itemPraUpgrade = item
            this.closeEscolherItem = false
            this.clicou = true
        },
        openEscolherItemUpgradeMeu(){
            if(this.meusItems.length > 0){
            this.closeEscolherItem = true
            }
        },
        openEscolherItemUpgrade(){
            if(this.meusItems.length > 0){
            this.closeEscolherItemUpgrade = true
            }
        },
        escolherItemUpgardeTroca(item){
            if(!this.upgradeMyItem == ''){
            this.itemPraUpgrade = item
            this.closeEscolherItemUpgrade = false
            }
        },
        upgradeItem(){
            var changeGanhar = Math.floor(Math.random() * 6)
            if(changeGanhar > 0 && changeGanhar < 4){
                this.ganhouUpgrade = false
                this.upgradeMyItem = this.loseImage
                this.clicou = false
                const index = this.items.indexOf(this.itemPraUpgrade)
                this.meusItems.splice(index, 1)
            } else{  
                this.ganhouUpgrade = true
                this.upgradeMyItem = this.winImage
                this.clicou = false
                const index = this.items.indexOf(this.upgradeMyItem)
                this.meusItems.splice(index, 1)
                this.meusItems.push(this.itemPraUpgrade)
            }

            localStorage.saldo = JSON.stringify(this.saldo)
            localStorage.meusItems = JSON.stringify(this.meusItems)
            localStorage.rank = JSON.stringify(this.rank)
           
        }
    }
})
