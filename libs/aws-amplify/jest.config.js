module.exports = {
  name: 'aws-amplify',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/aws-amplify',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
