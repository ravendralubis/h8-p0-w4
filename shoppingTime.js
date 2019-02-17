function shoppingTime(memberId, money) {
    var listPurchased = []
    var changesMoney = 0
    var wallet = money
    var items = {
        'Sepatu brand Stacattu': 1500000,
        'Baju brand zorro': 500000,
        'Baju brand H&N': 250000,
        'Sweater brand Uniklooh': 175000,
        'Casing Handphone': 50000
    }
    if(!memberId) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    } else if(memberId && money < 50000) {
        return 'Mohon maaf, uang tidak cukup'
    } 

    for(var i = 0; i < Object.keys(items).length; i++) {
        if(wallet >= Object.values(items)[i]) {
            listPurchased.push(Object.keys(items)[i])
            wallet -= Object.values(items)[i]
            changesMoney = wallet
        } 
    }
    return {
        memberId,
        money,
        listPurchased,
        changesMoney
    }
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja