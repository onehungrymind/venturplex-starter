module.exports = {
  name: 'amplify',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/amplify',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
