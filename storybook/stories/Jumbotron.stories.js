import { storiesOf } from '@storybook/vue'
import Jumbotron from '@mesg-components/jumbotron/Jumbotron'

import '../style.css'

storiesOf('Jumbotron', module)
.add('default', () => ({
  components: { Jumbotron },
  template: `<Jumbotron visibleFooter>
    <template v-slot:left-side>
      <div style="">    
      <div style=" width: 490px;    
      font-family: OpenSans;
      font-size: 38px;
      color: var(--Purple-1);"    
      >Algorithmic Token Distribution </div>
      <div style="width: 490px;
        height: 83px;
        font-family: OpenSans;
        font-size: 20px;
        color: var(--Grey-1);"
      >The ATD protects token value and prevents volatility by restricting sales and payouts, so the value of the token can grow alongside the project.</div>
      <div style="  width: 490px;
      height: 26px;
      font-family: OpenSans;
      font-size: 17px;
      font-weight: 600;
      line-height: 1.41;  
      color: var(--Purple-1);">Smart Contracts:</div>

      <button style="width: 218px;
      height: 40px;
      border-radius: 3px;
      background-color: var(--Purple-3);
      color:#fff;">ATD</button>
      <button style="
      width: 218px;
      height: 40px;
      color: var(--Purple-3);
      ">MESG Token</button>
      </div>
    </template>

    <template v-slot:right-side>
      
      <div style="
        width: 490px;
        height: 150px;
        border-radius: 6px;
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
        background-color: var(--White);
        margin-bottom: 20px;
        ">
        <div>
          <div style="
          width: 60px;
          height: 60px;
          object-fit: contain;
          text-align: center;
          padding: 45px 20px 45px 40px;
          float: left;
          ">image</div>
          <div style="padding-top: 23px;">
            <div style="width: 330px;
            height: 24px;
            font-family: OpenSans;
            font-size: 17px;
            font-weight: 600;
            line-height: 1.41;
            color: var(--Purple-1);"
            >Circulating Supply</div>
            <div style="
            width: 330px;
            height: 36px;
            font-family: OpenSans;
            font-size: 30px;
            color: var(--Purple-3);
            ">7,705,135</div>
          </div>
        </div>
      </div>

      <div style="
        width: 490px;
        height: 150px;
        border-radius: 6px;
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
        background-color: var(--White);
        margin-bottom: 20px;
        ">
        <div>
          <div style="
          width: 60px;
          height: 60px;
          object-fit: contain;
          text-align: center;
          padding: 45px 20px 45px 40px;
          float: left;
          ">image</div>
          <div style="padding-top: 23px;">
            <div style="width: 330px;
            height: 24px;
            font-family: OpenSans;
            font-size: 17px;
            font-weight: 600;
            line-height: 1.41;
            color: var(--Purple-1);"
            >Tokens Released Yesterday</div>
            <div style="
            width: 330px;
            height: 36px;
            font-family: OpenSans;
            font-size: 30px;
            color: var(--Purple-3);
            ">7,705,135</div>
          </div>
        </div>
      </div>

      <div style="
        width: 490px;
        height: 150px;
        border-radius: 6px;
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
        background-color: var(--White);
        margin-bottom: 20px;
        ">
        <div>
          <div style="
          width: 60px;
          height: 60px;
          object-fit: contain;
          text-align: center;
          padding: 45px 20px 45px 40px;
          float: left;
          ">image</div>
          <div style="padding-top: 23px;">
            <div style="width: 330px;
            height: 24px;
            font-family: OpenSans;
            font-size: 17px;
            font-weight: 600;
            line-height: 1.41;
            color: var(--Purple-1);"
            >Trading Volume Yesterday</div>
            <div style="
            width: 330px;
            height: 36px;
            font-family: OpenSans;
            font-size: 30px;
            color: var(--Purple-3);
            ">7,705,135</div>
          </div>
        </div>
      </div>
      
    </template>  
    
    <template v-slot:footer>    
      <div style="
        height:300px;
      ">
        <p>Locked Wallets</p>
        <div style="display: flex;">
          <div class="sale" style="margin:0px 5px 0px 0px;">
            <div style="
              width: 225px;
              height: 144px;
              border-radius: 6px;
              border: solid 1px var(--lavender-2);
              background-color: var(--White);">
              <ul>
                <li>Sale:</li>
                <li>Initial Balance:999</li>
              </ul>
            </div>

            <div style="
              width: 225px;
              height: 6px;
              background-color: var(--Purple-3);">
            </div>
          </div>     
          
          <div class="partner" style="margin:0px 5px 0px 0px;">
            <div style="
              width: 225px;
              height: 144px;
              border-radius: 6px;
              border: solid 1px var(--lavender-2);
              background-color: var(--White);">
              <ul>
                <li>Sale:</li>
                <li>Initial Balance:999</li>
              </ul>
            </div>

            <div style="
              width: 225px;
              height: 6px;
              background-color: var(--Purple-3);">
            </div>
          </div> 

          <div class="Founders & Team" style="margin:0px 5px 0px 0px;">
            <div style="
              width: 225px;
              height: 144px;
              border-radius: 6px;
              border: solid 1px var(--lavender-2);
              background-color: var(--White);">
              <ul>
                <li>Sale:</li>
                <li>Initial Balance:999</li>
              </ul>
            </div>

            <div style="
              width: 225px;
              height: 6px;
              background-color: var(--Purple-3);">
            </div>
          </div> 

          <div class="Reserve" style="margin:0px 5px 0px 0px;">
            <div style="
              width: 225px;
              height: 144px;
              border-radius: 6px;
              border: solid 1px var(--lavender-2);
              background-color: var(--White);">
              <ul>
                <li>Sale:</li>
                <li>Initial Balance:999</li>
              </ul>
            </div>

            <div style="
              width: 225px;
              height: 6px;
              background-color: var(--Purple-3);">
            </div>
          </div> 

        </div>          
      </div>
    </template>
  </Jumbotron>`,
  data: () => ({
    
  })
}))
.add('horizontal', () => ({
  components: { Jumbotron },
  template: `<Jumbotron horizontal visibleFooter>
    <template v-slot:left-side>
      <div style="">    
      <div style=" width: 490px;    
      font-family: OpenSans;
      font-size: 38px;
      color: var(--Purple-1);"    
      >Algorithmic Token Distribution </div>
      <div style="width: 490px;
        height: 83px;
        font-family: OpenSans;
        font-size: 20px;
        color: var(--Grey-1);"
      >The ATD protects token value and prevents volatility by restricting sales and payouts, so the value of the token can grow alongside the project.</div>
      <div style="  width: 490px;
      height: 26px;
      font-family: OpenSans;
      font-size: 17px;
      font-weight: 600;
      line-height: 1.41;  
      color: var(--Purple-1);">Smart Contracts:</div>

      <button style="width: 218px;
      height: 40px;
      border-radius: 3px;
      background-color: var(--Purple-3);
      color:#fff;">ATD</button>
      <button style="
      width: 218px;
      height: 40px;
      color: var(--Purple-3);
      ">MESG Token</button>
      </div>
    </template>

    <template v-slot:right-side>
      
      <div style="
        width: 490px;
        height: 150px;
        border-radius: 6px;
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
        background-color: var(--White);
        margin-bottom: 20px;
        ">
        <div>
          <div style="
          width: 60px;
          height: 60px;
          object-fit: contain;
          text-align: center;
          padding: 45px 20px 45px 40px;
          float: left;
          ">image</div>
          <div style="padding-top: 23px;">
            <div style="width: 330px;
            height: 24px;
            font-family: OpenSans;
            font-size: 17px;
            font-weight: 600;
            line-height: 1.41;
            color: var(--Purple-1);"
            >Circulating Supply</div>
            <div style="
            width: 330px;
            height: 36px;
            font-family: OpenSans;
            font-size: 30px;
            color: var(--Purple-3);
            ">7,705,135</div>
          </div>
        </div>
      </div>

      <div style="
        width: 490px;
        height: 150px;
        border-radius: 6px;
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
        background-color: var(--White);
        margin-bottom: 20px;
        ">
        <div>
          <div style="
          width: 60px;
          height: 60px;
          object-fit: contain;
          text-align: center;
          padding: 45px 20px 45px 40px;
          float: left;
          ">image</div>
          <div style="padding-top: 23px;">
            <div style="width: 330px;
            height: 24px;
            font-family: OpenSans;
            font-size: 17px;
            font-weight: 600;
            line-height: 1.41;
            color: var(--Purple-1);"
            >Tokens Released Yesterday</div>
            <div style="
            width: 330px;
            height: 36px;
            font-family: OpenSans;
            font-size: 30px;
            color: var(--Purple-3);
            ">7,705,135</div>
          </div>
        </div>
      </div>

      <div style="
        width: 490px;
        height: 150px;
        border-radius: 6px;
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
        background-color: var(--White);
        margin-bottom: 20px;
        ">
        <div>
          <div style="
          width: 60px;
          height: 60px;
          object-fit: contain;
          text-align: center;
          padding: 45px 20px 45px 40px;
          float: left;
          ">image</div>
          <div style="padding-top: 23px;">
            <div style="width: 330px;
            height: 24px;
            font-family: OpenSans;
            font-size: 17px;
            font-weight: 600;
            line-height: 1.41;
            color: var(--Purple-1);"
            >Trading Volume Yesterday</div>
            <div style="
            width: 330px;
            height: 36px;
            font-family: OpenSans;
            font-size: 30px;
            color: var(--Purple-3);
            ">7,705,135</div>
          </div>
        </div>
      </div>
      
    </template>

    <template v-slot:footer>    
      <div style="
        height:300px;
      ">
        <p>Locked Wallets</p>
        <div style="display: flex;">
          <div class="sale" style="margin:0px 5px 0px 0px;">
            <div style="
              width: 225px;
              height: 144px;
              border-radius: 6px;
              border: solid 1px var(--lavender-2);
              background-color: var(--White);">
              <ul>
                <li>Sale:</li>
                <li>Initial Balance:999</li>
              </ul>
            </div>

            <div style="
              width: 225px;
              height: 6px;
              background-color: var(--Purple-3);">
            </div>
          </div>     
          
          <div class="partner" style="margin:0px 5px 0px 0px;">
            <div style="
              width: 225px;
              height: 144px;
              border-radius: 6px;
              border: solid 1px var(--lavender-2);
              background-color: var(--White);">
              <ul>
                <li>Sale:</li>
                <li>Initial Balance:999</li>
              </ul>
            </div>

            <div style="
              width: 225px;
              height: 6px;
              background-color: var(--Purple-3);">
            </div>
          </div> 

          <div class="Founders & Team" style="margin:0px 5px 0px 0px;">
            <div style="
              width: 225px;
              height: 144px;
              border-radius: 6px;
              border: solid 1px var(--lavender-2);
              background-color: var(--White);">
              <ul>
                <li>Sale:</li>
                <li>Initial Balance:999</li>
              </ul>
            </div>

            <div style="
              width: 225px;
              height: 6px;
              background-color: var(--Purple-3);">
            </div>
          </div> 

          <div class="Reserve" style="margin:0px 5px 0px 0px;">
            <div style="
              width: 225px;
              height: 144px;
              border-radius: 6px;
              border: solid 1px var(--lavender-2);
              background-color: var(--White);">
              <ul>
                <li>Sale:</li>
                <li>Initial Balance:999</li>
              </ul>
            </div>

            <div style="
              width: 225px;
              height: 6px;
              background-color: var(--Purple-3);">
            </div>
          </div> 

        </div>          
      </div>
    </template>

    <template v-slot:footer>    
      <div style="
        height:300px;
      ">
        <p>Locked Wallets</p>
        <div style="display: flex;">
          <div class="sale" style="margin:0px 5px 0px 0px;">
            <div style="
              width: 225px;
              height: 144px;
              border-radius: 6px;
              border: solid 1px var(--lavender-2);
              background-color: var(--White);">
              <ul>
                <li>Sale:</li>
                <li>Initial Balance:999</li>
              </ul>
            </div>

            <div style="
              width: 225px;
              height: 6px;
              background-color: var(--Purple-3);">
            </div>
          </div>     
          
          <div class="partner" style="margin:0px 5px 0px 0px;">
            <div style="
              width: 225px;
              height: 144px;
              border-radius: 6px;
              border: solid 1px var(--lavender-2);
              background-color: var(--White);">
              <ul>
                <li>Sale:</li>
                <li>Initial Balance:999</li>
              </ul>
            </div>

            <div style="
              width: 225px;
              height: 6px;
              background-color: var(--Purple-3);">
            </div>
          </div> 

          <div class="Founders & Team" style="margin:0px 5px 0px 0px;">
            <div style="
              width: 225px;
              height: 144px;
              border-radius: 6px;
              border: solid 1px var(--lavender-2);
              background-color: var(--White);">
              <ul>
                <li>Sale:</li>
                <li>Initial Balance:999</li>
              </ul>
            </div>

            <div style="
              width: 225px;
              height: 6px;
              background-color: var(--Purple-3);">
            </div>
          </div> 

          <div class="Reserve" style="margin:0px 5px 0px 0px;">
            <div style="
              width: 225px;
              height: 144px;
              border-radius: 6px;
              border: solid 1px var(--lavender-2);
              background-color: var(--White);">
              <ul>
                <li>Sale:</li>
                <li>Initial Balance:999</li>
              </ul>
            </div>

            <div style="
              width: 225px;
              height: 6px;
              background-color: var(--Purple-3);">
            </div>
          </div> 

        </div>          
      </div>
    </template>
  </Jumbotron>`,
  data: () => ({
    
  })
}))
.add('vertical', () => ({
  components: { Jumbotron },
  template: `<Jumbotron vertical visibleFooter>
    <template v-slot:left-side>
      <div style="">    
      <div style=" width: 490px;    
      font-family: OpenSans;
      font-size: 38px;
      color: var(--Purple-1);"    
      >Algorithmic Token Distribution </div>
      <div style="width: 490px;
        height: 83px;
        font-family: OpenSans;
        font-size: 20px;
        color: var(--Grey-1);"
      >The ATD protects token value and prevents volatility by restricting sales and payouts, so the value of the token can grow alongside the project.</div>
      <div style="  width: 490px;
      height: 26px;
      font-family: OpenSans;
      font-size: 17px;
      font-weight: 600;
      line-height: 1.41;  
      color: var(--Purple-1);">Smart Contracts:</div>

      <button style="width: 218px;
      height: 40px;
      border-radius: 3px;
      background-color: var(--Purple-3);
      color:#fff;">ATD</button>
      <button style="
      width: 218px;
      height: 40px;
      color: var(--Purple-3);
      ">MESG Token</button>
      </div>
    </template>

    <template v-slot:right-side>
      
      <div style="
        width: 490px;
        height: 150px;
        border-radius: 6px;
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
        background-color: var(--White);
        margin-bottom: 20px;
        ">
        <div>
          <div style="
          width: 60px;
          height: 60px;
          object-fit: contain;
          text-align: center;
          padding: 45px 20px 45px 40px;
          float: left;
          ">image</div>
          <div style="padding-top: 23px;">
            <div style="width: 330px;
            height: 24px;
            font-family: OpenSans;
            font-size: 17px;
            font-weight: 600;
            line-height: 1.41;
            color: var(--Purple-1);"
            >Circulating Supply</div>
            <div style="
            width: 330px;
            height: 36px;
            font-family: OpenSans;
            font-size: 30px;
            color: var(--Purple-3);
            ">7,705,135</div>
          </div>
        </div>
      </div>

      <div style="
        width: 490px;
        height: 150px;
        border-radius: 6px;
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
        background-color: var(--White);
        margin-bottom: 20px;
        ">
        <div>
          <div style="
          width: 60px;
          height: 60px;
          object-fit: contain;
          text-align: center;
          padding: 45px 20px 45px 40px;
          float: left;
          ">image</div>
          <div style="padding-top: 23px;">
            <div style="width: 330px;
            height: 24px;
            font-family: OpenSans;
            font-size: 17px;
            font-weight: 600;
            line-height: 1.41;
            color: var(--Purple-1);"
            >Tokens Released Yesterday</div>
            <div style="
            width: 330px;
            height: 36px;
            font-family: OpenSans;
            font-size: 30px;
            color: var(--Purple-3);
            ">7,705,135</div>
          </div>
        </div>
      </div>

      <div style="
        width: 490px;
        height: 150px;
        border-radius: 6px;
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
        background-color: var(--White);
        margin-bottom: 20px;
        ">
        <div>
          <div style="
          width: 60px;
          height: 60px;
          object-fit: contain;
          text-align: center;
          padding: 45px 20px 45px 40px;
          float: left;
          ">image</div>
          <div style="padding-top: 23px;">
            <div style="width: 330px;
            height: 24px;
            font-family: OpenSans;
            font-size: 17px;
            font-weight: 600;
            line-height: 1.41;
            color: var(--Purple-1);"
            >Trading Volume Yesterday</div>
            <div style="
            width: 330px;
            height: 36px;
            font-family: OpenSans;
            font-size: 30px;
            color: var(--Purple-3);
            ">7,705,135</div>
          </div>
        </div>
      </div>
      
    </template>

    <template v-slot:footer>    
      <div style="
        height:300px;
      ">
        <p>Locked Wallets</p>
        <div style="display: flex;">
          <div class="sale" style="margin:0px 5px 0px 0px;">
            <div style="
              width: 225px;
              height: 144px;
              border-radius: 6px;
              border: solid 1px var(--lavender-2);
              background-color: var(--White);">
              <ul>
                <li>Sale:</li>
                <li>Initial Balance:999</li>
              </ul>
            </div>

            <div style="
              width: 225px;
              height: 6px;
              background-color: var(--Purple-3);">
            </div>
          </div>     
          
          <div class="partner" style="margin:0px 5px 0px 0px;">
            <div style="
              width: 225px;
              height: 144px;
              border-radius: 6px;
              border: solid 1px var(--lavender-2);
              background-color: var(--White);">
              <ul>
                <li>Sale:</li>
                <li>Initial Balance:999</li>
              </ul>
            </div>

            <div style="
              width: 225px;
              height: 6px;
              background-color: var(--Purple-3);">
            </div>
          </div> 

          <div class="Founders & Team" style="margin:0px 5px 0px 0px;">
            <div style="
              width: 225px;
              height: 144px;
              border-radius: 6px;
              border: solid 1px var(--lavender-2);
              background-color: var(--White);">
              <ul>
                <li>Sale:</li>
                <li>Initial Balance:999</li>
              </ul>
            </div>

            <div style="
              width: 225px;
              height: 6px;
              background-color: var(--Purple-3);">
            </div>
          </div> 

          <div class="Reserve" style="margin:0px 5px 0px 0px;">
            <div style="
              width: 225px;
              height: 144px;
              border-radius: 6px;
              border: solid 1px var(--lavender-2);
              background-color: var(--White);">
              <ul>
                <li>Sale:</li>
                <li>Initial Balance:999</li>
              </ul>
            </div>

            <div style="
              width: 225px;
              height: 6px;
              background-color: var(--Purple-3);">
            </div>
          </div> 

        </div>          
      </div>
    </template>
  </Jumbotron>`,
  data: () => ({
    
  })
}))