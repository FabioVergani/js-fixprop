function FixProp(o,p,x){var e=o[p];if(!e){e=o[p]=x};return e};


FixProp(Object,'create',function(o){function f(){};f.prototype=o;return new f});

