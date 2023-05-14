describe('SampleTest',async () =>{
  it('First Test', async()=> {

    await browser.url('https://katalon-demo-cura.herokuapp.com/')

    await browser.maximizeWindow()
    await browser.pause(3000)
    const linktext = await $('=Make Appointment')
    await linktext.click()
    
    await $('[name="username"]').setValue('John Doe')
    await browser.pause(3000)
    await $('[name="password"]').setValue('ThisIsNotAPassword')
    await browser.pause(3000)
    await $('[id="btn-login"]').click()

    await browser.pause(3000)
    
    const dropdown = await $('[id="combo_facility"]')
    await  dropdown.selectByIndex(1) 
    
    await browser.pause(5000)
    await $('[id="chk_hospotal_readmission"]').click()
    await browser.pause(5000)
    await $('[id="txt_visit_date"]').setValue('27/05/2023')
    await $('[id="txt_comment"]').setValue('Visit Again !! ')


    await $('//button[text()="Book Appointment"]').click()
     
    await browser.pause(10000)


    await $('[id="menu-toggle"]').click()
    await browser.pause(10000)
    const logoutlinktext= await $('*=Logout')
    logoutlinktext.click()


    
    
    

    
    
  })


})