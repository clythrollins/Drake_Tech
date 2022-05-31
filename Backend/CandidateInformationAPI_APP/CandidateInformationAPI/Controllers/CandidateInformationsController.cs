using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CandidateInformationAPI.Context;
using CandidateInformationAPI.Models;

namespace CandidateInformationAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateInformationsController : ControllerBase
    {
        private readonly DataContext _context;

        public CandidateInformationsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/CandidateInformations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CandidateInformation>>> GetCandidateInformations()
        {
          if (_context.CandidateInformations == null)
          {
              return NotFound();
          }
            return await _context.CandidateInformations.ToListAsync();
        }

        // GET: api/CandidateInformations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CandidateInformation>> GetCandidateInformation(int id)
        {
          if (_context.CandidateInformations == null)
          {
              return NotFound();
          }
            var candidateInformation = await _context.CandidateInformations.FindAsync(id);

            if (candidateInformation == null)
            {
                return NotFound();
            }

            return candidateInformation;
        }

        // PUT: api/CandidateInformations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCandidateInformation(int id, CandidateInformation candidateInformation)
        {
            if (id != candidateInformation.id)
            {
                return BadRequest();
            }

            _context.Entry(candidateInformation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CandidateInformationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CandidateInformations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CandidateInformation>> PostCandidateInformation(CandidateInformation candidateInformation)
        {
          if (_context.CandidateInformations == null)
          {
              return Problem("Entity set 'DataContext.CandidateInformations'  is null.");
          }
            _context.CandidateInformations.Add(candidateInformation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCandidateInformation", new { id = candidateInformation.id }, candidateInformation);
        }

        // DELETE: api/CandidateInformations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCandidateInformation(int id)
        {
            if (_context.CandidateInformations == null)
            {
                return NotFound();
            }
            var candidateInformation = await _context.CandidateInformations.FindAsync(id);
            if (candidateInformation == null)
            {
                return NotFound();
            }

            _context.CandidateInformations.Remove(candidateInformation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CandidateInformationExists(int id)
        {
            return (_context.CandidateInformations?.Any(e => e.id == id)).GetValueOrDefault();
        }
    }
}
