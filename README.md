#React Practice

# there are two type of dependency dev dependency and normal dependency dev dependency is only required for development.

# ^(carrat-upgrades minor version(good to use)) vs ~(tilde-upgrades major version)

# packagelock.json:(keeps the track of exact version) 

# parcel can be dependent on other      dependencies and these are called transitive dependencies

# put package and package-lock.json in github node_modules can be regenerated from it. 

# npx means executing the package

# CDN links is not agood way to bring react into the project beacuase cdn makes a network call , you will have to keep changing the urls.

# Parcel
- Dev Build
- Local Server
- HMR (Hot module replacement)
- uses a file watching algorithm written in C++ which keeps an eye on all the files
- Caching (Faster builds)
- Image Optimization
- Minification of files
- Bundling of files
- Compress
- Consistent hashing
- Code Splitting
- Differential Bundling (to support older browser)
- Diagnostic
- Error Handling
- Https
- Tree Shaking (remove everthing that isnt used)

# JSX
- JSX is a html like syntax(it is not html in js)
- JS engine does not understand JSX
- JSX code is transpiled before it reaches the javascript engine
- Transpiling is done by parcel (Babel does it for parcel)
- JSX -> React.createElement => ReactElement-JS object=>HTMLElement(render)
- if you write a curly braces{} inside JSX you can run any javascript code inside it

# React Component
- Class base component ( old way) no one uses it now
- Function base component (new way) its a normal javascript function
 