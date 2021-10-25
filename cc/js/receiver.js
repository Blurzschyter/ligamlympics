const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();

// Debug Logger
const castDebugLogger = cast.debug.CastDebugLogger.getInstance();
const LOG_TAG = 'MyAPP.LOG';

// Enable debug logger and show a 'DEBUG MODE' overlay at top left corner.
// castDebugLogger.setEnabled(true);

// Show debug overlay
// castDebugLogger.showDebugLogs(true);

// Set verbosity level for Core events.
// castDebugLogger.loggerLevelByEvents = {
//   'cast.framework.events.category.CORE': cast.framework.LoggerLevel.INFO,
//   'cast.framework.events.EventType.MEDIA_STATUS': cast.framework.LoggerLevel.DEBUG
// }

// Set verbosity level for custom tags.
// castDebugLogger.loggerLevelByTags = {
//   LOG_TAG: cast.framework.LoggerLevel.DEBUG,
// };

// castDebugLogger.info(LOG_TAG, 'nizar Intercepting LOAD request');
var start = window.onload = function () {
  console.log('nizar test 234')
  datalol()
};
console.log("nizar lolallal");

var datalol = function () {
  playerManager.setMessageInterceptor(

    cast.framework.messages.MessageType.LOAD, loadRequestData => {
        console.log('nizar loadRequest:', loadRequestData);
      
    })

    context.start();
}


