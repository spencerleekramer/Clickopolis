class Utils {
  abbrNum (number:any, decPlaces:number = 2) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10,decPlaces);
    // Enumerate number abbreviations
    var abbrev = [ "k", "m", "b", "t" ];
    // Go through the array backwards, so we do the largest first
    for (var i=abbrev.length-1; i>=0; i--) {
        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10,(i+1)*3);
        // If the number is bigger or equal do the abbreviation
        if(size <= number) {
             // Here, we multiply by decPlaces, round, and then divide by decPlaces.
             // This gives us nice rounding to a particular decimal place.
             number = Math.round(number*decPlaces/size)/decPlaces;
             // Handle special case where we round up to the next abbreviation
             if((number == 1000) && (i < abbrev.length - 1)) {
                 number = 1;
                 i++;
             }
             // Add the letter for the abbreviation
             number += abbrev[i];
             // We are done... stop
             break;
        }
    }
    return number;
  }

  capitalize(str:string):string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  choose(arr:any[]):any {
    return arr[Math.floor(Math.random()*arr.length)];
  }

  elt(query:string, all:boolean = false):any {
    if (all === false)
      return <HTMLElement>document.querySelector(query);
    else
      return <NodeListOf<HTMLElement>>document.querySelectorAll(query);
  }

  progressBar(percent:string, progressColor: string, endColor: string, direction: string = 'right'):string {
    function render() {
      let progressBar = `linear-gradient(to ${direction}, ${progressColor} 0%, ${progressColor} ${percent}, ${endColor} ${percent}, ${endColor} 100%)`;
      return progressBar;
    }
    return render();
  }

  randomColor():string {
    let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    return randomColor;
  }

  time(d:number):string {
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);
    return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);
  }

}

export = Utils;
