import {
  formatFiles,
  writeJson,
  Tree,
  getProjects
} from '@nx/devkit';

export async function myGeneratorGenerator(
  tree: Tree
) {
  const projects = [];
  for (const project of getProjects(tree)) {
    if (project[1].projectType === 'application') projects.push(project[0]);
  }
  writeJson(tree, 'apps.json', projects);
  await formatFiles(tree);
}

export default myGeneratorGenerator;
