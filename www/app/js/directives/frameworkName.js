define([], function () {

    return ['frameworkName', function () {
        return function(scope, elm, attrs) {
            elm.text(frameworkName);
        }
    }]
})