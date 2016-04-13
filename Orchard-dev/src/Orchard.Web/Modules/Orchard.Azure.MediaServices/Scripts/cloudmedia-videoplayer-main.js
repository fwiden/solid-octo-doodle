/*
** NOTE: This file is generated by Gulp and should not be edited directly!
** Any changes made directly to this file will be overwritten next time its asset group is processed by Gulp.
*/

/// <reference path="Typings/jquery.d.ts" />
/// <reference path="Typings/underscore.d.ts" />
var Orchard;
(function (Orchard) {
    var Azure;
    (function (Azure) {
        var MediaServices;
        (function (MediaServices) {
            var VideoPlayer;
            (function (VideoPlayer) {
                var Injectors = Orchard.Azure.MediaServices.VideoPlayer.Injectors;
                $(function () {
                    $(".cloudmedia-videoplayer-container").each(function (index, elem) {
                        var container = elem;
                        var assetData = $(elem).data("cloudvideo-player-assetdata");
                        var playerWidth = $(elem).data("cloudvideo-player-width");
                        var playerHeight = $(elem).data("cloudvideo-player-height");
                        var applyMediaQueries = $(elem).data("cloudvideo-player-applymediaqueries");
                        var autoPlay = $(elem).data("cloudvideo-player-autoplay");
                        var contentBaseUrl = $(elem).data("cloudvideo-player-content-baseurl");
                        var errorText = $(elem).data("cloudvideo-player-errortext");
                        var altText = $(elem).data("cloudvideo-player-alttext");
                        var retryText = $(elem).data("cloudvideo-player-retrytext");
                        function invokeInjectors() {
                            $(container).empty();
                            var alternateContent = [
                                $("<span>").addClass("cloudvideo-player-error-text").text(errorText),
                                $("<button>").addClass("cloudvideo-player-retry-button").text(retryText).click(function () {
                                    invokeInjectors();
                                }),
                                $("<span>").addClass("cloudvideo-player-alt-text").text(altText)
                            ];
                            // Construct a chain of injectors (each will invoke the next on failure).
                            var altInjector = new Injectors.AltInjector(container, playerWidth, playerHeight, assetData, applyMediaQueries, true, null, alternateContent);
                            var html5Injector = new Injectors.Html5Injector(container, playerWidth, playerHeight, autoPlay, assetData, applyMediaQueries, true, altInjector);
                            var dashInjector = new Injectors.DashInjector(container, playerWidth, playerHeight, autoPlay, assetData, applyMediaQueries, true, html5Injector);
                            var smpInjector = new Injectors.SmpInjector(container, playerWidth, playerHeight, autoPlay, assetData, applyMediaQueries, true, dashInjector, contentBaseUrl);
                            var firstInjector = smpInjector;
                            firstInjector.invoke();
                        }
                        invokeInjectors();
                    });
                });
            })(VideoPlayer = MediaServices.VideoPlayer || (MediaServices.VideoPlayer = {}));
        })(MediaServices = Azure.MediaServices || (Azure.MediaServices = {}));
    })(Azure = Orchard.Azure || (Orchard.Azure = {}));
})(Orchard || (Orchard = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3VkbWVkaWEtdmlkZW9wbGF5ZXItbWFpbi5qcyIsImNsb3VkbWVkaWEtdmlkZW9wbGF5ZXItbWFpbi50cyJdLCJuYW1lcyI6WyJPcmNoYXJkIiwiT3JjaGFyZC5BenVyZSIsIk9yY2hhcmQuQXp1cmUuTWVkaWFTZXJ2aWNlcyIsIk9yY2hhcmQuQXp1cmUuTWVkaWFTZXJ2aWNlcy5WaWRlb1BsYXllciIsImludm9rZUluamVjdG9ycyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEFDTEEsNENBQTRDO0FBQzVDLGdEQUFnRDtBQUVoRCxJQUFPLE9BQU8sQ0E0Q2I7QUE1Q0QsV0FBTyxPQUFPO0lBQUNBLElBQUFBLEtBQUtBLENBNENuQkE7SUE1Q2NBLFdBQUFBLEtBQUtBO1FBQUNDLElBQUFBLGFBQWFBLENBNENqQ0E7UUE1Q29CQSxXQUFBQSxhQUFhQTtZQUFDQyxJQUFBQSxXQUFXQSxDQTRDN0NBO1lBNUNrQ0EsV0FBQUEsV0FBV0EsRUFBQ0EsQ0FBQ0E7Z0JBRzVDQyxJQUFPQSxTQUFTQSxHQUFHQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxhQUFhQSxDQUFDQSxXQUFXQSxDQUFDQSxTQUFTQSxDQUFDQTtnQkFFckVBLENBQUNBLENBQUNBO29CQUNFLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssRUFBRSxJQUFJO3dCQUM3RCxJQUFJLFNBQVMsR0FBZ0IsSUFBSSxDQUFDO3dCQUVsQyxJQUFJLFNBQVMsR0FBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO3dCQUM3RSxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7d0JBQ2xFLElBQUksWUFBWSxHQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQzt3QkFD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YkEsbUJBQWFBLEtBQWJBLG1CQUFhQSxRQTRDakNBO0lBQURBLENBQUNBLEVBNUNjRCxLQUFLQSxHQUFMQSxhQUFLQSxLQUFMQSxhQUFLQSxRQTRDbkJBO0FBQURBLENBQUNBLEVBNUNNLE9BQU8sS0FBUCxPQUFPLFFBNENiIiwiZmlsZSI6ImNsb3VkbWVkaWEtdmlkZW9wbGF5ZXItbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbCwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIlR5cGluZ3MvanF1ZXJ5LmQudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIlR5cGluZ3MvdW5kZXJzY29yZS5kLnRzXCIgLz5cblxubW9kdWxlIE9yY2hhcmQuQXp1cmUuTWVkaWFTZXJ2aWNlcy5WaWRlb1BsYXllciB7XG5cbiAgICBpbXBvcnQgRGF0YSA9IE9yY2hhcmQuQXp1cmUuTWVkaWFTZXJ2aWNlcy5WaWRlb1BsYXllci5EYXRhO1xuICAgIGltcG9ydCBJbmplY3RvcnMgPSBPcmNoYXJkLkF6dXJlLk1lZGlhU2VydmljZXMuVmlkZW9QbGF5ZXIuSW5qZWN0b3JzO1xuXG4gICAgJChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIuY2xvdWRtZWRpYS12aWRlb3BsYXllci1jb250YWluZXJcIikuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW0pIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSA8SFRNTEVsZW1lbnQ+ZWxlbTtcblxuICAgICAgICAgICAgdmFyIGFzc2V0RGF0YTogRGF0YS5JQXNzZXREYXRhID0gJChlbGVtKS5kYXRhKFwiY2xvdWR2aWRlby1wbGF5ZXItYXNzZXRkYXRhXCIpO1xuICAgICAgICAgICAgdmFyIHBsYXllcldpZHRoOiBudW1iZXIgPSAkKGVsZW0pLmRhdGEoXCJjbG91ZHZpZGVvLXBsYXllci13aWR0aFwiKTtcbiAgICAgICAgICAgIHZhciBwbGF5ZXJIZWlnaHQ6IG51bWJlciA9ICQoZWxlbSkuZGF0YShcImNsb3VkdmlkZW8tcGxheWVyLWhlaWdodFwiKTtcbiAgICAgICAgICAgIHZhciBhcHBseU1lZGlhUXVlcmllczogYm9vbGVhbiA9ICQoZWxlbSkuZGF0YShcImNsb3VkdmlkZW8tcGxheWVyLWFwcGx5bWVkaWFxdWVyaWVzXCIpO1xuICAgICAgICAgICAgdmFyIGF1dG9QbGF5OiBib29sZWFuID0gJChlbGVtKS5kYXRhKFwiY2xvdWR2aWRlby1wbGF5ZXItYXV0b3BsYXlcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudEJhc2VVcmw6IHN0cmluZyA9ICQoZWxlbSkuZGF0YShcImNsb3VkdmlkZW8tcGxheWVyLWNvbnRlbnQtYmFzZXVybFwiKTtcbiAgICAgICAgICAgIHZhciBlcnJvclRleHQ6IHN0cmluZyA9ICQoZWxlbSkuZGF0YShcImNsb3VkdmlkZW8tcGxheWVyLWVycm9ydGV4dFwiKTtcbiAgICAgICAgICAgIHZhciBhbHRUZXh0OiBzdHJpbmcgPSAkKGVsZW0pLmRhdGEoXCJjbG91ZHZpZGVvLXBsYXllci1hbHR0ZXh0XCIpO1xuICAgICAgICAgICAgdmFyIHJldHJ5VGV4dDogc3RyaW5nID0gJChlbGVtKS5kYXRhKFwiY2xvdWR2aWRlby1wbGF5ZXItcmV0cnl0ZXh0XCIpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBpbnZva2VJbmplY3RvcnMoKSB7XG5cbiAgICAgICAgICAgICAgICAkKGNvbnRhaW5lcikuZW1wdHkoKTtcblxuICAgICAgICAgICAgICAgIHZhciBhbHRlcm5hdGVDb250ZW50ID0gW1xuICAgICAgICAgICAgICAgICAgICAkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiY2xvdWR2aWRlby1wbGF5ZXItZXJyb3ItdGV4dFwiKS50ZXh0KGVycm9yVGV4dCksXG4gICAgICAgICAgICAgICAgICAgICQoXCI8YnV0dG9uPlwiKS5hZGRDbGFzcyhcImNsb3VkdmlkZW8tcGxheWVyLXJldHJ5LWJ1dHRvblwiKS50ZXh0KHJldHJ5VGV4dCkuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW52b2tlSW5qZWN0b3JzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiY2xvdWR2aWRlby1wbGF5ZXItYWx0LXRleHRcIikudGV4dChhbHRUZXh0KVxuICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICAvLyBDb25zdHJ1Y3QgYSBjaGFpbiBvZiBpbmplY3RvcnMgKGVhY2ggd2lsbCBpbnZva2UgdGhlIG5leHQgb24gZmFpbHVyZSkuXG4gICAgICAgICAgICAgICAgdmFyIGFsdEluamVjdG9yID0gbmV3IEluamVjdG9ycy5BbHRJbmplY3Rvcihjb250YWluZXIsIHBsYXllcldpZHRoLCBwbGF5ZXJIZWlnaHQsIGFzc2V0RGF0YSwgYXBwbHlNZWRpYVF1ZXJpZXMsIHRydWUsIG51bGwsIGFsdGVybmF0ZUNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIHZhciBodG1sNUluamVjdG9yID0gbmV3IEluamVjdG9ycy5IdG1sNUluamVjdG9yKGNvbnRhaW5lciwgcGxheWVyV2lkdGgsIHBsYXllckhlaWdodCwgYXV0b1BsYXksIGFzc2V0RGF0YSwgYXBwbHlNZWRpYVF1ZXJpZXMsIHRydWUsIGFsdEluamVjdG9yKTtcbiAgICAgICAgICAgICAgICB2YXIgZGFzaEluamVjdG9yID0gbmV3IEluamVjdG9ycy5EYXNoSW5qZWN0b3IoY29udGFpbmVyLCBwbGF5ZXJXaWR0aCwgcGxheWVySGVpZ2h0LCBhdXRvUGxheSwgYXNzZXREYXRhLCBhcHBseU1lZGlhUXVlcmllcywgdHJ1ZSwgaHRtbDVJbmplY3Rvcik7XG4gICAgICAgICAgICAgICAgdmFyIHNtcEluamVjdG9yID0gbmV3IEluamVjdG9ycy5TbXBJbmplY3Rvcihjb250YWluZXIsIHBsYXllcldpZHRoLCBwbGF5ZXJIZWlnaHQsIGF1dG9QbGF5LCBhc3NldERhdGEsIGFwcGx5TWVkaWFRdWVyaWVzLCB0cnVlLCBkYXNoSW5qZWN0b3IsIGNvbnRlbnRCYXNlVXJsKTtcblxuICAgICAgICAgICAgICAgIHZhciBmaXJzdEluamVjdG9yOiBJbmplY3RvcnMuSW5qZWN0b3IgPSBzbXBJbmplY3RvcjtcbiAgICAgICAgICAgICAgICBmaXJzdEluamVjdG9yLmludm9rZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnZva2VJbmplY3RvcnMoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
