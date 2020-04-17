export const Data = {
  "estimatedIncomeTaxWthlSection": {
    "fedralIncomeTaxWthlTable": {
      "sectionTitle": "Table 1",
      "selectedRadioAddress": "A_radio4",
      "applyColsWidth": "true",
      "tableRows": [
        {
          "tableColumns": [
            {
              "colTitle": "A 1",
              "isRadio": true,
              "formControlName": "A_RADIO",
              "selectedRadioAddress": "A_radio4",
              "isRadioSelected": true,
              "radioValue": "A_radio4"
            },
            {
              "colTitle": "",
              "formControlName": "A_withold_this_amount",
              "isEditable": true,
              "isDollar": false
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "A 2",
              "isRadio": true,
              "formControlName": "A_RADIO",
              "selectedRadioAddress": "A_radio4",
              "isRadioSelected": false,
              "radioValue": "A_radio5"
            },
            {
              "colTitle": "",
              "formControlName": "A_withold_this_percent",
              "isEditable": true,
              "isPercent": true
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "A 3",
              "isRadio": true,
              "formControlName": "A_RADIO",
              "selectedRadioAddress": "A_radio4",
              "isRadioSelected": false,
              "radioValue": "A_radio6"
            },
            {
              "colTitle": "$0.00"
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "A 4 Choices:",
              "isRadio": true,
              "formControlName": "A_RADIO",
              "selectedRadioAddress": "A_radio4",
              "isRadioSelected": false,
              "radioValue": "A_radio7"
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Marital Status",
              "isChildRow": true
            },
            {
              "formControlName": "A_marital_status",
              "selectedOption": "1",
              "dropDownItems": [
                {
                  "label": "Married",
                  "value": "1",
                  "id": "married"
                },
                {
                  "label": "Single",
                  "value": "2",
                  "id": "single"
                }
              ],
              "isDropDown": true,
              "isChildRow": true
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Number of Allowances",
              "isChildRow": true
            },
            {
              "colTitle": "",
              "formControlName": "A_number_of_allowances",
              "isEditable": true,
              "isSmallInput": true,
              "isChildRow": true
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Additional Amount",
              "isChildRow": true
            },
            {
              "colTitle": "",
              "formControlName": "A_additional_amount",
              "isEditable": true,
              "isDollar": true,
              "isChildRow": true
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Estimated Federal Amount",
              "isActionButton": true
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Estimated Federal Amount Withheld",
              "isLeadIn": true
            },
            {
              "colTitle": "$888,888.88",
              "isLeadIn": true
            }
          ],
          "isBrandingHighlighted5": true
        }
      ]
    },
    "stateIncomeTaxWthlTable": {
      "sectionTitle": "Table 2",
      "selectedRadioAddress": "B_radio1",
      "applyColsWidth": "true",
      "tableRows": [
        {
          "tableColumns": [
            {
              "colTitle": "State"
            },
            {
              "formControlName": "B_state",
              "selectedOption": "1",
              "dropDownItems": [
                {
                  "label": "IL",
                  "value": "1",
                  "id": "IL"
                },
                {
                  "label": "IN",
                  "value": "2",
                  "id": "IN"
                },
                {
                  "label": "ID",
                  "value": "3",
                  "id": "ID"
                }
              ],
              "isDropDown": true
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "State income tax withholding is not supported for this payment."
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Withhold Nothing",
              "isRadio": true,
              "formControlName": "B_RADIO",
              "selectedRadioAddress": "B_radio1",
              "isRadioSelected": false,
              "radioValue": "B_radio1"
            },
            {
              "colTitle": "$0.00"
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Withhold Nothing(If no federal income tax withheld)",
              "isRadio": true,
              "formControlName": "B_RADIO",
              "selectedRadioAddress": "B_radio1",
              "isRadioSelected": false,
              "radioValue": "B_radio2"
            },
            {
              "colTitle": "$0.00"
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Withhold Default Amount",
              "isRadio": true,
              "formControlName": "B_RADIO",
              "selectedRadioAddress": "B_radio1",
              "isRadioSelected": false,
              "radioValue": "B_radio3"
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Withhold Default Amount",
              "isRadio": true,
              "formControlName": "B_RADIO",
              "selectedRadioAddress": "B_radio1",
              "isRadioSelected": false,
              "radioValue": "B_radio4"
            },
            {
              "colTitle": "$8,999.99"
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Withhold This Amount (Minimum $1,999.99)(Minimums may apply.)",
              "isRadio": true,
              "formControlName": "B_RADIO",
              "selectedRadioAddress": "B_radio1",
              "isRadioSelected": false,
              "radioValue": "B_radio5"
            },
            {
              "colTitle": "",
              "formControlName": "B_withhold_this_amount",
              "isEditable": true,
              "isDollar": true
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Withhold Using These Choices:",
              "isRadio": true,
              "formControlName": "B_RADIO",
              "selectedRadioAddress": "B_radio1",
              "isRadioSelected": false,
              "radioValue": "B_radio6"
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Marital Status",
              "isChildRow": true
            },
            {
              "formControlName": "B_marital_status",
              "selectedOption": "1",
              "dropDownItems": [
                {
                  "label": "Married",
                  "value": "1",
                  "id": "married"
                },
                {
                  "label": "Single",
                  "value": "2",
                  "id": "single"
                }
              ],
              "isDropDown": true,
              "isChildRow": true
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Number of Allowances",
              "isChildRow": true
            },
            {
              "colTitle": "[99]",
              "formControlName": "B_number_of_allowances",
              "isEditable": true,
              "isSmallInput": true,
              "isChildRow": true
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Additional Amount",
              "isChildRow": true
            },
            {
              "colTitle": "",
              "formControlName": "B_additional_amount",
              "isEditable": true,
              "isDollar": true,
              "isChildRow": true
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Additional Percent",
              "isChildRow": true
            },
            {
              "colTitle": "",
              "formControlName": "B_additional_percent",
              "isEditable": true,
              "isPercent": true,
              "isChildRow": true
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Withhold Using These Choices:",
              "isRadio": true,
              "formControlName": "B_RADIO",
              "selectedRadioAddress": "B_radio1",
              "isRadioSelected": false,
              "radioValue": "B_radio7"
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Percentage of Your Taxable Benefit Amount",
              "isChildRow": true
            },
            {
              "formControlName": "B_percentage_of_your_taxable_benefit_amount",
              "selectedOption": "20",
              "dropDownItems": [
                {
                  "label": "10%",
                  "value": "10",
                  "id": "ten"
                },
                {
                  "label": "20%",
                  "value": "20",
                  "id": "twenty"
                }
              ],
              "isDropDown": true,
              "isChildRow": true
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Additional Amount",
              "isChildRow": true
            },
            {
              "colTitle": "",
              "formControlName": "B_additional_amount",
              "isEditable": true,
              "isDollar": true,
              "isChildRow": true
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Estimated State Amount Withheld",
              "isLeadIn": true
            },
            {
              "colTitle": "$777,777.77",
              "isLeadIn": true
            }
          ],
          "isBrandingHighlighted5": true
        },
        {
          "tableColumns": [
            {
              "colTitle": "You can't model state withholding.",
              "isLeadIn": true
            }
          ],
          "isBrandingHighlighted5": true
        }
      ]
    }
  },
  "estimateWithholdingSection": {
    "tableRows": [
      {
        "tableColumns": [
          {
            "colTitle": "Estimate Withholding",
            "isActionButton": true
          },
          {
            "colTitle": "Make another estimate by entering different numbers above and choosing <strong>Estimate Withholding again</strong>.",
            "isAlignLeft": true
          }
        ]
      }
    ]
  },
  "actionButtons": {
    "changeButton": "Change Witholding",
    "cancelButton": "Cancel"
  }
}