import {
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  BuildTool,
  ProjectType,
} from '@srclaunch/types';

export default {
  name: '@srclaunch/exceptions',
  description: 'Exception handling utilities',
  type: ProjectType.Library,
  build: {
    formats: [BuildFormat.ESM, BuildFormat.CJS],
    platform: BuildPlatform.Node,
    sourcemap: true,
    splitting: false,
    target: BuildTarget.ESNext,
    tool: BuildTool.ESBuild,
  },
};
