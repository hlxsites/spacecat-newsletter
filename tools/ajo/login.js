//  Sign In button
// document.addEventListener('DOMContentLoaded', function() {
//   let signInButton = document.querySelector('.button.primary');
//   signInButton.addEventListener('click', function(event) {
//     event.preventDefault();
//     executeLogin();
//   });
window.console.log('File loaded: login.js');

function executeLogin() {
  window.adobeIMS.signIn();
  window.console.log('Executing login.js');

  // reader initial logged out experience
  window.console.log('Initializing IMS');
}

window.adobeid = {
  client_id: 'macquarie-demo-prod',
  scope: 'openid, AdobeID, read_organizations, ab.manage, additional_info, additional_info.projectedProductContext, additional_info.roles, read_pc.acp, read_pc, read_pc.dma_tartan',
  locale: 'en_US',
  environment: 'prod',
  autoValidateToken: true,
  modalMode: true,
  onAccessToken: function (tokenInformation) {
    sessionStorage.setItem('ims-token', tokenInformation.token);
    console.log('tokenInformation', tokenInformation);
  },
  onReauthAccessToken: function (reauthTokenInformation) {
    console.log('reauthTokenInformation', reauthTokenInformation);
  },
  onError: function (error) {
    console.log('error', error);
  },
  onAccessTokenHasExpired: function() {
    console.log('onAccessTokenHasExpired');
  },
  onReady: function(appState) {
    console.log('onready', appState);
  }
};
