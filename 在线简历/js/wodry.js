(function() {
  var $,
    __hasProp = {}.hasOwnProperty;

  $ = jQuery;

  $.fn.extend({
    wodry: function(config) {
      var animations, settings, _base, _base1, _base2;
      if (config == null) {
        config = {};
      }
      settings = $.extend({}, config);
      if (settings.separator == null) {
        settings.separator = '|';
      }
      if (settings.delay == null) {
        settings.delay = 2000;
      }
      if (settings.animationDuration == null) {
        settings.animationDuration = 500;
      }
      if (settings.animation == null) {
        settings.animation = 'rotateY';
      }
      if (settings.callback == null) {
        settings.callback = function() {};
      }
      if (settings.shift == null) {
        settings.shift = {};
      }
      if ((_base = settings.shift).x == null) {
        _base.x = 0;
      }
      if ((_base1 = settings.shift).y == null) {
        _base1.y = 0;
      }
      if ((_base2 = settings.shift).z == null) {
        _base2.z = 0;
      }
      animations = {
        rotateY: {
          front_transform: "translate3d(" + settings.shift.x + "px," + settings.shift.y + "px," + settings.shift.z + "px)",
          back_transform: "translate3d(" + settings.shift.x + "px," + settings.shift.y + "px," + settings.shift.z + "px) rotateY(180deg)",
          action: {
            transform: " rotateY(180deg)",
            transition: " " + settings.animationDuration + "ms"
          }
        },
        rotateX: {
          front_transform: "translate3d(" + settings.shift.x + "px," + settings.shift.y + "px," + settings.shift.z + "px)",
          back_transform: "translate3d(" + settings.shift.x + "px," + settings.shift.y + "px," + settings.shift.z + "px) rotateX(180deg)",
          action: {
            transform: " rotateX(180deg)",
            transition: " " + settings.animationDuration + "ms"
          }
        },
        rotateAll: {
          isCoplex: true,
          front_transform: "translate3d(" + settings.shift.x + "px," + settings.shift.y + "px," + settings.shift.z + "px) rotateX(180deg) rotateY(180deg)",
          back_transform: "translate3d(" + settings.shift.x + "px," + settings.shift.y + "px," + settings.shift.z + "px) rotateX(180deg) rotateY(180deg)",
          action: {
            transform: " rotateX(180deg) rotateY(180deg)",
            transition: " " + settings.animationDuration + "ms"
          }
        },
        scaleX: {
          isCoplex: true,
          front_transform: "translate3d(" + settings.shift.x + "px," + settings.shift.y + "px," + settings.shift.z + "px) scaleX(0.1)",
          back_transform: "translate3d(" + settings.shift.x + "px," + settings.shift.y + "px," + settings.shift.z + "px) scaleX(0.1)",
          action: {
            transform: " scaleX(10)",
            transition: " " + settings.animationDuration + "ms"
          }
        },
        scaleY: {
          isCoplex: true,
          front_transform: "translate3d(" + settings.shift.x + "px," + settings.shift.y + "px," + settings.shift.z + "px) scaleY(0.1)",
          back_transform: "translate3d(" + settings.shift.x + "px," + settings.shift.y + "px," + settings.shift.z + "px) scaleY(0.1)",
          action: {
            transform: " scaleY(10)",
            transition: " " + settings.animationDuration + "ms"
          }
        },
        scaleAll: {
          isCoplex: true,
          front_transform: "translate3d(" + settings.shift.x + "px," + settings.shift.y + "px," + settings.shift.z + "px) scaleY(0.1) slaleX(0.1)",
          back_transform: "translate3d(" + settings.shift.x + "px," + settings.shift.y + "px," + settings.shift.z + "px) scaleY(0.1) scaleX(0.1)",
          action: {
            transform: " scaleY(10) scaleX(10)",
            transition: " " + settings.animationDuration + "ms"
          }
        },
        anticlockwise: {
          isCoplex: true,
          front_transform: "translate3d(" + settings.shift.x + "px," + settings.shift.y + "px," + settings.shift.z + "px) rotate3d(100,40,-80,180deg)",
          