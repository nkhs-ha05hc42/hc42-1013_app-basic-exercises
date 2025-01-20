const x = (a) => 
    {
        if(a > 100) return
        console.log(a)
        x(a*2)
    }

  x(10)
  x(25)