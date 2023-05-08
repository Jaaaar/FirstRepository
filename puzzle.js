<script>
// Javascript code generated from ast
var $B = __BRYTHON__,
    _b_ = $B.builtins,
    locals___main__ = $B.imported["__main__"],
    locals = locals___main__,
    frame = ["__main__", locals, "__main__", locals]
frame.__file__ = '<string>'
locals.__name__ = '__main__'
locals.__doc__ = _b_.None
locals.__annotations__ = locals.__annotations__ || $B.empty_dict()
frame.$f_trace = $B.enter_frame(frame)
$B.set_lineno(frame, 1)

var _frames = $B.frames_stack.slice()
var stack_length = $B.frames_stack.length
try{
  $B.set_lineno(frame, 1)
  $B.$import("random", [], {}, locals, true)
  $B.set_lineno(frame, 3)
  var v4934 = $B.$list(['apple', 'banana', 'orange', 'pear', 'grape', 'kiwi', 'pineapple'])
  locals___main__.words = v4934
  $B.set_lineno(frame, 6)
  var v4935 = $B.$call1($B.$getattr_pep657(locals___main__.random, 'choice', [7, 7, 20]), [14, 14, 27])(locals___main__.words)
  locals___main__.word = v4935
  $B.set_lineno(frame, 9)
  var v4936 = $B.$call1(_b_.list, [12, 12, 22])(locals___main__.word)
  locals___main__.scrambled = v4936
  $B.set_lineno(frame, 10);
  $B.$call1($B.$getattr_pep657(locals___main__.random, 'shuffle', [0, 0, 14]), [7, 7, 25])(locals___main__.scrambled)
  $B.set_lineno(frame, 11)
  var v4937 = $B.$call1($B.$getattr_pep657('', 'join', [12, 12, 19]), [15, 15, 30])(locals___main__.scrambled)
  locals___main__.scrambled = v4937
  $B.set_lineno(frame, 14);
  $B.$call1(_b_.print, [0, 0, 37])($B.rich_op('__add__', 'Guess the word: ', locals___main__.scrambled, [6, 25, 26, 36]))
  $B.set_lineno(frame, 17)
  var v4938 = $B.$call1(_b_.input, [8, 8, 35])('Enter your guess: ')
  locals___main__.guess = v4938
  if($B.set_lineno(frame, 20) && $B.$bool($B.rich_comp('__eq__', locals___main__.guess, locals___main__.word))){
    $B.set_lineno(frame, 21);
    $B.$call1(_b_.print, [4, 4, 51])('Congratulations, you guessed the word!')
  }else{
    $B.set_lineno(frame, 23);
    $B.$call1(_b_.print, [4, 4, 40])('Sorry, that\'s not the word.')
  }
  $B.leave_frame({locals, value: _b_.None})
}catch(err){
  $B.set_exc(err, frame)
  if((! err.$in_trace_func) && frame.$f_trace !== _b_.None){
    frame.$f_trace = $B.trace_exception()
  }
  $B.leave_frame({locals, value: _b_.None})
  throw err
}
<script>
