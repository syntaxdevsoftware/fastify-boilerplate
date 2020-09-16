# How to use

- clone this repo
  (`git clone https://gitlab.com/syntax-dev/templates/fastify.git [project name]`)
- delete .got (`rm -rf .git)
- readd git & setup new origin
  - git init
  - git remote add origin https://gitlab.com/syntax-dev/[SUBGROUP]/[PROJECT].git
  - git add .
  - git commit -m "Initial commit"
  - git push -u origin master

### src/[folder] path mapping

If you need add a new fodler to src (`src/foo`) and want to access it with `@foo` you need
to

- add entry to `paths` in `tsconfig.json` -> `"@foo*": ["src/foo"]`
- add entry to `_moduleAliases` in `package.json` -> `"@foo": "dist/foo"`

This is because
[TS is somewhat retarded sometimes](https://github.com/microsoft/TypeScript/issues/10866)
and map the paths defined in `paths` when compiling, expecting the user to do it using
some bundler / loader.

So we need to manually map the paths on output, this is done using
[`module-alias`](https://www.npmjs.com/package/module-alias)
