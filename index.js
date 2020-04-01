
import './style.css';
const acctData = [
    {
      acctNum: "AAA - 1234",
      user: "Alice"
    },
    {
      acctNum: "AAA - 5231",
      user: "Bob"
    },
    {
      acctNum: "AAA - 9921",
      user: "Alice"
    },
    {
      acctNum: "AAA - 8191",
      user: "Alice"
    }
  ];
  
  const balance = {
    "AAA - 1234": 4593.22,
    "AAA - 9921": 0,
    "AAA - 5231": 232142.5,
    "AAA - 8191": 4344
  };
  
  const userData = (userName = null, sortBy = null, sortDirection = null) => {
    if (userName) {
      return acctData.filter(acc => acc.user === userName)
        .sort(filterByParams(sortBy, sortDirection))
        .map(fa => fa.acctNum);
    } else {
        return acctData.sort(filterByParams(sortBy, sortDirection))
      .map(fa => fa.acctNum);
    }
  };
  
  const filterByParams = (sortBy, sortDirection) => {
    return (a, b) => {
      if (sortBy === "balance") {
        if(sortDirection == "desc")
        {
            return balance[b.acctNum] - balance[a.acctNum];
        }
        else 
        {
            return balance[a.acctNum] - balance[b.acctNum];
        }
      }
  
      if(sortDirection == "desc")
      {
        return b.acctNum.localeCompare(a.acctNum);  
      }
      else 
      {
        return a.acctNum.localeCompare(b.acctNum);
      }
      
    };
  };

  console.log("filtered by Bob ->",userData("Bob"));
  console.log("filtered by Charlie ->",userData("Charlie"));
  console.log("sorted by acctNum ->",userData("", "acctNum"));
  console.log("filtered by Alice; sorted by balance ascending ->",userData("Alice", "balance", "desc"));
  