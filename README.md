# kata11-sorting-it-out

http://codekata.com/kata/kata11-sorting-it-out/

Whole example written in Javascript without using any built in function including array.push or chartoint.

examples:

example 1:

var in_str  = "When not studying nuclear physics, Bambi likes to play\n\nbeach volleyball."

  , exp_str = "aaaaabbbbcccdeeeeeghhhiiiiklllllllmnnnnooopprsssstttuuvwyyyy";
  
funcs.SortingCharacters.getSortedChars(in_str) === exp_str;


in_str = 'When not studying nuclear physics, Bambi likes to play\n\nbeach!£%$^%^&****((&*$&^$£"%"!£$"£$%£"$%^%^^ volleyball.';

funcs.SortingCharacters.getSortedChars(in_str) === exp_str;


example 2:

rack = funcs.SortingBalls();

assert_equal([], rack.balls);

rack.add(20);

assert_equal([ 20 ], rack.balls);

rack.add(10);

assert_equal([ 10, 20 ], rack.balls);

rack.add(30);

assert_equal([ 10, 20, 30 ], rack.balls);

