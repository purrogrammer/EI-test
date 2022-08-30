document.getElementById('triangle-transform').onclick = function() {
      var className = ' ' + triangle-transform.className + ' ';
    
    if ( ~className.indexOf(' active ') ) {
        this.className = className.replace(' active ', ' ');
    } else {
        this.className += ' active';
    }              
    }
    