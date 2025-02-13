var VSLPatternRec = (function (jspsych) {
  'use strict';

  const info = {
      name: "vsl-pattern-rec",
      parameters: {
          /** The HTML string to be displayed */
          target: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Target",
              default: undefined,
              array: true,
          },
          /** Array containing the label(s) for the button(s). */
          foils: {
              type: jspsych.ParameterType.ARRAY,
              pretty_name: "Foils",
              default: undefined,
              array: true,
          },
      },
  };
  /**
   * html-button-response
   * jsPsych plugin for displaying a stimulus and getting a button response
   * @author Josh de Leeuw
   * @see {@link https://www.jspsych.org/plugins/jspsych-html-button-response/ html-button-response plugin documentation on jspsych.org}
   */
  class VSLPatternRecPlugin {
      constructor(jsPsych) {
          this.jsPsych = jsPsych;
      }
      trial(display_element, trial) {
          var insert_position = jsPsych.randomization.randomInt(0, trial.foils.length);
          var choices = jsPsych.randomization.shuffle(trial.foils);
          choices.splice(insert_position, 0, trial.target);
          // display stimulus
          var html = '<div id="jspsych-html-button-response-stimulus">Scegli la combinazione che ti sembra più familiare.</div>';
          //display buttons
          html += '<div id="jspsych-html-button-response-btngroup">';
          for (var i = 0; i < choices.length; i++) {
              var image_html = '';
              for (let image_i of choices[i]) {
                image_html += '<img src="' + image_i + '" />'
              }
              var str = '<button class="jspsych-btn">' + image_html + '</button>';
              html += '<p><div class="jspsych-html-button-response-button" style="display: inline-block; margin:0px 8px" id="jspsych-html-button-response-button-' +
                      i + '" data-choice="' + i + '">' + str + "</div></p>";
          }
          html += "</div>";
          display_element.innerHTML = html;
          // start time
          var start_time = performance.now();
          // add event listeners to buttons
          for (var i = 0; i < choices.length; i++) {
              display_element
                  .querySelector("#jspsych-html-button-response-button-" + i)
                  .addEventListener("click", (e) => {
                  var btn_el = e.currentTarget;
                  var choice = btn_el.getAttribute("data-choice"); // don't use dataset for jsdom compatibility
                  after_response(choice);
              });
          }
          // store response
          var response = {
              rt: null,
              button: null,
          };
          // function to end trial when it is time
          const end_trial = () => {
              // kill any remaining setTimeout handlers
              this.jsPsych.pluginAPI.clearAllTimeouts();
              // gather the data to store for the trial
              var trial_data = {
                  my_trial_type: "experimental",
                  task_type: "vsl",
                  subtask_type: 'clicking',
                  rt: response.rt,
                  target: trial.target,
                  response: choices[response.button],
                  correct: insert_position === response.button,
                  item_no_target: trial.item_no_target,
                  chance: trial.chance
              };
              // clear the display
              display_element.innerHTML = "";
              // move on to the next trial
              this.jsPsych.finishTrial(trial_data);
          };
          // function to handle responses by the subject
          function after_response(choice) {
              // measure rt
              var end_time = performance.now();
              var rt = Math.round(end_time - start_time);
              response.button = parseInt(choice);
              response.rt = rt;
              // after a valid response, the stimulus will have the CSS class 'responded'
              // which can be used to provide visual feedback that a response was recorded
              display_element.querySelector("#jspsych-html-button-response-stimulus").className +=
                  " responded";
              // disable all the buttons after a response
              var btns = document.querySelectorAll(".jspsych-html-button-response-button button");
              for (var i = 0; i < btns.length; i++) {
                  //btns[i].removeEventListener('click');
                  btns[i].setAttribute("disabled", "disabled");
              }
              end_trial();
          }
      }
  }
  VSLPatternRecPlugin.info = info;
  return VSLPatternRecPlugin;
})(jsPsychModule);
