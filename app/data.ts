export const Data = {
  "transactionHeader": "Payment Withholding",
  "pageTitleItem": "Model Your Income Tax Withholding",
  "pageDescriptions": [
    "You can enter different amounts below to determine how much to withhold from your payment, but you can't change income tax withholding on this site. To make changes, print this page for your reference. Then you can Print an Income Tax Withholding Form along with mailing instructions"
  ],
  "paymentDescriptionSection": {
    "tableTitle": "Payment Description",
    "tableRows": [
      {
        "tableColumns": [
          {
            "colTitle": "Gross Amount",
            "isLeadIn": true
          },
          {
            "colTitle": "$999,999.99",
            "isLeadIn": true
          }
        ]
      }
    ]
  },
  "estimatedIncomeTaxWthlSection": {
    "fedralIncomeTaxWthlTable": {
      "sectionTitle": "Federal Income Tax Withholding",
      "selectedRadioAddress": "FITR_radio4",
      "applyColsWidth": "true",
      "tableRows": [
        {
          "tableColumns": [
            {
              "colTitle": "Taxable Income"
            },
            {
              "colTitle": "$999,999.99"
            }
          ],
          "isBrandingHighlighted4": true
        },
        {
          "tableColumns": [
            {
              "colTitle": "Withhold Nothing",
              "isRadio": true,
              "formControlName": "FEDERAL_INCOME_TAX_RADIO",
              "selectedRadioAddress": "FITR_radio4",
              "isRadioSelected": false,
              "radioValue": "FITR_radio1"
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
              "formControlName": "FEDERAL_INCOME_TAX_RADIO",
              "selectedRadioAddress": "FITR_radio4",
              "isRadioSelected": false,
              "radioValue": "FITR_radio2"
            },
            {
              "colTitle": "$8,999.99"
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Withhold Minimum Amount",
              "isRadio": true,
              "formControlName": "FEDERAL_INCOME_TAX_RADIO",
              "selectedRadioAddress": "FITR_radio4",
              "isRadioSelected": true,
              "radioValue": "FITR_radio3"
            },
            {
              "colTitle": "$1,999.99"
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Withhold This Amount (Minimum $1,999.99)",
              "isRadio": true,
              "formControlName": "FEDERAL_INCOME_TAX_RADIO",
              "selectedRadioAddress": "FITR_radio4",
              "isRadioSelected": true,
              "radioValue": "FITR_radio4"
            },
            {
              "colTitle": "",
              "formControlName": "FITR_withold_this_amount",
              "isEditable": true,
              "isDollar": false
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Withhold This Percent (Minimum [3]%)",
              "isRadio": true,
              "formControlName": "FEDERAL_INCOME_TAX_RADIO",
              "selectedRadioAddress": "FITR_radio4",
              "isRadioSelected": false,
              "radioValue": "FITR_radio5"
            },
            {
              "colTitle": "",
              "formControlName": "FITR_withold_this_percent",
              "isEditable": true,
              "isPercent": true
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Withhold Nothing (Minimums may apply.)",
              "isRadio": true,
              "formControlName": "FEDERAL_INCOME_TAX_RADIO",
              "selectedRadioAddress": "FITR_radio4",
              "isRadioSelected": false,
              "radioValue": "FITR_radio6"
            },
            {
              "colTitle": "$0.00"
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Withhold Using These Choices:",
              "isRadio": true,
              "formControlName": "FEDERAL_INCOME_TAX_RADIO",
              "selectedRadioAddress": "FITR_radio4",
              "isRadioSelected": false,
              "radioValue": "FITR_radio7"
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
              "formControlName": "FITR_marital_status",
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
              "formControlName": "FITR_number_of_allowances",
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
              "formControlName": "FITR_additional_amount",
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
      "sectionTitle": "State Income Tax Withholding",
      "selectedRadioAddress": "SITR_radio1",
      "applyColsWidth": "true",
      "tableRows": [
        {
          "tableColumns": [
            {
              "colTitle": "Taxable Income"
            },
            {
              "colTitle": "$111,111.11"
            }
          ],
          "isBrandingHighlighted4": true
        },
        {
          "tableColumns": [
            {
              "colTitle": "State"
            },
            {
              "formControlName": "SITR_state",
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
              "formControlName": "STATE_INCOME_TAX_RADIO",
              "selectedRadioAddress": "SITR_radio1",
              "isRadioSelected": false,
              "radioValue": "SITR_radio1"
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
              "formControlName": "STATE_INCOME_TAX_RADIO",
              "selectedRadioAddress": "SITR_radio1",
              "isRadioSelected": false,
              "radioValue": "SITR_radio2"
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
              "formControlName": "STATE_INCOME_TAX_RADIO",
              "selectedRadioAddress": "SITR_radio1",
              "isRadioSelected": false,
              "radioValue": "SITR_radio3"
            }
          ]
        },
        {
          "tableColumns": [
            {
              "colTitle": "Withhold Default Amount",
              "isRadio": true,
              "formControlName": "STATE_INCOME_TAX_RADIO",
              "selectedRadioAddress": "SITR_radio1",
              "isRadioSelected": false,
              "radioValue": "SITR_radio4"
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
              "formControlName": "STATE_INCOME_TAX_RADIO",
              "selectedRadioAddress": "SITR_radio1",
              "isRadioSelected": false,
              "radioValue": "SITR_radio5"
            },
            {
              "colTitle": "",
              "formControlName": "SITR_withhold_this_amount",
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
              "formControlName": "STATE_INCOME_TAX_RADIO",
              "selectedRadioAddress": "SITR_radio1",
              "isRadioSelected": false,
              "radioValue": "SITR_radio6"
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
              "formControlName": "SITR_marital_status",
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
              "formControlName": "SITR_number_of_allowances",
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
              "formControlName": "SITR_additional_amount",
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
              "formControlName": "SITR_additional_percent",
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
              "formControlName": "STATE_INCOME_TAX_RADIO",
              "selectedRadioAddress": "SITR_radio1",
              "isRadioSelected": false,
              "radioValue": "SITR_radio7"
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
              "formControlName": "SITR_percentage_of_your_taxable_benefit_amount",
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
              "formControlName": "SITR_additional_amount",
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