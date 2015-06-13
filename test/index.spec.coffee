require './helpers'

describe "Breadcrumbs Component", ->

  beforeAll ->
    moduleUnderTest = "../src/index.jsx"
    mockModules = [
      "offcourse-component-level-button"
    ]
    { @Component, @spy } = mockModule moduleUnderTest, mockModules

  afterAll ->
    disableMocks()

  Given -> 
    testdom "<html><body></body></html>"
    @levels = 
      current: "bar"
      foo: id: "1", title: "foobar"
      bar: id: "1", title: "barbaz"
      baz: false
    @setLevel = () -> 

  When  -> 
    @subject  = renderElement @Component, { @levels, @setLevel }

  Then  -> 
    classes = @subject.className.split ' '
    classes.includes "breadcrumbs"
  And   ->
    current = false
    level   = { type: "foo", title: "foobar", id: "1" }
    args    = { current, level, @setLevel }
    expect(@spy.getCall(0).args[0]).to.deep.equal(args)
  And   ->
    current = true
    level   = { type: "bar", title: "barbaz", id: "1" }
    args    = { current, level, @setLevel }
    expect(@spy.getCall(1).args[0]).to.deep.equal(args)
